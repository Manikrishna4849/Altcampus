function sayHello() {
    alert(`Hello javaScipt`)
}
let one =sayHello();
typeof one;

function sayHello() {
    let userName =prompt(`Enter a userName`);
    alert(`Hello ${userName}`)
}
let two =sayHello();
typeof two;

function sayHello(userName) {
     return `Hello ${userName}`
}
let four = sayHello("Jhon");
typeof four;
