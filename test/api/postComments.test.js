const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
const { expect } = chai;

chai.use(chaiHttp);

describe("POST /comments", () => {
  it("should add a new comment successfully", (done) => {
    const newComment = {
      body: "This makes all sense to me!",
      postId: 3,
      userId: 5,
    };

    chai
      .request(server)
      .post("/comments")
      .send(newComment)
      .end((err, res) => {
        // Check if HTTP 201 status was returned
        expect(res).to.have.status(201);
        // Check if New ID, Body, and postID are generated.
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("body").eql(newComment.body);
        expect(res.body).to.have.property("postId").eql(newComment.postId);
        // Close Chai
        done();
      });
  });
  require("./postCommentsMissingProps.test");
  require("./postCommentsIncorrectInput.test.js");
});
