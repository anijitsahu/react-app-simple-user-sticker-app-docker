// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the server", () => {
  test("testing /services/createUser", async () => {
    const response = await supertest(app)
      .post("/services/createUser")
      .send({ email: "anij@gmail.com", name: "Anii" });

    console.log(" response", response);
    expect(response.statusCode).toEqual(200);
  });
});
