"use strict";
class Employee {
    //Can't have both default and parameterized constructor
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        //return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, "John", "Highway 71");
let address = john.getNameWithAddress();
console.log(john);
console.log(address);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
