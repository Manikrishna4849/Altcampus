let number=prompt(`Enter a number`);
let isDivisible=(number % 2==0) && (number % 4==0);
if(isDivisible)alert(`${number} is divisible by 2 & 4`)
else(alert(`not divisible`));