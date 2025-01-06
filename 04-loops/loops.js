/* //Question 1
 let sum = 0;
let i = 1;

while (i <= 5) {
  sum +=i; //sum=sum+i
  i++;
}
console.log(sum);
 */

/* //Question2 
let countdown = [];
let j = 15;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);
 */

/* //Question 3
let teacollection = [];
let tea;
do {
  tea = prompt(`Enter your favourite tea(type)`);
  if (tea !== "stop") {
    teacollection.push(tea);
  }
} while (tea !== "stop");
 */

/* //Question 4
let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let i = 0; i < 3; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}
console.log(multipliedNumbers);
 */

//Question 5
let myCities = [];
const city = ["Paris", "New York", "Tokyo", "London"];

for (let i = 0; i < city.length; i++) {
  myCities.push(city[i]);
}

console.log(myCities);
