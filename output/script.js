console.log("Hello TypeScript World");
var country = "Bangladesh";
const name = "Niloy";
console.log(country);
console.log(name);
// Types: Typescript assume the datatype if declaration and assign happens at the same time
// Part: 01
let playerName = "Shakib";
let age = 27;
playerName = "Hridoy";
console.log(playerName);
console.log(age);
// Part: 02
let team;
team = "Dhaka Capitals";
team = 30;
console.log(team);
// Part: 03
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));
// Part 04: Array
let fruits = ['apple', 'grape', "banana"];
fruits.push("Orange");
console.log(fruits);
let mixed = ['Dhaka', 34, 3.56, true];
mixed.push(false);
console.log(mixed);
// Part 05: Object
let person = {
    name: "Shakib",
    age: 35,
    isCaptain: false,
    battAvg: 37.89
};
console.log(person);
person.age = 36;
console.log(person);
// Part 06: Explicit
let a;
let b;
a = "Niloy";
b = 25.77;
console.log(a, b);
let arr1;
arr1 = ["Dhaka", "Bogura", "Kushtia"];
let arr2 = [];
arr2 = ["Shakib", 75, 46.56, "Magura"];
let c;
c = {
    name: "Tamim",
    jeseyNo: 29,
    isPlayer: true,
    batAvg: 33.45
};
console.log(c);
let d;
d = {
    name: "Tanzid",
    id: 28,
    isStudent: true
};
console.log(d);
//Part 07: any type or dynamic type
let var1;
let var2;
let var3 = [];
let var4;
var1 = 30;
console.log(var1);
var1 = "Dhaka";
console.log(var1);
var2 = true;
console.log(var2);
var2 = ["Apple", "Banana", "Mango"];
console.log(var2);
var3.push("Bogura");
var3.push(73);
var3.push(true);
console.log(var3);
var4 = {
    name: "Mahir",
    age: 28
};
console.log(var4);
export {};
