 let fruits =["Mango", "sapota" ,"PineApple"];
 let numbers = [1,2,3,4,5,67,8,9,545,64,949,494,694,97,64979,464,974,61,47894,4]
// //For loop im using
// for(let i =0 ;i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// for(let i =0 ;i < numbers.length; i++){
//     console.log(numbers[i]);
// }
//Here im using for of loop
for (const fruit of fruits) {
    console.log(fruit);
 
}
let odd = [], even = [];
for (const number of numbers) {
    if (number % 2 ===0) {
       even.push(number);
      
    } else {
        odd.push(number);
       
    }
}
console.log(even);
console.log(odd);