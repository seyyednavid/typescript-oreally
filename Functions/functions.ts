function hello(name: string): string {
  return "Hello" + " " + name;
}
// console.log(hello("navid"));

function add(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log("Sum is: ",add(10,20));

function display(id: number, name: string, role: string) {
  console.log("Name: ", name);
  console.log("ID: ", id);
  console.log("Role: ", role);
}
// console.log(display(1, "Navid", "Admin"));

// optional parameter ==> role
function display2(id: number, name: string, role?: string) {
  console.log("Name: ", name);
  console.log("ID: ", id);
  if (role != undefined) {
    console.log("Role: ", role);
  }
}
// console.log(display2(1, "Navid"));

//Default value
function display3(id: number, name: string, role: string = "Normal") {
  console.log("Name: ", name);
  console.log("ID: ", id);
  //   if (role != undefined) {
  console.log("Role: ", role);
  //   }
}
// console.log(display3(1, "Navid"));
// console.log(display3(1, "Navid", "Admin"));

//pass function as argument
function calculator(fun: any): void {
  console.log(fun(10, 20));
}
// calculator(add)

//Return function
function calculator2(): any {
  function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  return subtract;
}
// Get subtract function under the name of sub
// var sub = calculator2();
// console.log(sub);
// console.log(sub(20,5));
//Shortcut way
// console.log(calculator2()(20,5));

//Anonymous function
var hello2 = function (name: string): string {
  return "Hello" + " " + name;
};
//   console.log(hello2("navid"));


