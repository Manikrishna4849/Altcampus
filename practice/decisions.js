/*let num=2;

let num2 =Number(prompt(`enter another number`));
let num3=Number(prompt(`enter a number`));

switch(num){
    case 1:
    alert(`one`);
    break;
    case 2:
        alert(`two`)
        break;
        case 3:
            alert(`three`)
            break;
            default:
                alert(`not found`)
}

num<5 ? alert(`its true`): alert(`its not true`)

let num1 =Number(prompt(`Enter a number`));
if (num1%2==0) {
    alert(`number is even`)
} else if (num1%2!=0){
    alert(`number is odd`)
 
}


if(num2>num3)
alert(`${num2} is grater`);
else
 alert(`${num3} is greater`);


 num2>num3 ? alert(`${num2} is grater`): alert(`${num3} is greater`);

 let houseName =prompt(`Enter The House Name`)
 if(houseName===`strak`)
 alert(`Winter is Coming`)
else if (houseName===`lannister`)
alert(`A lannister always pays is debt `)
else (alert(`All men Must Die`))

houseName===`strak` ?alert(`Winter is Coming`):houseName===`lannister` ? alert(`A lannister always pays is debt `) :(alert(`All men Must Die`))


let monthName =prompt(`Enter The Month Name`)
 switch (monthName) {
    case  `Janauary`:
        alert(`january is having 30 days`)
        break;
        case  `Febrauary`:
            alert(`Febrauary is having 29 days`)
            break;

            case  `March`:
                alert(`March is having 28 days`)
                break;

                case  `April`:
                    alert(`April is having  days`)
                    break;

                    case `May`:
                        alert(`May is having 30 days`)
                        break;

                        case  `JUNE`:
                            alert(`JUNE is having 30 days`)
                            break;

                            case  `July`:
                                alert(`July is having 30 days`)
                                break;

                                case  `August`:
                                    alert(`August is having 30 days`)
                                    break;

                                    case  `September`:
                                        alert(`September is having 30 days`)
                                        break;

                                        case  `OCTOMBER`:
                                            alert(`OCTOMBER is having 30 days`)
                                            break;

                                            case  `November`:
                                                alert(`November is having 30 days`)
                                                break;

                                                case  `DECEMBER`:
                                                    alert(`DECEMBER is having 30 days`)
                                                    default:
                                                    alert(`Invalid Input`)}
let userSalary= prompt(`Enter Your Salary`)  
            switch (true) {
                case userSalary <=20000:{
                    let tax1=(salary*10)/100;
                    alert(`Your in-hand amount ${userSalary-tax1}`);
                    break;}
            
                    case userSalary <=40000:{
                        let tax1=(salary*20)/100;
                        alert(`Your in-hand amount ${userSalary-tax1}`);
                        break;}
                        case userSalary >20000:{
                            let tax1=(salary*30)/100;
                            alert(`Your in-hand amount ${userSalary-tax1}`);
                            break;}
            default:
                (alert(`input is not valid`))}*/

                
let marks=Number(prompt(`Enter Your Number`));
                if(marks >100)
                alert(`marks can't be greater than 100`)
              else if(marks > 80 && marks<100)
              alert("Grade A")
            else if(marks >50 && marks <80)
            alert(`Grade B`)
            else if(marks > 30 && marks <50)
            alert(`Grade c`)
            else alert(`Grade D`);
            
            switch (true) {
                case marks >100:
                    alert("marks can't be greater than 100")
                    break;
            
                    case marks > 80 && marks<100:
                        alert("Grade A")
                        break;
                        case marks >50 && marks <80:
                            alert("Grade B")
                            break;
                            case marks > 30 && marks <50:
                                alert("Grade C")
                                break;
                              default:
                                alert(`Grade D`)}
let whatherCondition=prompt(`What is the Wheather Condition`);
switch (whatherCondition) {
    case `sunny`:
        alert(`Wear a T-shirt`)
        
        break;
 case `rainy`:
 alert(`Don't forget to wear a raincoat`)
 break;
 case `hot`:
 alert(`Get a Hanky`)
    break;
    case `frezing`:
    alert (`Get your sweeter on`)
    break;
    default :
    alert(`Invalid input`)
}