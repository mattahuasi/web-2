import { useRef } from "react";
import "../App.css";

export const Conversor = () => {
  const bolRef = useRef();
  const resultadoRef = useRef();

  const calcular = () => {
    const bolValue = bolRef.current.value;
    const dolares = bolValue * 6.96;
    resultadoRef.current.innerHTML = dolares;
  };
  return (
    <div>
      <input
        className="entrada"
        type="text"
        placeholder="Introduzca en dolares"
        ref={bolRef}
      />
      <button className="boton" onClick={calcular}>
        Aceptar
      </button>
      <div className="salida" ref={resultadoRef}></div>
    </div>
  );
};
