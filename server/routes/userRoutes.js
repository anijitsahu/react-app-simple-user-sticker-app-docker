// imports dependencies
import { Router } from "express";

// local file dependencies
import { connectDbAndRunQueries } from "../helpers/dbOps.js";
import {
  comparePassword,
  generatePasswordHash,
} from "../helpers/passwordOps.js";

const router = Router();

router.get("/getallusers", (req, res) => {
  connectDbAndRunQueries("getAllUsers", req, res);
});

// creates a new user
router.post("/createUser", async (req, res) => {
  console.log("body", req.body);
  const { email, name, password } = req.body;
  const emailRegex = /^\w\S{3,}@\D{2,5}\.\D{2,3}/;

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
      res.status(400).json({ msg: "Please enter username and password" });
    }
  } else {
    res.status(400).json({ msg: "User already exists or Invalid EmailId" });
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
        ? res.status(200).json({ name: USERS[email]["name"], email })
        : res.status(404).json({ msg: "wrong credentials" });
    } else {
      res.status(404).json({ msg: "wrong credentials" });
    }
  } catch (err) {
    handleError(err, res);
  }
});

// forget
router.post("/forget/:email", (req, res) => {
  const { email } = req.params;
  if (USERS[email]) {
    res.status(200).json({ msg: "Enter new password", resetPassword: true });
  } else {
    res.status(400).json({ msg: "User does not exists" });
  }
});

// reset credentials
router.put("/resetCredentials", async (req, res) => {
  let { email, resetPassword, resetEmail } = req.body;
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
      res.status(200).json({ msg: "Password reset successfully" });
    } else {
      res.status(400).json({ msg: "User does not exists" });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const handleError = (err, res) => {
  console.log("error occurred", err);
  res.status(500).json({ msg: "Internal server error" });
};

export default router;
