import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const Card = () => {
    const card = useSelector((state)=>state.card.card);
    console.log(card);
  return (
    <>
      <NavBar />
      <h1>card section</h1>
    </>
  );
};

export default Card;
