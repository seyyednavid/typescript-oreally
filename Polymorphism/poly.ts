class Employee {
  public firstName: string;
  public lastName: string;
  public designation: string;

  public print(): void {
    console.log("Employee details");
  }
}

class Manager extends Employee {
  constructor(firstName: string, lastName: string, designation: string) {
    super();
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.designation = designation);
  }

  public print(): void {
    super.print();
    console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
  }
}
class Lead extends Employee {
  constructor(firstName: string, lastName: string, designation: string) {
    super();
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.designation = designation);
  }

  public print(): void {
    super.print();
    console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
  }
}
class Developer extends Employee {
  constructor(firstName: string, lastName: string, designation: string) {
    super();
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.designation = designation);
  }

  public print(): void {
    super.print();
    console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
  }
}

let employees: Employee[] = new Array(
  new Manager("Lida", "Shahmiri", "Manager"),
  new Lead("Navid", "Hejazi", "Lead"),
  new Developer("Ali", "Biniaz", "Developer")
);
console.log(employees);

for (var employee of employees) {
  employee.print();
}
