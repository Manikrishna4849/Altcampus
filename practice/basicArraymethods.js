// flat it used to flat the array
// concat used to concat 1 or more arrays
// push it will add the variabke in the last
// pop it used to delete the last value
// shift it is used to delete the first value in the array
// unshift it is used to add the first value in the array we can add multiple values
// indexof it will check for the value inthat particular index
// lastindexof it will check for the value inthat particular index
// includes it will check for particular elelment and returns boolean
// reverse it will revers the array
// splice it will do if you enter the index from that index till last it will remove
// slice it will delete the array if we pass the index but it is notmutatae

//Mutatae means if original array got changed then it menas it is muatated 


let colours = ["Acqa", "Black", "Blue", "Brown", "Chocalate", "Coral", "Crimson", "DarkBlue", "DarkGray"];
let numbers = [1, 4, 5, 6, 7, 8, 9, 12, 14, 156, 265];


colours.forEach((colo) =>{ console.log(colo)})
numbers.forEach((num) =>{  console.log(num)})
   


























// function forEachElelment(array, cb) {
//     for (let i  = 0; i < array.length; i++) {
//         const elelment =array[i];
//         cb(elelment)
// }
// }
// let allColours = "";
// forEachElelment(colours, forEachcolour );



// function forEachcolour(colour) {
//     allColours += colour + ` `;
// }
// console.log(allColours)

// let allnumbers = "";

// forEachElelment(numbers, forEachNumber );
// function forEachNumber(num){
//     allnumbers += num + ` `;
// }
// console.log(allnumbers)