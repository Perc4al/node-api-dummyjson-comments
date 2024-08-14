const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
const { checkErrorResponse } = require("../helpers");

chai.use(chaiHttp);

describe("POST input are incorrect", (done) => {
  it("should return error when body input is incorrect", (done) => {
    const incompleteComment = {
      body: 1337,
      postId: 3,
      userId: 5,
    };

    chai
      .request(server)
      .post("/comments")
      .send(incompleteComment)
      .end((err, res) => checkErrorResponse(res, done));
  });
  it("should return error when postId input is incorrect", (done) => {
    const incompleteComment = {
      body: "I have the wrong data type for my userId, help!",
      postId: "5postId",
      userId: 5,
    };

    chai
      .request(server)
      .post("/comments")
      .send(incompleteComment)
      .end((err, res) => checkErrorResponse(res, done));
  });
  it("should return error when userId input is incorrect", (done) => {
    const incompleteComment = {
      body: "I have the wrong data type for my userId, help!",
      postId: 3,
      userId: true,
    };

    chai
      .request(server)
      .post("/comments")
      .send(incompleteComment)
      .end((err, res) => checkErrorResponse(res, done));
  });
});
