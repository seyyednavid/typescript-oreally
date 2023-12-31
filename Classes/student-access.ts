// public , private , readonly, accessor methods(set and get) 
class Student {
  public readonly name: string = "navid";
  private _lastName: string;

  display() {
    console.log(this.name + " " + this._lastName);
  }

  set lastName(name: string) {
    this._lastName = name;
  }

  get lastName(): string {
    return this._lastName;
  }
}

var student1 = new Student();
// student1.name = "navid"

// student1._lastName // error
// actually user do not know about set and get and feel to work with property directly.   ***
student1.lastName = "hejazi";
console.log(student1.lastName);
student1.display();
