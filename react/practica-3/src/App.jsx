import "./App.css";
import { Conversor } from "./components/Conversor";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>CURSO DE REACT</h1>
          <h2>Componente para Calcular Dolares a Bolivianos</h2>
        </p>
        <Conversor />
      </header>
    </div>
  );
}
