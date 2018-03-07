


function removeDuplicateCharacters(str) {
    let output = {
        noDupes: "",
        extras: ""
    }
    // to solve this problem write a 4 loop
    for(var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            output.noDupes += str[i];
        } else {
            output.extras += str[i];
        }
    }
    return output;
}
  console.log(removeDuplicateCharacters("bookeeper"));

// EXAMPLE THAT A STUDENT HAD GIVEN PRIOR TO THE TEACHER SOLVING PROBLEM
// return string
    //   .split('')
    //   .filter(function (item, pos, self) {
    //     return self.indexOf(item) === pos;
    //   })
    //   .join('')