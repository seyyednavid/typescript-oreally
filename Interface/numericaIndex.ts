interface StudentName {
  // index number & elements string
  [index: number]: string;
}
var studentNames: StudentName = ["Navid", "Ali", "Maziar", "Arash"];


interface studentScore {
    // index string & elements number
  [index: string]: number;
}
var studentScores: studentScore = {
  navid: 20,
  Ali: 19,
  Maz: 18,
  Arash: 18,
};
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}