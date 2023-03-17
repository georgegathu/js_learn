// Arrays: Store multiple elements together (that means we create a list with Arrays)
let items = ["milk", "butter", "salt", "bread"];
let items_update = ["water", "condoms"]

items [2] = "honey" // used to  overwrite(change) element(s)
console.log(items[2]) // access the third element in the list
console.log(items.length); // displays the length of an array
console.log(items);

//Methods available with Arrays:
let itemsMethod = items.join(", "); //Combine arrays to a single string
itemsMethod = items.indexOf("bread"); // Finds position of a particular item in an array
console.log(itemsMethod);

//Concatinate Arrays
itemsMethod = items.concat(items_update);
console.log(itemsMethod);
//Add items in Array from the last using "push" command:
itemsMethod = items.push("banana");
console.log(items);

//Remove items in Array from the last using "pop" command:
itemsMethod = items.pop("banana");
console.log(items);

//NB: "push" and "pop" command are destractive commands , meaning they are going to change the original array
