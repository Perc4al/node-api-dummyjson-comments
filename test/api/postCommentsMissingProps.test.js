const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
const { checkErrorResponse } = require("../helpers");

chai.use(chaiHttp);

describe("POST has missing properties", (done) => {
  it("should return error when body is missing", (done) => {
    const incompleteComment = {
      postId: 3,
      userId: 5,
    };

    chai
      .request(server)
      .post("/comments")
      .send(incompleteComment)
      .end((err, res) => checkErrorResponse(res, done));
  });

  it("should return error when postId is missing", (done) => {
    const incompleteComment = {
      body: "Hello! This is very nice!",
      userId: 5,
    };

    chai
      .request(server)
      .post("/comments")
      .send(incompleteComment)
      .end((err, res) => checkErrorResponse(res, done));
  });
  it("should return error when userId and body is missing", (done) => {
    const incompleteComment = {
      postId: 3,
    };

    chai
      .request(server)
      .post("/comments")
      .send(incompleteComment)
      .end((err, res) => checkErrorResponse(res, done));
  });
});
