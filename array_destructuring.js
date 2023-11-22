/* What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ? */

console.log(first); // maya
console.log(second); // marisa
console.log(third); // chi

/* What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // */

console.log(raindrops); // "raindrops on roses"
console.log(whiskers); //  "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); 
// ["bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


/* What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? */

console.log(numbers) // [10, 30, 20]
