// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)

// - Convert value of strings array into a sentance like "This is a collection of words"
// let arr = " ";
// for (let nu of strings) {
//     arr+= nu +` `;
    
// }
// console.log(arr)

console.log(strings.join(" "))
// - Add two new words in the strings array "called" and "sentance"
strings.push(`called`,`sentance`)
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))

// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
let allIs=strings.filter((str) => str.includes(`is`))
// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain=strings.filter((str) => str.indexOf(`is`) !== -1)

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divby3 =numbers.map((num) => num % 3 ===0)

// -  Sort Array from smallest to largest
let sortedNumbers=[...numbers].sort((a,b) => a - b);
// - Remove the last word in strings
numbers.pop();
// - Find largest number in numbers
console.log(sortedNumbers.pop());
// - Find longest string in strings
let sortedString=[...strings].sort((a ,b) => a.length -b.length)
sortedString.pop();

// - Find all the even numbers
let even=numbers.filter(( num) => num% 2 === 0)

// - Find all the odd numbers
let odd=numbers.filter(( num) => num% 2 !== 0)

// - Place a new word at the start of the array use (unshift)
strings.unshift(`New Word!`)
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3 ,7))
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4))
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1 , 1221);

let newNum=numbers.map ((num) => {if (num ===12) {
    return 1221
} else if (num === 18){
    return 1881
    
}
else
 return num
;})
// - Replace words in strings array with the length of the word
console.log(strings.length);
let strLenght=strings.map ((num)=> num.length)
// - Find the sum of the length of words using above question
let sum = 0;
let strsum=strings.map ((num)=> sum+=num.length)
// - Customers Array
var customers = [
    { firstname: 'Joe', lastname: 'Blogs' },
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'Dave', lastname: 'Jones' },
    { firstname: 'Jack', lastname: 'White' },
  ];
  //
// - Find all customers whose firstname starts with 'J'
let jstart=customers.filter((cus) => cus.firstname.startsWith(`J`)
)
// - Create new array with only first name
let firstName=customers.map((cus) => {return cus.firstname
})
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName=customers.map((cus) => {return  `${cus.firstname}  ${cus.lastname}`
})
// - Sort the array created above alphabetically
fullName.sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.

let newCus=customers.map((cus) =>{ if(
    cus.includes(`a`) ||
    cus.includes(`e`) ||
    cus.includes(`i`) ||
    cus.includes(`o`) ||
    cus.includes(`u`) ){

    
return true}
else
 false
}
)