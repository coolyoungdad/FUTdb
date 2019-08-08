const express = require('express');
const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306
}); 

//Connect
db.connect((err) => {
    if (err) {
        console.log(err.code); // 'ECONNREFUSED'
        console.log(err.fatal); // true
    } 
        console.log("Connected");
});

const app = express();

//Create dB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE fut-db;';
    db.query(sql, (err, result) => {
        if (err) {throw err};

        console.log(result); 
        res.send('database created');
    });
});

app.listen('3306', () => {
    console.log('Server started on port 3000');
});