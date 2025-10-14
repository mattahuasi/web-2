import { Link } from "react-router-dom";
import "./Pcescritorio.css";

export default function Pcescritorio() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 formato3">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/OPTIPLEX-3080-SFF-2.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">CPU Dell Optiplex 7090</h5>
                <p className="card-text">Modelo: MT 360W core i9</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato3 ">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/Vostro-3681-SFF-2.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Pc de Escritorio 400 G7</h5>
                <p className="card-text">Modelo: CORE i5-10500 HP</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato3">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/Vostro-3681-SFF-2.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Pc de Escritorio Vostro 3681</h5>
                <p className="card-text">Modelo: SFF 10TH GEN i3</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <a href="#!" data-mdb-ripple-init className="btn btn-warning">
          Volver a la pagina Principal
        </a>
      </Link>
    </div>
  );
}
