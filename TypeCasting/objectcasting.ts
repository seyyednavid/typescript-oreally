interface Asghar {
  id: number;
}

let e1: Asghar = {id:456};
let e2= {id:123, name:"Navid"}

e1 = e2;
e2 = e1; // Error as right side can include left side and more

