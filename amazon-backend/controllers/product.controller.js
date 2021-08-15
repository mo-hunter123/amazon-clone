const Product = require("../models/product.model");

exports.create = (req, res) => {
    // validate the request 
    if(!req.body) {
        res.status(400).send({
            message: "Content is empty"
        })
    }

    console.log(req.body)

    const product = new Product({
        title: req.body.title, 
        image: req.body.image, 
        price: req.body.price, 
        rating: req.body.rating 
    })

    //save the PRODUCT 
    Product.create(product, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "unknown error while creating the product"

            })
        } else {
            res.send(data)
        }
    })
}


exports.findById = (req, res) => {
    Product.findById(req.params.productId, (err, data) => {
        if(err) {
            if(err.kind == "not found") {
                res.status(500).send({
                    message: `Not found product ${req.params.productId}`
    
                })
            } else {
                res.status(500).send({
                    message: err.message || "unknown error while searching the product"
    
                })
            }
        } else {
            res.send(data)
        }
    })
}


exports.getAll = (req, res) => {
    Product.getAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "unknown error while getting products"

            })
        } else {
            res.send(data)
        }
    })
}

exports.updateById = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content empty"
        })
    }


    Product.updateById(
        req.params.productId, 
        new Product(req.body), 
        (err, data) => {
            if(err) {
                if(err.kind == "not found") {
                    res.status(500).send({
                        message: `Not found product ${req.params.productId}`
        
                    })
                } else {
                    res.status(500).send({
                        message: err.message || "unknown error while updating products"
        
                    })
                }
            } else {
                res.send(data)
            }
        }
    )
}