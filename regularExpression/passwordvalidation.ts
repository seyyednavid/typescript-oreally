let password: string = "tEst1234";
var RegularExp = /(?=.*[A-Z])\w{4,10}/; // a password with at least one capital letter and between 4 to 10 char

if (password.match(RegularExp)) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}
