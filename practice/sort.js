//For Each
//Map
//Filter
//find
//findIndex
//every
//some
//reduce
//sort


let colors = ["Acqa", "Black", "Blue", "Brown", "Chocalate", "Coral", "Crimson", "DarkBlue", "DarkGray"];
let numbers = [1, 4, 5, 6, 7, 8, 9, 12, 14, 156, 265];

let sor =colors.sort((sorti) => {
    return sorti
    
})
function compareFunctio(a, b){
return b - a;

}
//Here we are cloning becaz if we are not cloning origial value will be chnaged
let sorted=[...numbers].sort(compareFunctio);


