const numA = +prompt(`Enter a NUma Value`);
const numB = +prompt(`Entr a NUmb Value`);

if (numA>numB) {
    alert(`NumA is greater ${numA}`);
} else {
    alert(`NumB is Grater ${numB}`);
}

const numC = +prompt(`Enter a NUma Value`);
const numD = +prompt(`Entr a NUmb Value`);
const numE = +prompt(`Entr a NUmb Value`);

let product = numC * numD * numE;

if(product > 0){
    alert(`The Value of Product Is Positive`);
}
else{
    alert(`The product value is Negative`)
}

let firstNum = +prompt(`Enter first value of Operation`);
let secondNum = +prompt(`Enter second value of Operation`);
let operation = prompt(`Enter the operation(sub,mul,add,div)`)

switch (operation) {
    case `mul`:
        alert(` The multiplication of ${firstNum} & ${secondNum} is   ${firstNum * secondNum}`)
        break;
        case `sub`:
            alert(` The subratction of ${firstNum} & ${secondNum} is   ${firstNum - secondNum}`)
            break;
            case `add`:
                alert(` The Addition of ${firstNum} & ${secondNum} is   ${firstNum + secondNum}`)
                break;

                case `div`:
                    alert(` The division of ${firstNum} & ${secondNum} is   ${firstNum / secondNum}`)
                    break;
                    default :
                    alert(`Enter a valid operation`)
}


const SPENDING_THRESHOLD =200;
const TAX_RATE = 0.08;
const PHONE_PRIZE = 99.99;
const ACCESSORY_PRIZE = 9.99;

var bank_balance = 383.91;
var amount = 0;

while(amount < bank_balance) {
amount += PHONE_PRIZE;
if(amount < SPENDING_THRESHOLD) {
    amount += ACCESSORY_PRIZE;
 }
}
let tax= amount * TAX_RATE;

let taxedAmount = amount + tax;
console.log(`$${taxedAmount}`);

if(taxedAmount < bank_balance) {
    console.log(`You can afford it`);
}

else{
    console.log(`You can't afford it`)
}