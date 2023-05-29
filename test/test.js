const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

describe("post user reqres", () => {
  it("success register", async function () {
    const response = await request
      .post("/api/users")
      .send({ name: "dika", job: "QAengineer" });

    expect(response.body.name).to.equal("dika");
    expect(response.body.job).to.equal("QAengineer");
  });

  it("get user list", async function () {
    const response = await request.get("/api/users?page=2");

    expect(response.body.per_page).to.equal(6);
    expect(response.body.total).to.equal(12);
  });
  it("get single user", async function () {
    const response = await request.get("/api/users/2");

    expect(response.body.data.email).to.equal("janet.weaver@reqres.in");
    expect(response.body.data.first_name).to.equal("Janet");
  });
});
