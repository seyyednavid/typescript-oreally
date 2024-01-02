// to execute => tsc -lib "ES2016","DOM"  setType
let set = new Set();
set.add("HTML");
set.add("CSS");
set.add("React");
set.add("JS");
console.log(set);
console.log(set.values());
console.log(set.keys());
set.delete("JS");
set.add("React"); // Do not accept repetitive element
console.log(set);
console.log(typeof set);
set.forEach((course) => {
  console.log(course);
});
