//For Each 
//Map
//Filter
//sort
//find
//findIndex
//every
//some
//reduce
let colors = ["Acqa", "Black", "Blue", "Brown", "Chocalate", "Coral", "Crimson", "DarkBlue", "DarkGray"];
let numbers = [1, 4, 5, 6, 7, 8, 9, 12, 14, 156, 265];


function isTwelve(num){
    return num % 2 ===0;
}
let findReturn=numbers.find(isTwelve)
let findIndexReturn=numbers.findIndex(isTwelve)