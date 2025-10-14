import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contactanos from "./Contactanos.jsx";
import Cursos from "./Cursos.jsx";
import Inicio from "./Inicio.jsx";
import Principal from "./Principal.jsx";
import Registrate from "./Registrate.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  );
}
