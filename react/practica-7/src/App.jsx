import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contactanos from "./components/Contactanos/Contactanos";
import Escaners from "./components/Escaners/Escaners";
import VentaEscaner from "./components/Escaners/Venta";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Impresoras from "./components/Impresoras/Impresoras";
import NavBar from "./components/NavBar/NavBar";
import Pcescritorio from "./components/Pcescritorio/Pcescritorio";
import Portatiles from "./components/Portatiles/Portatiles";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Escaners" element={<Escaners />} />
          <Route path="/Portatiles" element={<Portatiles />} />
          <Route path="/Pcescritorio" element={<Pcescritorio />} />
          <Route path="/Impresoras" element={<Impresoras />} />
          <Route path="/contactos" element={<Contactanos />} />
          <Route path="/comprar" element={<VentaEscaner />} />
          {/*<Route path="/Venta" element={<Venta />} />*/}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
