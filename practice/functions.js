function addTwoNumbers(){
//Defening a function
let firstNumber = Number(prompt(`Enter first Number`));
let secondNumber = Number(prompt(`Enter second Number`));

alert(`The sum of firstNumber & secondNumber are ${firstNumber + secondNumber}`);
}
addTwoNumbers();
//Function Excution

function getSquare() {
let number =+prompt(`Enter The Number`);
alert(`The Square of ${number} is ${number * number}`);
}
getSquare();
//calling the function

//Creating a function called hello and alerts the message 
function hello() {
    alert(`Hello World!`);
}

//creating function called fullname

function fullName() {
    let firstName = prompt(`Enter your first name`);
    let lastName = prompt(`Enter your last Name`);
    let full = `${firstName + lastName}`;
    alert(`${full}`);
}

    
//creating a function called Addtwonumbers
function addTwoNumbers() {
    let firstNumber = prompt(`Enter your first number`);
    let lastNumber = prompt(`Enter your last number`);
    let sum = `${firstNumber + lastNumber}`;
    alert(`${sum}`);
}
function getTable() {
    let num= +prompt(`Enter a number`);
    for(let i = 1; i <=10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

function getFactorial() {
 let num = prompt(`Enter a year Year`);
 let final = 1;
 for(let i = num; i >= 1; i--){
    final *= i;
 }
 alert(`The factorial of ${num} is ${final}`);
}
