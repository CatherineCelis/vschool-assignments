// The parameter weekday is true if it is a weekday, and the parameter vacation // is true if we are on vacation. We sleep in if it is not a weekday or we're on // vacation. Return true if we sleep in.

// var sleepIn = function(weekday, vacation){ 

//     if (!weekday || vacation) {
//       return true;
//     } else {
//       return false;
//     }
    
//     }
    // Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

// v
// nearHundred = function(n){
//     // use a conditional
//     // < > ||
//     // if ((n > 89 && n < 111)) || (n > 189 && n < 211){
//         return true;
//     }

    // if
// }
nearHundred = function(n){
return Math.abs ((n -100) <= 10 || Math.abs (n - 200) <= 10);
}

