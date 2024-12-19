//checking if number is greater than another number

let num1 = 10;
let num2 = 8;
if (num1 > num2) {
  console.log(true);
} else {
  console.log(false);
}

//checking if a string is equal to another string

let fullName = "anant mishra";
let firstName = "anant";
let lastName = "mishra";

let split = fullName.split(" ");
let extractedName = split[0];
let extractedName2 = split[1];

if (firstName == extractedName && lastName == extractedName2) {
  console.log("same same");
} else {
  console.log("not same same");
}

//checking if variable is a number or not

let score = 22;
if (typeof score == "number") {
  console.log("yesss");
} else {
  console.log("No");
}

//checking if array is any array empty or not
let items = ["dog"];
if (items.length == []) {
  console.log("empty");
} else {
  console.log("Not empty");
}
