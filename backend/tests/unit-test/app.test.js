const app = require("../../index.js");
const request = require("supertest");

describe("GET /health route checking", () => {
    it("should return 200", () => {
        request(app).get("/health").expect(200);
    })
    it("should return server is healthy", () => {
        request(app).get("/health").expect("Server is healthy");
    })
})