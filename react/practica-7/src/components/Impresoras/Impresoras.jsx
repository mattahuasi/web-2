import { Link } from "react-router-dom";
import "./Impresoras.css";

export default function Impresoras() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 formato2">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/IMPRESORA-MATRICIAL-EPSON-LQ-590II-2.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">Impresora Matricial </h5>
                <p className="card-text">Modelo: LQ-590II EPSON</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato2 ">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/IMPRESORA-HP-M507-DN-2.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Impresora LaserJet Enterprise</h5>
                <p className="card-text">Modelo: M612dn HP</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato2">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/IMPRESORA-EPSON-DFX-9000-2.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Impresora matricial </h5>
                <p className="card-text">Modelo:Epson LQ590II</p>
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
