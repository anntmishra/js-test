// let obj = {};
// console.log(obj);
// console.log(typeof obj);

const username = {
  firstname: "anant",
  loggedIn: true,
};

username.firstname = "bog"; //how to access anything inside object

console.log(username);

//how to access anything with space:

const testname = {
  "test name": "bob",
};

console.log(testname["test name"]); //important
/*
-
*/

let today = new Date();
console.log(today.getDay());



