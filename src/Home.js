import React from 'react'
import Product from './Product'
import './Home.css'

function Home({products}) {
    var tester = 0; 

    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                
                {
                    Object.keys(products).map( function(key, index) {
                        console.log(key)
                        return (
                            <div className="home__row">
                                <Product 
                                    id = {products[key].id}
                                    title = {products[key].title}
                                    image = {products[key].image}
                                    price = {products[key].price}
                                    rating = {products[key].rating}
                                />
                                
                            </div>
                        )
                    })
                }
            
            </div>
        </div>
    )
}

export default Home
