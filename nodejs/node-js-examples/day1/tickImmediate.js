console.log('hello world');

setImmediate(()=>{
    console.log('setImmediate() function');
});

process.nextTick(()=>{
    console.log('nextTick function');
});

setTimeout(()=>{
    console.log('setTimeout is called')
}, 0)


// filereading("demo.txt", () => { 
 //   setImmediate(()=>{})
 //   setTimeout(()=>{}, 0);
//});
