import express from 'express';

let app = express();
app.listen(9090, ()=>console.log('server is running in 9090'));

// HTTP GET mapping 
app.get('/profile/:id', (request, response) => {
    let _id = parseInt(request.params.id);
    // assuming that we are getting profile from the backend - db
    response.json({id: _id, name: "Alexandar", phone: 9939393, email: "alex@g.com"});
});

// HTTP POST mapping 
app.post('/profile/:id/:name', (request, response) => {
    let _id = parseInt(request.params.id);
    let name = request.params.name;
    // assuming that we are getting profile from the backend - db
    response.json({id: _id, name: name, phone: 66446464, email: "brad@g.com"});
});