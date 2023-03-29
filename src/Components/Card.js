import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const Card = () => {
  const card = useSelector((state) => state.card.card);
  console.log(card);
  return (
    <>
      <NavBar />
      <div>
        <ul>
          {card.map((ele)=>{
            
          })}
        </ul>
      </div>
    </>
  );
};

export default Card;
