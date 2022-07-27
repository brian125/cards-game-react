import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import useCards from '../../hooks/useCards';

const HomePage = ({nombreJugador1, nombreJugador2, setnombreJugador1,setnombreJugador2}) => {

  const {baraja} = useCards();
  const hadleNombreJugadores = (e) => {
    if (nombreJugador1.length == 0 || nombreJugador2.length == 0) {
      e.preventDefault()
    }
  }

  return (
    <div className="contenedor">
      <div className="registro">
        <h1>Registro de jugadores</h1>
        <div className="jugadores">
          <form>
            <div className="campo">
            <label>Jugador 1</label>
            <input
              type="text"
              value={nombreJugador1}
              onChange={(e) => setnombreJugador1(e.target.value)}
            />
            </div>
            <div className="campo">
            <label>Jugador 2</label>
            <input
              type="text"
              value={nombreJugador2}
              onChange={(e) => setnombreJugador2(e.target.value)}
            />
            </div>
            <div className="btn-container">
            <Link to={{pathname: "/game", state: {nombreJugador1: nombreJugador1, nombreJugador2:nombreJugador2}}}>
              <button onClick={hadleNombreJugadores} className="boton">
                Jugar
              </button>
            </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="decorativeImage"></div>
    </div>
  );
};

export default HomePage;
