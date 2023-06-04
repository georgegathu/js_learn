// Primitive vs Reference Types
// Example 1 (Reference Type)
let numOne = 15;
let numTwo = numOne;
numOne = 44;

console.log(numOne);
console.log(numTwo);

// Example 2 (Primitive Type)
objOne = {title: "Learning JS", rank:4}
objTwo = objOne
objOne.rank = 1

console.log(objOne)
console.log(objTwo)