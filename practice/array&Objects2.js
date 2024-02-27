/*let numbers = [6, 8, 10 , 12, 43, 56, 98];
let userIds = [1230, 234, 1278, 984, 763, 900];
let collection = [];

for(let num of numbers){
    collection.push(num);
}

for(let user of userIds){
    collection.push(user);
}
console.log(collection);

let evenCollection = [];
for(let num of collection){
    if(num % 2 === 0){
        evenCollection.push(num)
    }
}
console.log(`Even Number =`, evenCollection);

let oddCollection = [];
for(let num of collection){
    if(num % 2 != 0){
        oddCollection.push(num)
    }
}
console.log(`Odd Number =`, oddCollection);

function revert(array){
    let final = [];
    for(let i=array.lenght - 1; i>=0; i--){
        final.push(array[i]);
    }
    return final;

}

*/

let brothers = ['John', 'Bran', 'Robb'];
let house = 'Stark';
let user = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user2 = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user3 = {
  name: 'Arya',
  house: 'Stark',
  brothers: ['John', 'Bran', 'Robb'],
};

.log(user.house === user2.house);
console.log(user.house == user2.house);
console.log(user.brothers === user2.brothers);
console.log(user.brothers == user2.brothers);
console.log(user.name == user2.name);
console.log(user.name === user2.name);
console.log(user.brothers == user3.brothers);
console.log(user.brothers === user3.brothers);
console.log(user.house === user2.house);
console.log(user.house === user3.house);
console.log(user.brothers[0] === user2.brothers[0]);
console.log(user.brothers[0] === user3.brothers[0]);


