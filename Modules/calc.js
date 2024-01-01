"use strict";
// export default function add(x: number, y: number): number {
//   return x + y;
// }
// export function sub(x: number, y: number): number {
//   return x - y;
// }
// export {add, sub}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
