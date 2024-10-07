// importing MongoClient class that helps you to connect

import { MongoClient } from "mongodb";
const DB_URL = "mongodb://127.0.0.1:27017";

// a function that estalishes the connection
async function getConnection() {
    return await MongoClient.connect(DB_URL);
}
// 1st way: getConnection().then( result => { CRUD }). catch( err => { } )
//2nd way : let conn = await getConnection(); if(con!=undefined)  CRUD 
// to store the document

// function that finds the document based on the _id
export async function find(id) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw "DB Connection Error";
    } else {
        let db = connection.db("citibank_db"); // use citibank_db
        let promise = await db.collection("profiles").findOne({"_id":id});
        connection.close();
        return promise;
    }
}

export async function save(doc) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw "DB Connection Error";
    } else {
        let db = connection.db("citibank_db"); // use citibank_db
        try { 
            let promise = await db.collection("profiles").insertOne(doc);
            connection.close();
            return promise;
        } catch(err) {
            connection.close();
        }
    }
}
// delete implementation

export async function deleteById(id) {
    let connection = await getConnection();
    if(connection == undefined || connection == null) {
        throw "DB Connection Error";
    } else {
        let db = connection.db("citibank_db"); // use citibank_db
        let promise = await db.collection("profiles").deleteOne({"_id":id});
        connection.close();
        return promise;
    }
}