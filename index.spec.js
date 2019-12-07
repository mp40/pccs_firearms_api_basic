const request = require("supertest");

const { guns } = require("./seedGuns");
const { setupExpressServer } = require("./index");

const db = require("./db");
const app = setupExpressServer();

describe("The API server", () => {
  let req;
  let spy;
  beforeEach(() => {
    req = request(app);
    spy = jest.spyOn(db, "getGuns").mockImplementation(() => {
      return Promise.resolve(guns);
    });
  });
  afterEach(() => {
    spy.mockRestore();
  });
  describe("GET /guns", () => {
    it("should return a list of guns", async () => {
      const res = await req.get("/guns");
      expect(JSON.parse(res.text)).toEqual({ results: guns });
      expect(spy).toHaveBeenCalled();
    });
  });
  describe("GET /Gun By Id", () => {
    it("should return a gun matching id 1", async () => {
      const res = await req.get("/guns/1");
      expect(JSON.parse(res.text)).toEqual(guns[0]);
    });
  });
  describe("GET /Gun By Name", () => {
    it("should return a gun matching name M1 Carbine", async () => {
      const res = await req.get("/guns/M1 Carbine");
      expect(JSON.parse(res.text)).toEqual(guns[1]);
    });
  });
});
