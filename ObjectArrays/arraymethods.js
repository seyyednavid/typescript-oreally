var levels = [20, 30, 12, 30, 100, 20];
console.log(levels.toString());
console.log(levels.join(" "));
console.log(levels.slice(3, 5));
console.log(levels.slice(3)); // do not impact on main array
levels.splice(2, 3, 88, 99); //impact directly on main array
console.log(levels.toString());
levels.push(10, 20, 30);
console.log(levels.toString());
console.log(levels.pop());
console.log(levels.toString());
