//Block scope
//Function Scope
//Global Scope


//Global Scope means it is not declared in any braces
let user = `Arya`;


//Function Scope with in scope

function Mani() {
    let mani = `mk`;
    console.log(mani);
    
}
Mani();

//Block scope with in block r bracres

{
    let mk = `mk`;
    console.log(mk);
}