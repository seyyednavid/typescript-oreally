// import {add, sub} from "./calc";
// console.log(add(2,3));
// console.log(sub(10,5));


// import {add as addition, sub as subtraction} from "./calc";
// console.log(addition(2,3));
// console.log(subtraction(10,5));


// import * as calc from "./calc";
// console.log(calc.add(2,3));
// console.log(calc.sub(10,5));


// import add,{sub} from "./calc";
// console.log(add(2,3));
// console.log(sub(10,5));

import { Calculator } from "./calc";

var calc = new Calculator();
console.log(calc.add(2,3));