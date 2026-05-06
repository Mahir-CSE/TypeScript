console.log("Hello TypeScript World");

var country = "Bangladesh";
const name = "Niloy"

console.log(country);
console.log(name);

// Types: Typescript assume the datatype if declaration and assign happens at the same time

// Part: 01

let playerName = "Shakib";
let age = 27;

playerName = "Hridoy";
console.log(playerName);
console.log(age)

// Part: 02

let team;

team = "Dhaka Capitals";
team = 30;

console.log(team)

// Part: 03
function multiply(a:number, b:number){
    return a * b;
}

console.log(multiply(3,5));

// Part 04: Array

let fruits = ['apple','grape',"banana"];
fruits.push("Orange");
console.log(fruits);

let mixed = ['Dhaka', 34, 3.56, true];
mixed.push(false);
console.log(mixed)

// Part 05: Object

let person ={
    name: "Shakib",
    age: 35,
    isCaptain: false,
    battAvg: 37.89
}

console.log(person)
person.age=36;
console.log(person);

// Part 06: Explicit

let a: string;
let b: number;

a = "Niloy";
b = 25.77;

console.log(a,b)

let arr1: string[];
arr1 = ["Dhaka", "Bogura", "Kushtia"];

let arr2: (string | number)[] = [];
arr2 = ["Shakib", 75, 46.56, "Magura"];

let c:object;

c = {
    name: "Tamim",
    jeseyNo: 29,
    isPlayer: true,
    batAvg: 33.45
}

console.log(c);

let d : {
    name: string,
    id: number,
    isStudent: boolean
};

d = {
    name: "Tamim",
    id: 28,
    isStudent: true
}