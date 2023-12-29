// Interface is only exist on compile time no run time
interface Product {
  id: number;
  name: string;
  description: string;
  price?: number; //optional properties
  display():void;
}

var product1: Product = {
  id: 120,
  name: "navid",
  description: "welcome to board",
  price: 1000000,
  display():void {
    console.log(this.id + this.name);
  }
};

console.log(product1.display());
