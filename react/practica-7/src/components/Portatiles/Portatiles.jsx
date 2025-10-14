import { Link } from "react-router-dom";
import "./Portatiles.css";

export default function Portatiles() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 formato4">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/LATITUDE-3420-2.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">Laptop Dell Inspiron </h5>
                <p className="card-text">Modelo: 5502 Core i5</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato4 ">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/DELL-NB-2n1-Inspiron-14-5410-2.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Laptop Dell NB Inspiron</h5>
                <p className="card-text">Modelo: 3501 Core i7 11va</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 formato4">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/NB-HP-PROBOOK-450-G8-2.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Laptop HP Pavilion</h5>
                <p className="card-text">Modelo: gaming Core i7</p>
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
