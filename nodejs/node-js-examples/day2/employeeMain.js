import read from 'readline-sync';
import { Employee } from './employee.js';

let id = read.questionInt('Enter Id:');
let name = read.question('Enter Name:');
let phone = read.questionInt('Enter Phone: ');

let pwd = read.questionNewPassword('Enter Password: ');

let employee = new Employee(id, name, phone);
console.log(employee.display());
console.log("__________");
console.log(`Password=${pwd}`);