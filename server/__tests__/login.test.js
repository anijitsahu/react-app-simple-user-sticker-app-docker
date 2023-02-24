// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the server", () => {
  test("testing /services/createUser", async () => {
    const response = await supertest(app)
      .post("/services/login")
      .send({ email: "anij@gmail.com" });

    expect(response.body).toEqual({ msg: "wrong credentials" });
  });
});
