//For Each
//Map
//Filter
//find
//findIndex
//every
//some
//reduce
//sort


let colors = ["Acqa", "Black", "Blue", "Brown", "Chocalate", "Coral", "Crimson", "DarkBlue", "DarkGray"];
let numbers = [1, 4, 5, 6, 7, 8, 9, 12, 14, 156, 265];
/*
let sum  = 0;
numbers.forEach((num ) =>{
 sum += num;
})

numbers.reduce(cn, intilaValue)
console.log(sum);

let allColours = "";
colors.map((colo) => {
    allColours += colo + ` `;
})
console.log(allColours);
//In the above code we are storing the sum value in another variable ,and colors also some
*/
//Reduce : no need to take another value


let sum =numbers.reduce((acc,num) =>{
return acc + num ;
},0)
console.log(sum)

let allColours =colors.reduce((acc,colo)=>{
return acc + colo +` `;
}," ")

console.log(allColours)