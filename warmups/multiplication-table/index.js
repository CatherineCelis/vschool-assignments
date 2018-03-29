// function multiplicationTable(groups, indexes){

//     let array = [];
//     let g = 0;
//     let i = 0;
  
//     //---Loop for the groups
//     for(g = 0; g < groups; g++){
//       //---Create multidimensional array
//       array[g] = [];
  
//       //---Loop for the indexes of the each group
//     for(i = 0; i < indexes; i++){
//         array[g][i] = (g + 10) * (i + 10);
//         return array;
//       }
  
//     }
  
//     return array;
  
//   }

// console.log(multiplicationTable());
// //  [[1,2],[2,4]]

// console.log(multiplicationTable());

// for (var i = 0; i < 11; i++) {

//         newwindow.document.write("<tr>")
//         for (var j = 0; j < 11; j++) {


// function multiplicationTable(width, height){
//     var table = [];
//     var row = [];
//         for (i = 0; i < width; i++){
//             for (j = 0; j < height; j++){
//                 row.push((i + 1)*(j + 1));
//             }
//             table.push(row);
//             row = [];
//         }
//             return table;
// }
              
// cosole.log(multiplicationTable(3,3));   


// function multiplicationTable(rows, columns){
//     var array = [];
//     //---Loop for the rows
//     for(i = 0; i < rows; i++){
  
//       //---Create multidimensional array
//       array[i] = [];
  
//       //---Loop for the columns of the each group
//       for(j = 0; j < columns; j++){
  
//         array[i][j] = (i + 1) * (j + 1);
  
//       }
  
//     }
  
//     return array;
  
//   }
 
//   console.log(multiplicationTable(27,39))
    


// make a container array for the nested arrays
// fill it with 10 arrays
// fill each array with sub array with 10 numbres incremented by the row number
// return output array

// const multTable = () => {
//     const output = [];
//     let a = 0;
//     let b = 1;
//     let c = 0;
//     for(let i = 1; i < 11; i++) {
//         a++
//         b+=10;
//         c++
//         const row = [];
//         for(let j = a;j < b; j += c) {
//             row.push(j);
//         }
//         output.push(row);
//     }
//     return output;
// }
// console.log(multTable());

// const multTable = () => {
//     const output = [];
//     // let a = 0;
//     // let b = 1;
//     // let c = 0;
//     for(let i = 1; i < 11; i++) {
//         // a++
//         // b+=10;
//         // c++
//         const row = [];
//         for(let j = 1;j < 11; j ++) {
//             row.push(j * i);
//         }
//         output.push(row);
//     }
//     return output;
// }
// console.log(multTable());

const multTable = (n) => {
    const output = [];
    // let a = 0;
    // let b = 1;
    // let c = 0;
    for(let i = 1; i <= n; i++) {
        // a++
        // b+=10;
        // c++
        const row = [];
        for(let j = 1;j <= n; j ++) {
            row.push(j * i);
        }
        output.push(row);
    }
    return output;
}
console.log(multTable(10));
