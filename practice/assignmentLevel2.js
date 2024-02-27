not complted 
let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
 
  function findLongestWord(arr) {
    return [...arr].sort((a, b) => a.length - b.length).pop();
    
  }
  findLongestWord(words)
  // - Convert the above array "words" into an array of length of word instead of word.
  let arrayLength = words.map((num) => num.length)
 
  // - Create a new array that only contains word with atleast one vowel.
 
 function checkVowwel(word) {
     return (
        word.in
     )
     }
 

 let arrayWithVowel = words.filter((vow) => checkVowwel(vow));
  
  // - Find the index of the word "rhythm"
//let rythm=words.findIndex("rhythm");
  // - Create a new array that contians words not starting with vowel.

  
  
  let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(array) {
    return array.reduce((acc,cv) =>{
        acc = acc + cv;
        return acc;
    },0);}
    

  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
 let multipleByThree = numbers.filter((num) => num % 3 ==0);
  // - Create a new array that contains only even numbers
  let evenNumbers = numbers.filter((num) => num % 2 ==0);
  // - Create  a new array that contains only odd numbers.
  let oddNumbers = numbers.filter((num) => num % 2 !=0);
  // - Create a new array that should have true for even number and false for odd numbers.
  let oddOrEven = numbers.map((num) => num % 2 ==0
  )
  
  // - Sort the above number in assending order.
 let sortedNumbers = [...numbers].sort((a,b)=> a - b)
  // - Does sort mutate the original array?
  // - Find the sum of the numbers in the array.
 
  let sum= numbers.reduce((acc,cv)=>{
    acc = acc +sum;
    return acc;
  },0)
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

  let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
