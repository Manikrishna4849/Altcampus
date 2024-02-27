let sum = prompt(`What will be the result of 12 + 12?`);
//Here im using == it will check the values
if (String(sum != 24)) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
}

let sum1 = prompt(`What will be the result of 12 + 12?`);
//Here im using === the answer is wrong the user entering the value in string format and === will check datatypes and values 
if (sum1 === 24) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
}

function sum(a, b) {
    return a + b;
  }
  
  '21' + sum(21, 10);