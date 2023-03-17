// Loose (==) vs Strict (===) Comparison
let age = 69;

console.log(age == 69); // Loose comparison and it prints true
console.log(age == "69"); // Loose comparison and it prints true
console.log(age === 69); // Strict comparison and it prints true
console.log(age === "69"); // Strict comparison and it prints false

//console.log(typeof age);
//console.log(typeof "69");
