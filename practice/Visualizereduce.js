let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function add(accumalator, currentValue) {
    return accumalator + currentValue ;
}
let sum = numbers.reduce(add,0)