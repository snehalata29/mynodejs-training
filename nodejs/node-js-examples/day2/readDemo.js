import fs from 'fs';
import read from 'readline-sync';

let fileName = read.question("Enter file name: ");

if(fs.existsSync(fileName)) {
    let bufferData = fs.readFileSync(fileName);
    console.log(bufferData.toString());
} else {
    throw "File name "+fileName+" doesn't exist";
}