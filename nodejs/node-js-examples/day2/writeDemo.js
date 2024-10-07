import fs from 'fs';
import read from 'readline-sync';

let fileName = read.question("Enter filename: ");
let content = read.question("Enter content: ");
content = "\n"+content;
fs.writeFileSync(fileName, content, {flag: "a+"});
console.log('File write successfull');