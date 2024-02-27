//Filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function isOdd(num) {
    return num % 2 !== 0
}
let oddNumbers=numbers.filter(isOdd);



function test(num) {
    return undefined ;
}
let filteredOddNumbers=numbers.filter(test);