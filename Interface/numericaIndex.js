var studentNames = ["Navid", "Ali", "Maziar", "Arash"];
var studentScores = {
    navid: 20,
    Ali: 19,
    Maz: 18,
    Arash: 18,
};
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
