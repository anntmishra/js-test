//Question 1
/* let teas = ["green tea", "oolang tea", "chai", "black tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  selectedTeas.push(teas[i]);
  if (teas[i] === "chai") {
    break;
  }
}
console.log(selectedTeas);
 */

//Question 2
/* let cities = ["london", "New York", "paris", "berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);
 */

//Question 3
/* let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumber.push(num);
}

console.log(smallNumber); */

//Question 4
/* 
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];

let prefferedTea = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  prefferedTea.push(tea);
}
console.log(prefferedTea);
 */

//Quesiton 5

/* let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 5400000,
};

let cityPopulations = [];

for (let city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityPopulations.push(citiesPopulation[city]);
}
console.log(cityPopulations);
 */

//Question 6

// let teas = ["earl grey", "green tea", "chai", "oolang tea"];
// let availableTea = [];

// teas.forEach((tea) => {
//   console.log(tea);
// });

function hello(dsas) {
  console.log("boop");
  console.log(dsas);
}
