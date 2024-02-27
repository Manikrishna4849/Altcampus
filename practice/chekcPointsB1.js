let userAge = NaN;
if (userAge == NaN) {
    alert(`The value is NaN`)
} else {
    alert(`Sorry The value is Not NaN`)

}

let user1 = 'Sameer';
let user2 = 'sameer';
if (user1 == user2) {
    alert(`Both values are equal`)
} else {
    alert(`Both value are not equal`)
    
}
function sum(a, b) {
    return a + b;
  }
  
  sum(1, '2'); // Output

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);


function getAge() {
    age = 21;
    console.log(age);
  }
  
  getAge(); // output or issue if any

  function sayHi() {
    function add() {
      return 21;
    }
    return add();
  }
  
  console.log(typeof sayHi()); // output
 

let totalamont = 0;
let phonePrize = +prompt(`Enter a Phone Prize`);

while(totalamont+phonePrize <= 20000){
    totalamont += phonePrize;
    alert(`Buy a new phone`);
}
alert(`The total amount is > 20000`)
//   Next to each line given below write condition or loop based on what will be used in solving.
// List numbers from 1 to 100
// for(let i=1; i<=100;i++)
// Check if the number id odd or even
// if(i % 2 == 0){
// alert(`Even`)
// else
// {
// alert("odd")
// }
// }
// Keep buying phone if the total amount is less than 20000
// let totalamont =20000;


// Only buy accessories if the total amount id less than 10000

// List all the even values from 0 to 100

// List all the odd values from 0 to 100

// Drink a glass of water when you are thirsty


