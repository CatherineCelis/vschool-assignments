var assertEqual = function(actual, expected){
    // return actual === expected;
    if(actual !== expected){
    // is actual is not equal to expected
        throw {type: "Fail", details: {actual: actual, expected: expected, msg: "Expected" + actual + "To equal" + expected}};
    } else {
        console.log("Success!", {type: "Sucess", details: {actual: actual, expected: expected}});

    }   
}
// console.log(assertEqual(4, 4));
function describe(message, testFunc){
    console.log("Test being run: " + message);
    try{
        testFunc();
    } catch(err){
        console.log(err);
    }
}

function sum(x, y){
    return x + y;
}

describe("Sum function", function(){
    assertEqual(sum(6, 4), 10);
    // you can add multiple asserts here
});
