import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GamePage from "./components/Game/GamePage";
import HomePage from "./components/Home/HomePage";

function App() {

  //ESTADOS POTENTES
  const [nombreJugador1, setnombreJugador1] = useState("");
  const [nombreJugador2, setnombreJugador2] = useState("");

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              nombreJugador1={nombreJugador1}
              nombreJugador2={nombreJugador2}
              setnombreJugador1={setnombreJugador1}
              setnombreJugador2={setnombreJugador2}
            />
          }
        />
        <Route
          path="/game"
          element={
            <GamePage
              nombreJugador1={nombreJugador1}
              nombreJugador2={nombreJugador2}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
