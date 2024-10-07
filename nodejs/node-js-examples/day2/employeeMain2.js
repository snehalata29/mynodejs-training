import read from 'readline-sync';
import { Employee } from './employee.js';
import { writeEmployee } from './employee-file-op.js';

let id = read.questionInt('Enter Id:');
let name = read.question('Enter Name:');
let phone = read.questionInt('Enter Phone: ');

let employee = new Employee(id, name, phone);
writeEmployee("employee-db.json", employee);
console.log('writing completes');
