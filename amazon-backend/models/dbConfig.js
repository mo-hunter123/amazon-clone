import mysql from 'mysql'


const conn = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "projectDB"
})


conn.connect((err) => {
    if(err) throw err; 
    console.log("database connected")
})

export default conn