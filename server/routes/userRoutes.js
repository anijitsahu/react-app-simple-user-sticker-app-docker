// imports dependencies
import { Router } from "express";

// local file dependencies
import { getAllUsers } from "../helpers/dbOps.js";
import {
  comparePassword,
  generatePasswordHash,
} from "../helpers/passwordOps.js";
import { sendResponse } from "../helpers/sendResponse.js";

const router = Router();
const { SUCCESS, NOT_FOUND, SERVER_ERR } = process.env;

router.get("/getallusers", (req, res) => {
  getAllUsers(req, res);
});

// creates a new user
router.post("/createUser", async (req, res) => {
  console.log("body", req.body);
  const { email, name, password } = req.body;
  const emailRegex = /^\w\S{3,}@\D{2,5}\.\D{2,3}/;

  let output;
  // if no user exists having the same email id
  if (!USERS[email] && emailRegex.test(email)) {
    if (password) {
      try {
        // add bcrypt here
        const passwordHash = await generatePasswordHash(password, 5);
        USERS[email] = { name: name || email, password: passwordHash };

        fs.writeFile(
          "./userlist.json",
          JSON.stringify(USERS),
          "utf8",
          (err) => {
            if (err) {
              handleError(err, res);
            }
            res.status(200).json({
              msg: "user created successfully",
              userCreated: { email, name: name || email },
            });
          }
        );
      } catch (err) {
        handleError(err, res);
      }
    } else {
      output = { msg: "Please enter username and password" };
      sendResponse(NOT_FOUND, output, res);
    }
  } else {
    output = { msg: "User already exists or Invalid EmailId" };
    sendResponse(NOT_FOUND, output, res);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (USERS[email]) {
      const isSame = await comparePassword(password, USERS[email]["password"]);
      console.log("Is same received", isSame);

      isSame
        ? sendResponse(SUCCESS, { name: USERS[email]["name"], email }, res)
        : sendResponse(NOT_FOUND, { msg: "wrong credentials" }, res);
    } else {
      sendResponse(NOT_FOUND, { msg: "wrong credentials" }, res);
    }
  } catch (err) {
    handleError(err, res);
  }
});

// forget
router.post("/forget/:email", (req, res) => {
  const { email } = req.params;
  let output;
  if (USERS[email]) {
    output = { msg: "Enter new password", resetPassword: true };
    sendResponse(SUCCESS, output, res);
  } else {
    output = { msg: "User does not exists" };
    sendResponse(NOT_FOUND, output, res);
  }
});

// reset credentials
router.put("/resetCredentials", async (req, res) => {
  let { email, resetPassword, resetEmail } = req.body;
  let output;
  try {
    if (USERS[email]) {
      if (resetPassword) {
        USERS[email]["password"] = await generatePasswordHash(resetPassword, 5);
      } else if (resetEmail) {
        USERS[resetEmail] = {
          name: USERS[email]["name"],
          password: USERS[email]["password"],
        };

        // delete the old user
        delete USERS[email];
      }

      fs.writeFile("./userlist.json", JSON.stringify(USERS), "utf8", (err) => {
        if (err) {
          handleError(err, res);
        }
      });
      output = { msg: "Password reset successfully" };
      sendResponse(SUCCESS, output, res);
    } else {
      output = { msg: "User does not exists" };
      sendResponse(NOT_FOUND, output, res);
    }
  } catch (err) {
    handleError(err, res);
  }
});

const handleError = (err, res) => {
  console.log("error occurred", err);
  let output = { msg: "Internal server error" };
  sendResponse(SERVER_ERR, output, res);
};

export default router;
