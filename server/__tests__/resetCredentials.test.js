// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the route /services/resetCredentials", () => {
  test("testing for Missing fields", async () => {
    const response = await supertest(app)
      .put("/services/resetCredentials")
      .send({ email: "jhn45@yahoo.com" });

    expect(response.body).toEqual({ msg: "User does not exists" });
  });
  test("testing for Password Reset", async () => {
    const response = await supertest(app)
      .put("/services/resetCredentials")
      .send({ email: "alice23@gmail.com", resetPassword: "allic3894" });

    expect(response.body).toEqual({ msg: "Password reset successfully" });
  });

  test("get all userrs", async () => {
    const response = await supertest(app).get("/services/getallusers");
    expect(response.statusCode).toEqual(200);
  });
});
