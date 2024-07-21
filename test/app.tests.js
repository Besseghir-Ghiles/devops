import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server.js"; // Assurez-vous que ce fichier est également en module ES

const { expect } = chai;
chai.use(chaiHttp);

describe("Basic Server Test", () => {
  it("should return 200 on GET /", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
