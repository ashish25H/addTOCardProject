import React from "react";
import ProductCard from "./ProductCard";
import bottal from '../assets/images/bottalMatel.jfif';
import cube from '../assets/images/cube.jfif';
import goggles from '../assets/images/goggles.jpg';
import shoes from '../assets/images/product1.jpeg';
import headphone from '../assets/images/head phones.jpg'

const Product = () =>{
    return(
        <div className="sm:grid grid-row-2 grid-flow-col gap-4 p-10">
        <ProductCard image={bottal} name='Water Bottal' price='200.00' />
        <ProductCard image={cube} name='Cube' price='50.00'/>
        <ProductCard image={goggles} name='Goggles' price='400.00'/>
        <ProductCard image={shoes} name='Shoes' price='500.00'/>
        <ProductCard image={headphone} name='Headphone' price='5000.00'/>
        </div>
        
    );
}

export default Product;