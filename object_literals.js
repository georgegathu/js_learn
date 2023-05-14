/*
    Objects literals contains Keys and Values
    You can mix any type of data types in Objects   
*/
let user = {
    name: "Genaro Gatuso",
    email: "gatuso@gmail.com",
    age: 25,
    isLoggedIn: false
};

console.log(user);
console.log(typeof user);

console.log(user.isLoggedIn);
user.isLoggedIn = true; // change status from false to true (Overwrite property)
console.log(user.isLoggedIn);

console.log(user["email"]); // Access email object

