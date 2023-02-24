// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the route /services/createUser", () => {
  test("testing with missing fields", async () => {
    const response = await supertest(app)
      .post("/services/createUser")
      .send({ email: "anij@gmail.com", name: "John" });

    // important fields of response --- body, statusCode, text etc.
    expect(response.statusCode).toEqual(400);
  });

  test("testing for Malformed Email", async () => {
    const response = await supertest(app)
      .post("/services/createUser")
      .send({ email: "john23", name: "John Doe" });

    expect(response.body).toEqual({
      msg: "User already exists or Invalid EmailId",
    });
  });

  test("testing for User Creation", async () => {
    const response = await supertest(app).post("/services/createUser").send({
      email: "john23@gmail.com",
      name: "John Doe",
      password: "john123899",
    });

    expect(response.body).toEqual({
      msg: "user created successfully",
      userCreated: {
        email: "john23@gmail.com",
        name: "John Doe",
      },
    });
    expect(response.statusCode).toEqual(200);
  });
});
