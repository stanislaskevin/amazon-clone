import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" 
                alt=""    
            />
            {/** Product id, title, price, rating, image */}
            <div className="home_row">
                <Product 
                    id="1232141899"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses (Anglais)"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41+e3refnZL._SX334_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12321412"
                    title="Dell Inspiron G5 15-5590 PC Portable Gamer 15,6 Full HD Space Black (Intel Core i7, 16 Go de RAM, Disque Dur 1To + SSD 256Go, NVIDIA GeForce RTX 2060 6GB) "
                    price={789.60}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81JXtHDB%2BsL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="12321413"
                    title="Apple Watch Series 3 (GPS) boîtier en aluminium gris sidéral de 38 mm avec Bracelet Sport noir "
                    price={258.90}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71hv4BeYI0L._AC_SL1500_.jpg"
                />
                <Product 
                    id="12321467"
                    title="Amazon Echo (3ème génération), Enceinte connectée avec Alexa, Tissu gris chiné"
                    price={79.58}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/91iWMrqJUfL._AC_SL1500_.jpg"
                />
                <Product 
                    id="123214987"
                    title="Nouveau Apple iPad Pro (11 pouces, Wi-Fi + Cellular, 256 Go) - Gris sidéral (2e génération) "
                    price={850.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Rjg9HrirL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="123213451"
                    title="Samsung C49RG90, Ecran PC Gaming incurvé, Ultra-Large, Dalle VA 49, Résolution 5K (5120 x 1440), 120 Hz, 4ms, HDR 1000, qled, AMD Freesync, Noir "
                    price={1079.43}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                />
            </div>
            
            {/** Product */}
        </div>
    )
}

export default Home