import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../CardSlice";

const ProductCard = ({ image, name, price }) => {

  const dispatch = useDispatch();
  const [productImg, setImage] = useState(image);
  const [productName, setName] = useState(name);
  const [productPrice, setPrice] = useState(price);

  const cardBtn = document.getElementById("CardBtn");
  const AddToCardBtn = document.getElementById("AddedToCardBtn");
  console.log(cardBtn,AddToCardBtn);

  const addToCardBtn = document.getElementsByClassName("button");
  

  const addedToCard = () => {
    console.log(addToCardBtn);
    addToCardBtn[0].classList.add('hidden');
    addToCardBtn[1].classList.remove('hidden');
    addToCardBtn[1].classList.add('block');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#120E43] text-[#CAD5E2] p-4 rounded-md">
      <div id="imgDiv">
        <img className="w-[200px] h-[150px]" src={productImg} alt={productName} />
      </div>

      <div className="text-center">
        <p>{productName}</p>
        <p>{productPrice}</p>
      </div>

      <button
        id="CardBtn"
        className="bg-[#E07C24] text-white font-semibold py-2 px-4 rounded-md button"
        onClick={() => {
          dispatch(addToCard([productImg, productPrice, productName]));
          addedToCard();
        }}
      >
        Add to card
      </button>
      <button
       id="AddedToCardBtn"
       className="hidden bg-[#E21717] text-white font-semibold py-2 px-4 rounded-md button">
        Added To Card
      </button>
    </div>
  );
};

export default ProductCard;
