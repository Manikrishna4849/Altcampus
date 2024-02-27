function caluclateMoviesToWatch(age , numberOfMovies){
 
const Max_Age = 80; 
let totalNoOFMovies =
(Max_Age - age) * 12 * 4 * numberOfMovies;

return totalNoOFMovies;
}

function pow(x, n){
    if(n < 0)
    return "The number below 1 is not allowed"
    else
    return x ** n;
}

function sumOrProdutOfN(num, oprattion){
    if (oprattion == "sum") {
        let sum = 0;
        for(let i = 1; i<=num; i++){
            sum += i;
        }
        return sum;
    } else if(oprattion == "product"){
        let product = 1;
        for(let i = 1; i <= num; i++){
            sum *= i;
        }
        return product;
        
    }

}

function sumOfNwithFive(n) {
    let sum = 0;

    for(let i = 1; i <= n; i++){
        if( i % 5 === 0 ||  i % 7 === 0){
       sum += i;
    }
}
return sum;
}

function min(a, b){
    if (a < b) return a;
    if (b < a) return b;

    }

    function typeOfCheck(val){
        return typeof val;

    }

function minToSec(minutes){
    return minutes * 60;
}  

function isInRange(lower, upper, num){
    return num > lower && num < upper ;
}

function calucalteBmi(weight, height){
    let bmi = weight / (height * height);
    switch (bmi) {
        case bmi < 18.5:
            return `UnderWeight`;
        case bmi > 10.5 && bmi < 24.9:
            return `Normal`;
        case bmi > 25 && bmi < 29.9:
            return `overWeight`  
        case bmi > 30:
            return `obese`;
        default :
        alert(`Enter a valid input`);
    }

}

function appropiateDrinks(age){
    switch (true) {
        case age < 14:
            return `Drink Fruit Juice`;
        case age < 18 :
            return `drink soda`;
        case age < 21 :
            return `Drink flavered beer`  
        case age >= 21:
            return `Drink Vodka`;
        default :
        alert(`Enter a valid input`);
    }
}

function sum(a,b){
    if(typeof a === `number` && typeof b === `number`){
        return  a + b;
    }
    else if(typeof a === `string` && typeof b === `string`){
     return a + b;
    }
    else
    alert(`Enter a valid input`);
}


function checkAge(age) {
    return age > 18 ?  true : `Did parents allow you`
}

function checkAge1(age) {
   return age > 18 || alert (`Did parents allow you`)
  }