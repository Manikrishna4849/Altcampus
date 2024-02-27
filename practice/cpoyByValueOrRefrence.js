//Primitive
//Copy By value
let user = `Mani`;
let newUser = user ;
user = `Sam` ;
console.log(user);
console.log(newUser);


//Non Primitive
//opy by refrence
let data  = {
    name : "Arya" ,
    age : 21 ,
}
let userinfo = data ;
userinfo.name = `Bran`;
console.log(userinfo.name)
console.log(data.name);



let x = 10;
let y = 'Hello';
let a = x;
let b = y;
console.log(x);
console.log(y);
console.log(a);
console.log(b);

var aa = 10;
var bb = 'Hello';
var ac = x;
var bb = y;
a = 5;
b = 'test';
console.log(aa);
console.log(bb);
console.log(ac);
console.log(bb);

var users = ['sam', 'aman'];
var usersCopy = users;
users.push('nathan');
console.log(users);
console.log(usersCopy);
console.log(users.length);
console.log(usersCopy.length);


let kk = { language: 'Javascript' };
let mk = kk;

console.log(kk);
console.log(mk);

mk.language = 'Python';

console.log(kk); 
console.log(mk);

let username = 'Arya';
let usernameCopy = username;
let userInfo = {
  name: 'John',
};
let userCopy = userInfo;

console.log(username == usernameCopy);
console.log(username === usernameCopy);
console.log(userInfo === userCopy);
console.log(userInfo == userCopy);
console.log(userInfo.name == userCopy.name);
console.log(userInfo.name === userCopy.name);
console.log(username == userInfo.name);

var game = { game: 'Vollyball' };
console.log(game === game);


var game = { title: 'Vollyball' };
var sameGame = { title: 'Vollyball' };
console.log(game === sameGame); //Answer is false becaz the both objects are not same

