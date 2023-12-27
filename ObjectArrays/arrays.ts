var courses: any = ["Angular", "React", "ES6", "JMS"];
courses.push("spring security");
courses.push(10);

for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

for (var element of courses) {
    console.log(element);
}

var [a,b,c,d] = courses;
console.log(a,b,c,d);
