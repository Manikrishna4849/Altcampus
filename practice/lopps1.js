let user = prompt (`Enter a userName`);
//Enterning a userName in Dailoge box with prompt
alert(user);
//Here im displaying the user in browser with alert utility functions
let userName =user;
//here assigning user value to new value called username
console.log(user,userName);
//Here im logging both user,userName
let age=22, isLearing= true;
//Here im declaring to variables in oneline age & isLearning
user=`Jhon`;
//Here im Reassiging the User value
console.log(user,userName);
// Here im logging user.userName



 let numA= +prompt(`Enter a numA value`);
 //Here Im entering the Numa value Using prompt dailogue box
 //and here im using +Operator beacoz im Entering the numA value in a String so if we add +Operator it will convert String into Number so In future If We want We can Add it
 let numB= +prompt('Enter numB value');
//Here Im entering the Numb value Using prompt dailogue box
 //and here im using +Operator beacoz im Entering the numB value in a String so if we add +Operator it will convert String into Number so In future If We want We can Add it
 let sum=(numA+numB);
 //here im using sum and im storing the value after addition
 alert(sum);// here im displaying the sum

 for(let j=0; j<=10;j+=2){
 console.log(j);
}

for(let i = 9; i >= 1; i--){
    if(i % 2 !== 0) {
    console.log(i);
    }
}

let finalString="";
let intialValue =5;
while(intialValue >= 0){
    finalString += intialValue;
    intialValue--;
}
console.log(finalString);

let finalEvenString="";
let intialEvenValue = 10;

while(intialEvenValue >= 0){
    if(intialEvenValue % 2 === 0){
    finalEvenString += intialValue;
    }
    intialEvenValue--;
}
console.log(finalEvenString);


let numA1= +prompt(`Enter a numA1 value`);
let numB2= +prompt(`Enter a numB2 value`);

if(isNaN(numA1) || isNaN(numB2)){
    alert(`Enter a Valid Value`)
}
else{
    alert(numA1===numB2)
}