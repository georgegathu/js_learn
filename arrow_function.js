// ARROW FUNCTIONS
let my_team = function(){
    console.log("Manchester United");
};
my_team();

//This here is an example of an Arrow Function: Example 1   
let trophy = (status)=> {
    console.log("EPL",status);
};
trophy("Winners!");

//This here is an example of an Arrow Function: Example 2(Using backticks)   
let fruit = (benefits)=> {
    console.log(`Apple: ${benefits}`);
};
fruit("used to detoxify the system");

// Remove the code block carleybraces and the return key word
//FROM:
let sub = (numOne, numTwo) => {
    return numOne - numTwo;
};
console.log(sub(20,10))
//TO:
let add = (numOne, numTwo) => numOne + numTwo;
console.log(add(20,10));
