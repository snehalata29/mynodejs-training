import fs from 'fs';

// a reusable writeEmployee function
export function writeEmployee(fileName, obj) {
    // read the existing JSON array in the form of Javascript
    let arr = readEmployee(fileName);
    arr.push(obj);
    let json = JSON.stringify(arr);
    fs.writeFileSync(fileName, json);
}
// a resusable readEmployee function that returns a Javascript array

export function readEmployee(fileName) {
    let data = fs.readFileSync(fileName);
    let json = data.toString();
    let js = JSON.parse(json);
    return js;
}