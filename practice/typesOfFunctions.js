//Function declaration

//Function Expression =storing a function in another varibale is called Function Expression
// -Anonymous Function
// -Arrow Function
// -Arguments


//When function start with a functio Keyword it means it is a function declaration
 function add(numA, numB){
    return numA + numB;
 }
 add(10, 21);

//Function Expression
const addNumbers=function add(numA, numB){
    return numA + numB;
 }
 addNumbers(10, 21);


//Anonymous Function Expression
//Here im storing a function in a varible and here no need to give any name to function
 const addNumberss=function (numA, numB){
    return numA + numB;
 }
 addNumberss(10, 21);

//Arrow Functions
 const addNumbersss= (numA, numB) => {
    return numA + numB;
 }
 add(10, 21);

//Here im removing curly braces and return because we have arrow function it will impicitly return  everything 
 const addNumberssss= (numA, numB) =>  numA + numB;
 
 add(10, 21);

const square = (num1) =>  num1 * num2;
//Arrow Function will return implicit return no need to add return statement


const subtract = (abc, rds) => abc -rds;

const ljf=function sub(abc,  rds){
    return abc -rds;
}