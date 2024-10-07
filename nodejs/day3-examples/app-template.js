import express from 'express';
let app = express();
app.listen(9091, ()=>console.log('server running in 9091'));

// set the view engine
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    let obj = {title : "PUG Template", message : "Some dynamic content", name:"Guest"};
    res.render("index", obj);
});