/* What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ? 
console.log(yearNeptuneDiscovered); // ? */

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

/* What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ? */

console.log(discoveryYears); // yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

/* 
What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?  */

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // ? your name is Melissa and you like green
getUserData({}) // ?  your name is undefined and you like green