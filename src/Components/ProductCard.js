import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../CardSlice";

const ProductCard = ({ image, name, price }) => {
  const dispatch = useDispatch();
  const [proimage, setImage] = useState(image);
  const [proname, setName] = useState(name);
  const [proprice, setPrice] = useState(price);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img className="w-[200px]" src={proimage} alt={proname} />
      </div>

      <div className="text-center">
        <p>{proname}</p>
        <p>{proprice}</p>
      </div>

      <button
        onClick={() => dispatch(addToCard([proimage, proprice, proname]))}
        className="bg-[#E07C24] text-white font-semibold py-2 px-4 rounded-md"
      >
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;
