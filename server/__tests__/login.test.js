// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the route /services/createUser", () => {
  test("testing for Missing fields", async () => {
    const response = await supertest(app)
      .post("/services/login")
      .send({ email: "anij@gmail.com" });

    expect(response.body).toEqual({ msg: "wrong credentials" });
  });

  test("testing for Correct User Login", async () => {
    const response = await supertest(app).post("/services/login").send({
      email: "alice23@gmail.com",
      password: "john123899",
    });

    expect(response.body).toEqual({
      email: "alice23@gmail.com",
      name: "Alice Carl",
    });

    expect(response.statusCode).toBe(200);
  });
});
