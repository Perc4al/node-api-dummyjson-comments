const chai = require("chai");

function checkErrorResponse(res, done) {
  try {
    chai.expect(res).to.have.status(400);
    chai.expect(res.body).to.have.property("errors");
    done();
  } catch (error) {
    done(error);
  }
}

module.exports = { checkErrorResponse };
