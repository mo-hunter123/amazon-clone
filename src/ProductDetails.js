import React, { useEffect, useState } from 'react'
import axios from './axios.js'
import "./ProductDetails.css"
import "bootstrap/dist/css/bootstrap.min.css"


function ProductDetails(props) {

    const initialProductState = {
        id: null, 
        id_categorie: "",
        title: "",
        image: "",
        price: "",
        rating: ""
    }

    const [currentProduct, setCurrentProduct] = useState(initialProductState)

    const getProduct = productId => {
        axios.get(`/products/${productId}`).then((response) => {
            setCurrentProduct(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        getProduct(props.match.params.productId);
    }, [props.match.params.productId])

    return (
        <div className="container">
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 w-100 bd-highligh">
                    <img src={`https://avatars.dicebear.com/api/human/${currentProduct.image}.svg`} alt=""/>
                </div>
                

                <div className="p-2 bd-highlight">
                    <div className="productdetails__centerTitle">
                        <h1>{currentProduct.title}</h1>
                    </div>
                    <div className="productdetails__centerRating">
                        {Array(currentProduct.rating).fill().map((_, i) => (
                            <span>🌟</span>
                        ))}
                    </div>
                    
                </div>

                <div className="p-2 bd-highlight">
                    <p className="productdetails__rightPrice">
                        <small>$</small>
                        <strong>{currentProduct.price}</strong>
                    </p>               
                </div>
                
            </div>
            
            
            
        </div>

        
    )
}

export default ProductDetails
