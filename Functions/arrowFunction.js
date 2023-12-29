var hello = function (name) {
    return "Welcome " + name;
};
var multiply = function (num1, num2) {
    return num1 * num2;
};
var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(function () {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myArray[i]());
}
console.log(hello("Navid"));
console.log(multiply(5, 4));
console.log(myArray);
