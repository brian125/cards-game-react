import axios from "axios";
import React, { useEffect, useState } from "react";
import useCards from "../../hooks/useCards";

const GamePage = () => {
  const { baraja } = useCards();
  const [mazo, setMazo] = useState({});

  useEffect(() => {
    console.log("ID DE LA PARTIDA", baraja.deck_id);
    
    //REVOLVER LAS CARTAS
    if (baraja.deck_id) {
      console.log("REVOLVIENDO CARTAS");
      const consultarAPI2 = async () => {
        const url = `http://deckofcardsapi.com/api/deck/${baraja.deck_id}/shuffle/`;
        const { data } = await axios.get(url);
        setMazo(data);
      };
      consultarAPI2();
    }

    // OBTENER EL JUEGO
    if (baraja.deck_id) {
      console.log("ENTRO");
      setTimeout(() => {
        const consultarAPI = async () => {
          const url = `https://deckofcardsapi.com/api/deck/${baraja.deck_id}/draw/?count=4`;
          const { data } = await axios.get(url);
          setMazo(data);
        };
        consultarAPI();
      }, 500);
    }
  }, [baraja]);

  return (
    <div>
      GamePage
      { mazo.cards  && 
      <div>
        <img src={mazo.cards[0].image} />
        <img src={mazo.cards[1].image} />
        <img src={mazo.cards[2].image} />
        <img src={mazo.cards[3].image} />
      </div>
      }
      <p></p>
      
    </div>
  );
};

export default GamePage;
