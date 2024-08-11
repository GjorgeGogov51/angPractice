class Employee
{
    private id: number;
    protected name: string;
    public address: string;

    //Can't have both default and parameterized constructor
    constructor(id: number, name: string, address: string) 
    {
        this.id = id;
        this.name = name;
        this.address = address
    }
    getNameWithAddress(): string
    {
        //return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", "Highway 71");

let address = john.getNameWithAddress();

console.log(john);
console.log(address);

class Manager extends Employee
{
    constructor(id: number, name: string, address: string)
    {
        super(id, name, address);
    }
    getNameWithAddress(): string
    {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());