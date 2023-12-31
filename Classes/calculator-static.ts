// some times we do not need to create objects for using methods in classes
class Calculator {
  static sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  static sub(num1: number, num2: number): number {
    return num1 - num2;
  }
}

console.log(Calculator.sum(5, 2));
console.log(Calculator.sub(5, 2));
