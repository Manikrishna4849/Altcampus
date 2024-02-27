let arr = [];
console.log(typeof arr);

let colors = ["Black","yellow", "White", "orange" ,"red"];
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[colors.length - 1]);
colors[0] = "red";
console.log(colors);
colors.push("UltraViolert");
console.log(colors);
console.log(colors.length);
let fourthColour = colors[3];
colors.push("Tomoto")
colors.unshift("purple");
delete colors[0];
delete colors[colors.length - 1];
delete colors[colors.length - 2];

for (const color of colors) {
     console.log(color);
}
colors[45] = "white";
console.log(colors)

