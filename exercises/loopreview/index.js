// create an array
// fill the array with 3 arrays
// each of the inner arrays will have 3 "x"
// inject the arrays with "x"s into the bigger array 

function chessBoardGen(num) {
    var output = []
    for (var i = 0; i < num; i++){
        output.push([])
        // line 6 through 9 creates an empty array
        // outer loop is defining the rows
        for (var j = 0; j < num; j++) {
            output[i][j] = "x"
            // output[i].push("x")
            // inner loop in injected data into those arrays
            output[i].push()
            // line 11 through 12 is injecting each []in the array with "x"
        }
    }
    return output;
}
console.log(chessBoardGen(8));
// your cosole.log parameter gives us how many times to run our code
// both the inner loop and the outer loop will run 8 times and fill in the grid.See picture taken in the ferminal to see example.