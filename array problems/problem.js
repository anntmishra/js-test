/* Problem 1


let teaFlavors = ["green tea", "black tea", "oolang tea"];

var firsTea = teaFlavors[1];
console.log(firsTea); */

//Problem 2

/* let teaTypes = ["white tea", "herbal tea", "masala chai"];
teaTypes[2] = "jasmine tea";
console.log(teaTypes);
 */

//Problem 3

/* let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("berlin");
console.log(citiesVisited);
 */

//Problem 4
/* let teaOrders = ["chai", "iced tea", "matcha", "early grey"];

let firstOrder = teaOrders.splice(1, 1)[0];

console.log(teaOrders);
console.log(firstOrder);
 */

//Problem 5

/* let popularTeas = ["green tea", "oolang tea", "chai"];
let softCopyTeas = popularTeas.slice();  --->(This is how we create softcopy of an array )
console.log(softCopyTeas);

******important= .slice()
 */

//Problem 6

/* let topCities = ["berlin", "singapore", "new york"];
let hardCopyCities = [...topCities];
topCities.pop;
console.log(hardCopyCities);
 */

//Problem 7

/* let europianCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
// const newCitites = europianCities + "," + asianCities;//making it as a string we want a array
// console.log(newCitites);

//use of (.concat)
let worldCities = europianCities.concat(asianCities);
console.log(worldCities); */

//Problem 8
/* let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];

const menuLength = teaMenu.length;
console.log(menuLength);
 */

//Problem 9
let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];
const isLondoninList = cityBucketList.includes("london");
console.log(isLondoninList);
