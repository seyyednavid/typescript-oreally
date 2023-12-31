// Convert string to integer
var inputString = prompt("Please enter a number");
var inputNumber = inputString !== null ? parseInt(inputString) : null;
if (inputNumber !== null) {
    //   console.log(inputNumber + 3);
}
//Convert array to string
var skills = ["JS", "React", "Node"];
console.log(skills.toString());
// convert boolean to str and number
var myBool = false;
var resultStr = myBool.toString();
var resultNum = myBool ? 1 : 0;
console.log(resultStr);
console.log(resultNum);
