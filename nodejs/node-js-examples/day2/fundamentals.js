let a = 10;
let b = "10";
let c = 10;
console.log(`(a === b)=${a === b}`); // false
console.log(`(a === c)=${a === c}`); // true
console.log(`(a == b)=${a == b}`); // true
console.log(`(a == c)=${a == c}`); // true
console.log(`(a + b)=${a + b}`);
console.log(`(a + c)=${a + c}`);
// ?: operator it is like 
console.log((a === b) ? "a & b of same type and value": "a & b are of not same type");
// arrays in javascript is represented using [ ]
let items = [200, 100, 400, 500, 300];
// forEach(cbFn(item, index))
items.forEach((value, index)=>console.log(`Item at ${index} is ${value}`));
// let [] = map(cbFn(item, index)), map is used to transform the array into another form
//let mappedItems = items.map((value, index)=>{console.log(value); return Math.round(value * 1.1, 2)});
let mappedItems = items.map((value, index)=>Math.round(value * 1.1, 2));
console.log(`Old Items=${items}, New Items=${mappedItems}`);