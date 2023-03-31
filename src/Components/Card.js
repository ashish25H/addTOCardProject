import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../CardSlice";
import NavBar from "./NavBar";

const Card = () => {
  const card = useSelector((state) => state.card.card);
  console.log(`it is card data `);
  console.log(card);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div className="md:grid grid-rows-2 grid-flow-col gap-4">
        {card.map((card) => (
          <div className="flex flex-col items-center justify-center w-fit sm:flex flex-col items-center justify-center w-fit bg-[#03203C] m-4 text-[#CAD5E2] rounded-md mx-auto ">
            <img
              className="sm:w-[150px] h-[100px] m-5 rounded-md"
              src={card.image}
              alt="image"
            />
            <p className="text-2xl pl-5">{card.name}</p>
            <p className="text-xl pl-4">{card.price}</p>

            <div className="sm:flex">
              <button className="bg-[#CAD5E2] py-2 px-4 text-black m-3 rounded-md">
                Buy Now
              </button>
              <button
                className="bg-[#CAD5E2] py-2 px-4 text-black m-3 rounded-md"
                onClick={() => dispatch(removeFromCard(card.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
