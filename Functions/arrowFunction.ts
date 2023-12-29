var hello = (name: string): string => {
  return "Welcome " + name;
};

var multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

var myArray: Array<any> = [];
for (var i = 0; i < 10; i++) {
  myArray.push((): number => {
    return i;
  });
} // result will be array of 9 arrow function
for (var i = 0; i < 10; i++) {
  console.log(myArray[i]());
}

console.log(hello("Navid"));
console.log(multiply(5, 4));
console.log(myArray);
