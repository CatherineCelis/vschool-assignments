// Warm-Up
// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

// Given a string, write a function that determines whether it is a valid IP address.
let ipz = "172.16.254.1";

// write a function
function valiDip(str){
    for(let i = 0;i < str.length; i++) {
        // test a string to see how many instances of a dot appear in the string
        if(str[i]=== ".")
        return i++;
        // change string data to a number and then compare that data to the number 3
        if(i === 3){
        return true;
        }
    }
    return true;
}

valiDip();

// compare string to a regex expression
// use .test method to match against string
// check for not ending with a dot
// number between 0 - 255
// doesnt start with 0
// exactly 4 sets of numbers
// separated by a dot


const isValidIp = str => {
    // let arr = str.split(".").map(Number);
    let arr = str.split(".");
    console.log(arr);
    if (arr.length !== 4) return false;
    return arr.every(str => {
        if(str.length > 1 && str[0] === "0")
            return false;
        if()
    })
} 
    console.log(arr);
    isValidIp();


    // for(let i = 0; i <arr.length;i++){
    //     if (arr.length !== 4){
    //         return false;
    //     } else if (arr[i])< 256 && arr[i] > -1){
    //         return true;
    //     } else{
    //         return false;
    //     }
    // }
}



// bens answer

const isValidIP = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
        return arr.every((str, i) => {
            let num = parseInt(str);
            if (str !== num.toString())
                return false;
            if (i === 0) {
                return (Number(str) > 0 && Number(str) < 256);
            } else if (i === 3) {
                return (Number(str) > 1 && Number(str) < 255)
            }
            else {
                return (Number(str) > -1 && Number(str) < 256)
            }
        });
}
console.log(isValidIP("1.203.0.5"));

// heavens answer


//set variable to turn num value into a str
//set variable to equal a reg expression
//create RegExp:
// Normally IPs cannot start with 0  
//^(?!0)= negative look ahead for a 0 at the beginning of str
//(?!.*\.$) Make sure string does not end with a dot
//?!.* =the negative look ahead that includes any character except line breaks(.*)
//\.$ = (\. so the computer knows your looking for an actual (.)
//$= at the end of string 
//  1?\d?\d|   A single digit, two digits, or 100-199
  //25[0-5]|   The numbers 0-255
  //2[0-4]\d   The numbers 200-249
//\.|$ the number must be followed by either a dot or end-of-string - to match the last number
//{4}         Expect exactly four of these
//$ end of string
function validateIp(str){
    var ipAddress = str;
        var rx = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ipAddress);
    if(rx === true){
        console.log("IP Address is valid");
    }else{
    console.log("IP Address is invalid");
    }
    }
    validateIp("173.rof.11.d.");
    validateIp("172.16.2584");
    validateIp("172.16.254.1");