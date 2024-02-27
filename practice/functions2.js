function sayHello(name){
    alert(`${nameame}`);
}

function getFullName(fisrtName, lastName) {
 return (`${fisrtName} & ${lastName}`)
}

function  addTwoNumbers(firstNum, seconNum) {
   if (typeof firstNum === `number` ||
       typeof seconNum == `number`) { 
        alert(`Enter a Valid Input!`)

   } else {
    return firstNum + seconNum;
   }
    
}

function calc(numA, numB,operation ){
  if (typeof numA !== `number` ||
       typeof numB !== `number`) {
     alert(`Enter a valid Input`)
  } else {
    switch (operation) {
     case `add`:
       return numA + numB;
       break;
       case `mul`:
       return numA * numB;
         break;
         case `sub`:
          return numA - numB;
          break;
           case `div`:
            return numA / numB;
            break; 
    }
  }
 }

function isLeapYear(year){
  if(year % 400 === 0) return false;
  if(year % 100 === 0) return false;
  return year % 4===0;
}

function getFactorial(num) {
  let final = 1;
  for(let i =num; i>=1; i++){
    final *=1;
  }
 return final;
}