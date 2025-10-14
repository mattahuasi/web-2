import { Link } from "react-router-dom";
import CarrucelDeImagenes from "./Carrusel/Carrusel";
import "./Home.css";
import Escaners from "./Imagenes/escaners.webp";
import Impresoras from "./Imagenes/impepson321.webp";
import Pc from "./Imagenes/pcdelloptiplex7090.webp";
import Portatiles from "./Imagenes/portatilhppavilion.webp";

export default function Home() {
  return (
    <div className="fondo">
      <CarrucelDeImagenes />

      <div className="container fondo">
        <div className="row row-cols-2">
          <div className="col-md-6">
            <Link to={"/Escaners"} className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Escaners}
                alt=""
              ></img>
              <h6>Escaners</h6>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to={"/Portatiles"} className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Portatiles}
                alt=""
              ></img>
              <h6>Portatiles</h6>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to={"/Pcescritorio"} className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Pc}
                alt="foto sport"
              ></img>
              <h6>Pc-Escritorio</h6>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to={"/Impresoras"} className="enlace">
              <img
                className=" w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Impresoras}
                alt=""
              ></img>
              <h6>Impresoras</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
