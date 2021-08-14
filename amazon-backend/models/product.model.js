//create a new product 
//find a product by id 
//get all products 
//update a product by id 
//remove a product 
//remove all products 

import conn from "./dbConfig";

const Product = function(product) { 
    this.title = product.title; 
    this.image = product.image; 
    this.price = product.price; 
    this.rating = product.rating; 
    
}

Product.create = (newProduct, result) => {
    conn.query('INSERT INTO products SET ?', newProduct, (err, res) => {
        if(err) {
            console.log(`Error: ${err}`)
            result(err, null)
            return; 
        }

        console.log("created product: ", {id: res.insertId, ...newProduct});
        result(null, {id: res.insertId, ...newProduct});
    });
};

Product.findById = (productId, result) => {
    conn.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
        if(err) {
            console.log(`Error: ${err}`);
            result(err, null);
            return; 
        }

        if(res.length) {
            console.log("Found product: ", res[0]);
            result(null, res[0]);
            return;
        }

        //case no product found 
        result({kind: "Product not found"}, null);
    })
}


Product.getAll = result => {
    conn.query("SELECT * FROM products", (err, res) => {
        if(err) {
            console.log(`Error: ${err}`);
            result(err, null);
            return; 
        }

        console.log(`Products: ${res}`);
        result(null, res)
    })
}



export default Product