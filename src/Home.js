import React from 'react'
import Product from './Product'
import './Home.css'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product 
                        id="12312"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="1234"
                    />
                    <Product 
                        id="12312"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={230.96}
                        rating={4}
                        image="3002"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="1431"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={5234.96}
                        rating={3}
                        image="2000"
                    />
                    <Product 
                        id="423141"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={12.96}
                        rating={2}
                        image="5493"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="45312"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={12.96}
                        rating={2}
                        image="3444"
                    />
                  
                </div>



            </div>
        </div>
    )
}

export default Home
