//Password validator:
//1. Using "&&" operator
let password = "@123456";

if(password.length >= 8 && password.includes("@")){
    console.log("STRONG");
} else if(password.length >= 5 && password.length <= 8){
    console.log("MEDIUM");
} else {
    console.log("WEAK");
}

//2. Using "OR" operator
if(password.length >= 8 || password.includes("@")){
    console.log("STRONG");
} else if(password.length >= 5 && password.length <= 8){
    console.log("MEDIUM");
} else {
    console.log("WEAK");
}