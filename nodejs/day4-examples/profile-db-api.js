// this is using express to perform CRUD operations using mongodb
import express from 'express';
import cors from 'cors';
import { save, find, deleteById } from './db-operations.js';
// express object
let app = express();
// add body paraser into the middleware so that you can parse JSON & enable cors
app.use(express.json()); // parse the JSON to Javascript
app.use(cors()); // enables CORS

// a webservcie to delete
app.delete("/profiles/:id", async (request, response) => {
    let id = parseInt(request.params.id);
    let result = await deleteById(id);
    if(result ?.deletedCount > 0) {
        response.status(200).json(result);
    } else {
        response.status(409).json({"message":"Id not found: "+id});
    }
});


//a webservice that will store the data by calling save
app.post("/profiles", async (request, response) => {
    //read the request body
    let data = request.body;
    let result = await save(data);
    if(result?.acknowledged) {
        response.status(200).json(result);
    } else {
        response.status(409).json({"message":"Failed to store"});
    }
});
// start the server
app.listen(9999, ()=>console.log('server is running in 9999'))