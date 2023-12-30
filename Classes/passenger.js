var Passenger = /** @class */ (function () {
    function Passenger(fName, lName, freqFlyerNo) {
        this.firstName = fName,
            this.lastName = lName,
            this.frequentFlyerNo = freqFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger1 = new Passenger("Navid", "Hejazi", 20);
console.log(passenger1.display());
var passenger2 = new Passenger("Lida", "Shahmiri", 100);
console.log(passenger2.display());
for (var item in passenger1) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger1[item]);
    }
}
