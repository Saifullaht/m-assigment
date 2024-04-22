// let myarr = [
//     [2,3,4,5,],
//     [5,5,5,8],
//     [7,2,5,],
//     [4,5,2],

// ]
// let myarr1 = [
//     [2,3,4,5,],
//     [5,5,5,8],
//     [7,2,5,],
//     [4,5,2],

// ]
// let result = [[]]
// for (let i = 0; i < myarr.length; i++) {
//     result[i]=[]
//     for (let j = 0; j < myarr1.length; j++) {
//         const sum = myarr[i][j]+ myarr1[i][j] 
//         result[i].push(sum)
        
//     }
    
// }
// console.log(result);

//********************2 Multiplication********************* */

// let matrix1 = [
//     [1,2,3,4],
//     [4,5,2,1],
//     [5,5,2,1],
//     [4,5,1,8],

// ]

// for (let i = 0; i < matrix1.length; i++) {
//     for (let j = 0; j < matrix1[i].length; j++) {
        
//     console.log(matrix1[i][j]* matrix1[i][j]);
//     }
    
// }

 //**********************2nd********************* */

let matrix2 = [
    [1,3,4],
    [2,4,3],
    [4,5,4],
];

let matrix3 = [
[1, 2, 4],
[5, 7, 5],
[5, 2, 1],
];


for (let i = 0; i < matrix2.length; i++) {
for (let j = 0; j < matrix3.length; j++) {

console.log(matrix2[i][j] + matrix3[i][j] );
}


} 
