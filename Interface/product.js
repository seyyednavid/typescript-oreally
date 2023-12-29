var product1 = {
    id: 120,
    name: "navid",
    description: "welcome to board",
    price: 1000000,
    display: function () {
        console.log(this.id + this.name);
    }
};
console.log(product1.display());
