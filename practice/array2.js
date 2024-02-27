let numbers = [1,2,3,4,5];
let sum= 0 ;
for(let number of numbers){
    sum +=number;
}
console.log(sum);
let highestNumber = numbers[0];
 for (let num of numbers) {
    if(num > highestNumber){
        highestNumber = numbers;
    }  
 }
 console.log(highestNumber)

 let lowestNumber = numbers[0];
 for (let num of numbers) {
    if(num < lowestNumber){
        lowestNumber = numbers;
    }  
 }
 console.log(lowestNumber);

 for (let num of numbers) {
    if(num % 2 == 0)
    console.log(`Even numbers is ${num}`)
    else
    console.log(`Odd numbers is ${num}`)

 }

 
 for (let num of numbers) {
    if(num % 5 == 0)
    console.log(num , `Divisible by 5`)

 }
 for (let num of numbers) {
    console.log(num)

 }

