import { Link } from "react-router-dom";
import "./Escaners.css";
//El nombre Escaners puede ser diferente

export default function Escaners() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 formato1">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">Escaner Fujitsu</h5>
                <p className="card-text">Modelo: FI-7260</p>
                {/* <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a> */}
                <Link className="btn btn-primary" to="/comprar">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato1">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7280-2.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Escaner Fujitsu</h5>
                <p className="card-text">Modelo: FI-7800</p>
                {/* <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a> */}
                <Link className="btn btn-primary" to="/comprar">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato1">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Escaner Fujitsu</h5>
                <p className="card-text">Modelo: FI-7600</p>
                {/* <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a> */}
                <Link className="btn btn-primary" to="/comprar">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/" data-mdb-ripple-init className="btn btn-warning">
        Volver a la pagina Principal
      </a>
    </div>
  );
}
