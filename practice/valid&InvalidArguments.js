//Defualt Parametre
//The rules for valid parametres
//we can pass any kind value or expression as parametre
//It can be a null,undefinied,string ,number,boolean,object
function add(a = 0, b = 0){
    return a + b;
}
add(12,12);
add(null, {});
add(undefined, true);
add(undefined ,25 + 25 +44);
//Here we cannt pass a argument 
function add( a = 0, b = 0){
    return a + b;
}
add(if(){});//we cannot pass statement like for if while
add(let a = 10 , let b = 25)//if we difine variable as agrument we will get error it is also not possible 

//now wt to pass for return and wt not

function multiply(numA = 1, numB = 1){
    return numA * numB ;
}
//for right hand side return we cannot pass the statements we have to pass only expressions like airthmatic expressions

function multiply(numA = 1, numB = 1){
    return if() ;
}//a return statement cannot return statements

function multiply(numA = 1, numB = 1){
    return for();
}