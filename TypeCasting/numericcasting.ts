// Convert string to integer
var inputString: string | null = prompt("Please enter a number");
var inputNumber : number | null = inputString !== null ? parseInt(inputString) : null;
if (inputNumber !== null) {
//   console.log(inputNumber + 3);
}

//Convert array to string
var skills:string[] = ["JS", "React", "Node"];
console.log(skills.toString());

// convert boolean to str and number
let myBool = false;
var resultStr: string = myBool.toString();
var resultNum: number = myBool ? 1 : 0;
console.log(resultStr);
console.log(resultNum);





