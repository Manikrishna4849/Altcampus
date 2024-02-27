//MAP
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function doubless(num) {
    return num * 2
}
let dublednums=numbers.map(doubless);

function doublesss(num) {
    console.log(num * 2)
}
let dublednumss=numbers.map(doublesss);


let numbersn = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  console.log(num);
}
let doubleNumbers = numbersn.map(addTwo);


function add(accumulator, currentValue) {
  console.log(accumulator + currentValue);
}
let sum = numbers.reduce(add);
