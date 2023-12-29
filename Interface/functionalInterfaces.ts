interface Add {
  (x: number, y: number): void;
  // we can do not determine output and in function determine everything
  // if we can have void here , in function we can change it to number or ...
}
interface Sub {
  (x: number, y: number): number;
}

var add: Add = function (x: number, y: number): void {
  console.log(x + y);
};

var sub: Sub = function (x: number, y: number): number {
  return x - y;
};
