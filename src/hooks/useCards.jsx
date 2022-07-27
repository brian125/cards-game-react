import { useContext } from "react";
import CardsContext from "../context/CardsProvider";

const useCards = () => {
  return useContext(CardsContext);
};

export default useCards;