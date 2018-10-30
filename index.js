const gadgetFactory = require("./gadgetFactory");
const myLaptop = gadgetFactory.createGadget("Laptop", {
    ram: 8,
    ssd: 256,
    name: "Sanjay's MacBook Pro"
});
const myTablet = gadgetFactory.createGadget("Tablet", {
    ram: 4,
    hdd: 128,
    name: "Sanjay's iPad"
});
console.log(myLaptop);
console.log(myTablet);