// npm deps
import supertest from "supertest";
import app from "../server.js";

describe("Testing the route /services/forget/:email", () => {
  test("testing for Missing fields", async () => {
    const response = await supertest(app).post(
      "/services/forget/:anij@gmail.com"
    );

    expect(response.body).toEqual({ msg: "User does not exists" });
    expect(response.statusCode).toEqual(400);
  });
});
