var chai = require("chai");
var assert = chai.assert;

var helperCallbForFilt = require("../app.js");
// the above line imports file from app.js

var testCases = {
    case0: "code",
    case1: "ccc",
    case2: "cofe",
    case3: "xxxcorecodexxx"
}

describe("counting code warmup test", function(){
    it("should return 1", function () {
        assert.equal(helperCallbForFilt(testCases.case0), 1)
    });
    // here you can continue to test the other cases for their expected and actual values...

})