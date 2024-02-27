//Object Creation
let user = {
    name: `Jhon`,
    age : 24,
    isAdult : true

}
//Accessing A value
// 1) .
//2) [] 

let character = {};
character = {
    chracterName : "Arya"
};
let age = 20;
character["character-age"] = age;
character["sur name"] = "Stark";
character.title ="Lady of WinterFell";
character.greet = function(){
    alert(`I am ${character.chracterName} and my title is ${character.title}`);
} 
character.isfemale = true;
character.greet();
character.greet = function(){
    alert(`She is ${character.chracterName} and my title is ${character.title}`);

}
character.greet();
character.isAdult= character.age < 18 ? true : false ;

character.changeIsAdult = function(){
    character.isAdult = !character.changeIsAdult;
}

let keyName = "playBoy";
character[keyName] = "Maisie Williams"
alert(character[keyName]);
console.log(character[42]);
character.totalSeasons = 1+2+3+2;
console.log(character.totalSeasons);