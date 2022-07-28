import axios from "axios";
import "./game.css";
import React, { useEffect, useState } from "react";
import useCards from "../../hooks/useCards";
import Carta from "./Carta";

const GamePage = ({ nombreJugador1, nombreJugador2 }) => {
  const { baraja } = useCards();
  const [mazo, setMazo] = useState({});

  const [cartasJugador1, setcartasJugador1] = useState([]);
  const [cartasJugador2, setcartasJugador2] = useState([]);

  const [opcionada1, setOpcionada1] = useState([]);
  const [opcionada2, setOpcionada2] = useState([]);

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

  const handleDrawCards = (e) => {
    e.preventDefault();

    if (cartasJugador1.length < 5 && cartasJugador2.length < 5) {
      setTimeout(() => {
        const consultarAPI = async () => {
          const url = `https://deckofcardsapi.com/api/deck/${baraja.deck_id}/draw/?count=2`;
          const { data } = await axios.get(url);
          setMazo(data);
        };
        consultarAPI();

        //OBTENER CARTAS POSTERIORES
        if (mazo.cards) {
          setcartasJugador1([...cartasJugador1, mazo.cards[0]]);
          setcartasJugador2([...cartasJugador1, mazo.cards[1]]);
        }
      }, 500);
      console.log("click");
    }

    if (cartasJugador1.length === 5 && cartasJugador2.length === 5) {
      cartasJugador1.forEach((carta) => {
        if (opcionada1.includes(carta.value)) {
          setOpcionada1([...opcionada1, carta]);
        }
      });

      cartasJugador2.forEach((carta) => {
        if (opcionada2.includes(carta.value)) {
          setOpcionada2([...opcionada2, carta]);
        }
      });
    }
  };

  return (
    <div className="fondo-juego">
      {mazo.cards && (
        <>
          <div className="jugador1">
            <h2 className="player-name">Jugador 1: {nombreJugador1}</h2>
            {cartasJugador1.map((carta) => (
              <Carta className="card-size" carta={carta} />
            ))}
            {opcionada1.map((carta) => (
              <>
                <p> OPCIONADAS </p>
                <Carta className="card-size" carta={carta} />
              </>
            ))}
          </div>
          <div className="jugador2">
            <h2 className="player-name">Jugador 2: {nombreJugador2}</h2>
            {cartasJugador2.map((carta) => (
              <Carta className="card-size" carta={carta} />
            ))}

            {opcionada2.map((carta) => (
              <Carta className="card-size" carta={carta} />
            ))}
          </div>
        </>
      )}
      <button onClick={handleDrawCards} className="draw-cards">
        Pedir Cartas
      </button>
    </div>
  );
};

export default GamePage;
