// importing the http module
import http from 'http';
import url from 'url';

// creating the server
let server = http.createServer((req, res)=>{
    let obj = url.parse(req.url, true); // { query : {key:value,key:value} }
    let query = obj.query;
    res.write(`<html><body><h2>Hello ${query.name}, your phone=${query.phone}</h2></body></html>`)
    res.end();
});
// starting the server
server.listen(9999, ()=>console.log('server is running in 9999'));