import appdemo, {greet, add, Employee} from './hello.js';

appdemo();
let emp1 = new Employee(1234, "Rajesh", 43520);
emp1.print();
console.log(greet(emp1.name));
console.log(add(325, 450));