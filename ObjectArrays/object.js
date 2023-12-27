var student = {
    firstName: "navid",
    lastName: "hejazi",
    score: 90
};
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
//destructuring
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName + " ", lastName);
