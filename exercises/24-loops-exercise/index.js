// Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.

function eachLetter(str) {
    var printEach = "";
    for(var i = 0;i < str.length; i++) {
        printEach = str[i];
        console.log(printEach);
    }
}

eachLetter("anamonnapeacentapeedasnapdragon");

// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

var getCharacter = function (str, char){
    for (var i = 0; i < str.length; i++){
        if(str[i] === char) {
            console.log(i);
            return
        } 
    }
    console.log("character not found")
}

getCharacter("test","s");



// Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.

function findFortyTwo(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 42){
            console.log("i is " + i);
            return "found 42";
        }
    }
    return "42 is not found";
}

console.log(findFortyTwo([42, 3, 4]));

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()


function smallestNum([a,b,c,d,e,f,g,h,i,j]) {
    var arr = [a,b,c,d,e,f,g,h,i,j];
        var smallest = arr[0];
    for (var i = 0; i< arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }  
}
return smallest;
}

console.log(smallestNum([6,9,7,6,3,3,1,9,8,7]));

