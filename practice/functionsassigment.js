
//Here im adding function called addone
function addOne(n){
 return n + 1;
}
// here im doing function epression
let addOne = function (n){
 return  n + 1;
}
//Here im using =>
let addOne = (n)  => n + 1;
let num=addOne();

// here im using function declaration
function  oddOrEven(num){
    if(num % 2===0)
    return `Number is Even`    
    else
    return `Number is Odd`    
}
 //Here im using anonymous Function Expression && here name for functinal expression is optinoal
let oddOrEven =function (num){
    if(num % 2===0)
    return `Number is Even`    
    else
    return `Number is Odd`    
}
//Here im using anonymous Function Expression im adding name to function
let oddOrEven =function oddeven (num){
    if(num % 2===0)
    return `Number is Even`    
    else
    return `Number is Odd`    
}
//arrow function with curly braces
//Here we can't add a name to function
let oddOrEven =  (num) =>{
    if(num % 2===0)
    return `Number is Even`    
    else
    return `Number is Odd`    
}
//Here im writing without curly braces and using turnery operator here we cant use if else bcaz it is a statement right side of the equals operator we cant use
let oddOrEven =  (num) =>
      num % 2 === 0 ? `Number is Even` : `Number is Odd` 
      
//Here im excuting the function
oddOrEven();

//im storing the function in an variable
let oddNum=oddOrEven();

// im checking the type of operator
typeof oddNum; //Its a String 