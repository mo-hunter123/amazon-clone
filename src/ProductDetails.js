import React, { useEffect, useState } from 'react'
import axios from './axios.js'

function ProductDetails(props) {

    const initialProductState = {
        id: null, 
        title: "",
        image: "",
        price: "",
        rating: ""
    }

    const [currentProduct, setCurrentProduct] = useState(initialProductState)

    const getProduct = productId => {
        axios.get(`/products/${productId}`).then((response) => {
            setCurrentProduct(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        getProduct(props.match.params.productId);
    }, [props.match.params.productId])

    return (
        <div>
            
        </div>
    )
}

export default ProductDetails
