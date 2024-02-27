//ForEach
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function double(num) {
    console.log(num * 2)
}
numbers.forEach(double);
//Here we are printing in the console


function doubles(num) {
    return num * 2
}
let dublednum=numbers.forEach(doubles);
//here we are doing GARBAGE Collected means deleting


