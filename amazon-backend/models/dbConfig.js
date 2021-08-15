const mysql = require('mysql')


const conn = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "amazon-db"
})


conn.connect((err) => {
    if(err) throw err; 
    console.log("database connected")
})

module.exports = conn