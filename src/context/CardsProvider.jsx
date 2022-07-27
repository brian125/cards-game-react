import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
    
    const [baraja, setBaraja] = useState({});

    useEffect(() => {
    //OBTENER ID DE LA PARTIDA
      const consultarAPI = async () => {
        const url = `http://deckofcardsapi.com/api/deck/new/`;
        const { data } = await axios(url);
        setBaraja(data);
      };
      consultarAPI();
  }, []);

  return (
    <CardsContext.Provider
      value={ {baraja} }
    >
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider };
export default CardsContext;