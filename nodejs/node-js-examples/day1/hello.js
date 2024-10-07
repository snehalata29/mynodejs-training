export function greet(name) {
    return "Hello "+name;
}
export function add(x, y) {
    return x + y;
}
export class Employee { 
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    print() {
        console.log("Id = "+this.id+", Name = "+this.name+", Salary = "+this.salary);
         // back tick ` vs single quote ' 
        console.log(`Id = ${this.id}, Name = ${this.name}, Salary = ${this.salary}`);
    }
}
export default function app() {
    console.log('app() is a default module')
}