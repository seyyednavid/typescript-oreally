// public , private , readonly, accessor methods(set and get) 
var Student = /** @class */ (function () {
    function Student() {
        this.name = "navid";
    }
    Student.prototype.display = function () {
        console.log(this.name + " " + this._lastName);
    };
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (name) {
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student1 = new Student();
// student1.name = "navid"
// student1._lastName // error
// actually user do not know about set and get and feel to work with property directly.   ***
student1.lastName = "hejazi";
console.log(student1.lastName);
student1.display();
