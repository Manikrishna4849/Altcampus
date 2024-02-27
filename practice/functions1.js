//Function with Input
//Function with multiple input
//Function with output
function sayHello(name, occupation) { //we are adding parameters to function
 return `Hello My name is ${name} & My occuaption is ${occupation}` ;
}
let msg1=sayHello("Mani" , "Tester");
let msg2=sayHello("Moushin" ,"Tester");
let msg3=sayHello("Shivani" ,"Tester");
let msg4=sayHello("Meghana" ,"Tester");
 alert(msg1);
 alert(msg2);
 alert(msg3);
 alert(msg4);
//The Below StateMent is Fuction Declaration
function addNumbers(a,b){
    return a + b;
}
addNumbers(12,255);//Here we are calling function name using paranthesis this is called function call
addNumbers(100,25);//here are declaring the arguments to functions , when we are calling the functions arguments will be passed

//The Below StateMent is Fuction Declaration
function sayHello(name){
console.log(name);
}
 
sayHello("Mani");//Here we are calling function name using paranthesis this is called function call
sayHello("Shivani");
//The Below StateMent is Fuction Declaration
function square(number){
    return number * number;
}
square(20);
//The Below StateMent is Fuction Declaration
function name(firstname,lastname){
    return `${firstname} ${lastname}`;
}
getfullName("mk","khjd");//Here we are calling function name using paranthesis this is called function call
getfullName("zlj","kj");
