class Passenger {
  firstName: string;
  lastName: string;
  frequentFlyerNo: number;

  constructor(fName: string, lName: string, freqFlyerNo: number) {
    this.firstName = fName,
    this.lastName = lName,
    this.frequentFlyerNo = freqFlyerNo
  }

  display() {
    console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
  }
}

var passenger1 = new Passenger("Navid", "Hejazi", 20);
// console.log(passenger1.display());

var passenger2 = new Passenger("Lida", "Shahmiri", 100);
// console.log(passenger2.display());

for (let item in passenger1) {
  if (item !== "display") {
    // console.log(item);
    // console.log(passenger1[item]);
  }
}

for (let item in passenger1) {
  if (passenger1[item] instanceof Function) {
    continue;
  } else {
    console.log(item);
    console.log(passenger1[item]);
  }
}
