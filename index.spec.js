const request = require("supertest");
const { setupExpressServer } = require("./index");

const app = setupExpressServer();

describe("The API server", () => {
  describe("GET /hello - returning text", () => {
    it('should return text/html "world"', async () => {
      const res = await request(app).get("/hello");
      expect(res.text).toBe("world");
    });
  });
});
