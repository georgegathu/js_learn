//Methods used in JS String

let first_name = "Mapesa";
let second_name = "Gang";
let learn = "Learning JavaScript"

console.log(first_name.toLowerCase()); //converts it to LowerCase
console.log(second_name.toUpperCase()); //converts it to UpperCase

console.log(first_name.indexOf("a")); //cheeck position of 'a'
console.log(first_name.lastIndexOf("a")); //checks the last 'a' in the statement

console.log(first_name.replace("a","-")); //replaces letter "a" with "-"
console.log(first_name.replaceAll("a","-")) //replaces all "a" in the statement with "-"

console.log(learn.substring(0,8)); //start position is included but the last one is not
// instead of substring() we can use slice()method to perform the same task
console.log(learn.substring(0,8)); //start position is included but the last one is not

//cheecks the condition whether its true or false
console.log(first_name.startsWith("M"));
console.log(first_name.endsWith("a"));
console.log(learn.includes("Java"));





