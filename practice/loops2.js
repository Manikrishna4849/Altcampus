
var userAge =parseInt(prompt('Enter the age'));
//Here im taking the user the age using promopt

switch (true) {
    //im using switch to solve the problem
    case (userAge > 12 && userAge < 55):
    alert(`You can participate in the marthon`)
        break;
    case(userAge>4 && userAge<11):
    alert(`You are to young to  participate in the marthon`)
    break;
    case (userAge<4):
    alert('Hey kiddo you can walk')
    default:
    alert(`You are too old to participate`);


}

let count =Number(prompt(`Enter the number of e!`))
//Here im taking the some input from the user and storing the value in let becoz it will change 
const start = `h`;
const end = `llo`;
//The above both are fixed values that y im storing in a const
let middle = "";
for(let i = 0;i < count; i++) {
    middle +="e";
}
alert(start + middle + end);


let max = +prompt(`Enter the value of N!`)
let sum = 0;
for(let i = 1; i <= max; i++ ){
    sum += i;
}
alert(`THe value of sum id ${sum}`);

let num =+prompt(`Enter a number betwwen 1 - 10!`);

switch (num) {
    case 1:
        alert(`One`)
        break;
        case 2 :
            alert(`Two`)
            break;
            case 3:
        alert(`Three`)
        break;
        case 4:
        alert(`Four`)
        break 
        case 5:
        alert(`Five`)
        break;
        case 6:
        alert(`Six`)
        break;
        case 7:
        alert(`Seven`)
        break;
        case 8:
        alert(`Eight`)
        break;
        case 9:
        alert(`Nine`)
        break;
        case 10:
        alert(`Ten`)
        break;
        default: 
        alert(`please try again`);    
}

let value = +prompt(`Enter The Marks 0-100`);

switch (true) {
    case value > 90:
      alert(`AA`);
        break;
        case value > 80 && value <= 90:
            alert(`AB`);
              break;
              case value > 70 && value <= 80:
                alert(`BB`);
                  break;
                  case value > 60 && value <= 70:
      alert(`BC`);
        break;

        case  value > 50 && value <= 60:
      alert(`CD`);
        break;

        case  value > 40 && value <= 50:
      alert(`DD`);
        break;

        case  value > 30 && value <= 40:
      alert(`FF`);
        break;
        case  value <= 30 :
      alert(`GG`);
        break;
 default:
    alert(`Enter The Value Input`)

}