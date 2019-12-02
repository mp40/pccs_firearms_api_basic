const request = require("supertest");

const { guns } = require("./seedGuns");
const { setupExpressServer } = require("./index");

const app = setupExpressServer();

describe("The API server", () => {
  describe("GET /", () => {
    it("should return a list of guns", async () => {
      const res = await request(app).get("/");
      expect(JSON.parse(res.text)).toEqual({ results: guns });
    });
  });
  describe("GET /1", () => {
    it("should return a gun matching id 1", async () => {
      const res = await request(app).get("/1");
      expect(JSON.parse(res.text)).toEqual(guns[0]);
    });
  });
});
