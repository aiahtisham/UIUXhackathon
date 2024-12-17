import React from "react"
import Navbar from "./components/navbar"
import Listing from "./components/listing"
import Hero from "./components/hero"
import ProductList from "./components/ProductList"
import Carousel from "./components/carousel"
import Carousel2 from "./components/carousel2"
import Featurepost from "./components/featurepost"
import Footer from "./components/footer"
export default function page(){
  return(
     <div>
     <Navbar />
     <Hero />
     <Listing/>
     <ProductList/>
     <Carousel/>
     <Carousel2/>
     <Featurepost/>
     <Footer/>
    

     </div>
  )
}

