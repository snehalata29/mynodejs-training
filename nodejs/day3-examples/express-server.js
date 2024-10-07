import express from 'express';

// express object 
let app = express();

// start the server 
app.listen(9090, ()=>console.log('express server runing in 9090'));

// a simple get method mapping
app.get('/greet', (request, response) => {
    response.send('HELLO USER');
});