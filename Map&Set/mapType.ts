// for executing the file => tsc -lib "ES2016","DOM"  mapType  *********
let studentScores = new Map([["Navid", 20],["lida", 100],["Jafar", 18]])
console.log(studentScores.get("Navid"));
console.log(studentScores.set("Ali", 20));
console.log(studentScores.size);
studentScores.delete("Navid");
console.log(studentScores);
// studentScores.clear(); // delete all elements
// console.log(studentScores);

console.log(studentScores.keys());  // return all keys
for(var key of Array.from(studentScores.keys())) {
    console.log(key);
    console.log(studentScores.get(key));
}

console.log(studentScores.values());
console.log(studentScores.entries());




