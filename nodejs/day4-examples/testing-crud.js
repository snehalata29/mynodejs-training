import { find, save } from "./db-operations.js";

save({_id:12, name : "Raj", phone : 88399393})
.then(result=>console.log(result))
.catch(err=>{
    console.log('catch()')
    console.log(err)
});
// console.log('--------------');
// find(12).then(r=>console.log(r)).catch(e=>console.log(e));