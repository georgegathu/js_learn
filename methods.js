let user = {
    name: "De Zerbi",
    email: "dezerbi@gmail.com",
    age: 43,
    isLoggedIn: false,
    login: function(){
        console.log("LOGIN");
    },
    logout: function(){
        console.log("LOGOUT");
    }
};

user.login();