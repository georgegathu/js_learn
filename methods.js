let random = "MANCHESTER UNITED";

let user = {
    name: "De Zerbi",
    email: "dezerbi@gmail.com",
    age: 43,
    isLoggedIn: false,
    login: function(){
        return "LOGIN";
    },
    logout: function(){
        return "LOGOUT";
    }
};

console.log(user.login());
console.log(random.toLowerCase());