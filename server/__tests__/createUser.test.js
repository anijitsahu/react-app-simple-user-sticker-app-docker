// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the server", () => {
  test("testing /services/createUser", async () => {
    const response = await supertest(app)
      .post("/services/createUser")
      .send({ email: "anij@gmail.com", name: "Anii" });

    // important fields of response --- body, statusCode, text etc.
    expect(response.statusCode).toEqual(400);
  });
});
