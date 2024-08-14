const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
const { expect } = chai;

chai.use(chaiHttp);

describe("GET /comments", () => {
  it("should fetch comments successfully", (done) => {
    chai
      .request(server)
      .get("/comments")
      .end((err, res) => {
        expect(res).to.have.status(200); // Check for HTTP 200 status
        expect(res.body).to.have.property("comments"); // Check if 'comments' property exists

        // Focus on the comments array directly
        const comments = res.body.comments; // Extracting the comments array
        expect(comments).to.be.an("array"); // Check if `comments` is an array
        expect(comments).to.have.length.greaterThan(0); // Optional: Ensure it's not empty

        done();
      });
  });
});
