import { useState } from "react";
import "./App.css";

export default function App() {
  const [cuenta, setCuenta] = useState(0);

  const incrementar = (evento) => {
    evento.preventDefault();
    setCuenta(cuenta + 1);
  };

  const disminuir = (evento) => {
    evento.preventDefault();
    setCuenta(cuenta - 1);
  };

  return (
    <div className="App">
      <h1>Juega con los números</h1>
      <div>
        <button className="botonInc" onMouseOver={incrementar}>
          Incrementar
        </button>
      </div>
      <br />
      <br />
      <div className="resultado">{cuenta}</div>
      <br />
      <br />
      <div>
        <button className="botonInc" onClick={disminuir}>
          Disminuir
        </button>
      </div>
    </div>
  );
}
