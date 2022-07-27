import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CardsProvider } from "./context/CardsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CardsProvider>
        <App />
    </CardsProvider>
  </BrowserRouter>
);
