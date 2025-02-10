//Question 1
let teasy = ["green tea", "oolang tea", "chai", "black tea"];
let selectedTeas = [];

for (let i = 0; i < teasy.length; i++) {
  selectedTeas.push(teasy[i]);
  if (teasy[i] === "chai") {
    break;
  }
}
// console.log(selectedTeas);

//Question 2
let cities = ["london", "New York", "paris", "berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

//Question 3
let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumber.push(num);
}

// console.log(smallNumber);

//Question 4

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];

let prefferedTea = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  prefferedTea.push(tea);
}
// console.log(prefferedTea);

//Quesiton 5

let citiesPopulation = {
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
// console.log(cityPopulations);

//Question 6

let teas = ["earl grey", "green tea", "chai", "oolang tea"];
let availableTea = [];

teas.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  availableTea.push(tea);
});
// console.log(availableTea);

//here in for each we used return instead of break because we were inside a function and break dosen't works there.

//There are two ways to write function

/* #1 function(){

} 
#2 ()=>{
} 
 */

//break is never used in a function

//Question 7
let crazy = ["Kanpur", "Delhi", "Lucknow", "Mumbai"];
let savedCities = [];

crazy.forEach((test) => {
  if (test == "Lucknow") {
    return;
  }
  savedCities.push(test);
});

console.log(savedCities);
