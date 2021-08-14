import express from 'express'
import bodyParser from 'body-parser';

const app = express(); 
const port = process.env.PORT || 9000; 

// parse requests of content-type: application/json  
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({message: "Hello world"})
})


app.listen(port, () => console.log(`LIstening on port ${port}`))