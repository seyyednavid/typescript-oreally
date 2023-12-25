//Enum - collection of constant values
enum Gender {
  Male,
  Female,
}

console.log(Gender.Male); // 0
console.log(Gender.Female); // 1
console.log(Gender[0]); // Male
console.log(Gender[1]); // Female

enum Weekends {
  Saturday = 6,
  Sunday = 7,
}
console.log(Weekends[6]); // Saturday
console.log(Weekends[7]); // Sunday



