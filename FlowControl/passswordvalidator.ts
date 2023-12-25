var password:string = "Test@123";

if(password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90){
    console.log("Valid password");
} else {
    console.log("Invalid Password" + password);
}