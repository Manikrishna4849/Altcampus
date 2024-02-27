function addTwo(num) {
    return num + 2 ;
}

function addThree(num) {
    return num + 3 ;
}

function addFive(num) {
    return num + 5 ;
}

function addTwoArray(arr){
    let final = [] ;
   for(let num of arr)
    final.push(addTwo(num));
return final;
}

function addThreeArray(arr){
    let final = [] ;
   for(let num of arr)
    final.push(addThree(num));
return final;
}

function addFiveToArray(arr){
    let final = [] ;
   for(let num of arr)
    final.push(addFive(num));
return final;
}

console.log(addTwoArray([1, 2, 3, 4, 5]));


function changeArray(arr , cb){
    let final = [];
    for(let num of arr){
        final.push(cb(num))
    }
    return final;
}


function sendMessage(msg, cb){
return cb(msg)
}


function first(cb){
    return cb;
}

function second(){
    function third(num){
   return num + 1 ;
    }
    return third;
}
let val = second();

console.log(val);