//Numbers

let balance = 120;
let anotherbalance = new Number(120);

// console.log(anotherbalance.valueOf());

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended way
console.log(isReallyActive);

//null and undefined
let firstname = null;
let lastName = undefined;

console.log(firstname, lastName);

//string
let myString = "hello";
let myStringOne = "Hola";
let username = "anant";

let oldGreet = myString + " anant";
console.log(oldGreet);

let greetMessage = `hello ${username + " " + myString}!`;
console.log(greetMessage);

//    `......${as many datatypes I want to add}`

let demoOne = `Value is ${2 + 2}`;
console.log(demoOne);

sym1 = Symbol("anant");
sym2 = Symbol("anant");

console.log(sym1 == sym2);
