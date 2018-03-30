// Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.
// type of is an operator used to determine the type of a set operand(test is the set operand)operand is an expression representing the object or primitive whose type is to be returned.
const checkDataTypes = input => {
    const test = input[0][0];
    for(let i = 0;i < input.length;i++){
        for(let j = 0;j < input[i].length;j++){
            if(typeof test !== typeof input[i][j]){
                return false;
            }
        }
    }
    return true;
}
// const checkDataTypes = input => {
//     const test = input[0][0];
//     for(let i = 0; i < input.length; i++){
//         for(let j = 0; j < input[i].length;j++){
//             if(typeof test !== typeof input[i][j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(checkDataTypes(multiD1));

const multiD1 = [[1,2,3], ["a","b","c"], [true, true, true]];

const multiD2 = [[true,false,true],[false,false,true]]
// so this is a dynamic function that answers the question below

// const checkDataTypes = input => {
//     const test = input[0][0];
//     for(let i = 0; i < input.length;i++){
//         for(let j = 0; j < input[i].length;j++){
//             if(typeof test !== typeof input[i][j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(checkDataTypes(multiD2));

const checkDatTypesEvery = input => input.every(subArr => sub.every(item => typeof item === typeof input[0][0]));
 


    // we need to check through every index of every array, inside of the array
    
    
    // we need to compare every nested array to the next

    
