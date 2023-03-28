import React from "react";
import ProductCard from "./ProductCard";
import bottal from '../assets/images/bottalMatel.jfif';

const Product = () =>{
    return(
        <ProductCard image={bottal} name='Water Bottal' price='200.00' />
    );
}

export default Product;