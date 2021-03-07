var supertest = require("supertest");
var should = require("should");
require('dotenv').config();

var server = supertest.agent("http://localhost:3000");

describe("SAMPLE unit test", function () {
    it("should work", function (done) {
        server
        .get("/")
        .expect(200)
        .end(function (err, res) {
            res.status.should.equal(200);
            done();
        });
    });

    it("should initialize the DB", function (done) {
        server
        .get("/api")
        .expect(200) // THis is HTTP response
        .end(function (err, res) {
            // HTTP status should be 200
            res.status.should.equal(200);
            console.log(res.body);
            done();
        });
    });

    it("should get categories", function (done) {
        server
        .get("/api/getAllCategories")
        .expect(200)
        .end(function (err, res) {
            res.status.should.equal(200);
            console.log(res.body);
            done();
        });
    });

});
