const express = require('express')
const bodyParser = require('body-parser');
const products = require("./controllers/product.controller")

const app = express(); 
const port = process.env.PORT || 9000; 

// parse requests of content-type: application/json  
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({message: "Hello world"})
})


//create a new product 
app.post("/products", products.create); 

//find a special product 
app.get("/products/:productId", products.findById); 

//get all products 
app.get("/products", products.getAll);

//update product 
app.put("/products/:productId", products.updateById)

app.listen(port, () => console.log(`LIstening on port ${port}`))