import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contactanos.css";
//<FontAwesomeIcon icon="fa-brands fa-instagram" />
//<FontAwesomeIcon icon="fa-brands fa-tiktok" />
//<FontAwesomeIcon icon="fa-solid fa-envelope" />
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contactanos() {
  return (
    <div className="container">
      <div>
        <div className="container-cont">
          <h4 className="cont-titulo">Sucursales</h4>
          <div className="cont-direccion">
            <i className="bi bi-geo-alt i-cont"></i>
            <p>Cotacota - oficina 767</p>
          </div>
          <div className="cont-direccion">
            <i className="bi bi-geo-alt i-cont"></i>
            <p>Los Pinos - oficina 345</p>
          </div>
          <div className="cont-direccion">
            <i className="bi bi-geo-alt i-cont"></i>
            <p>La Paz - Bolivia</p>
          </div>
        </div>
        <div className="container-cont">
          <h4 className="cont-titulo">Contactanos</h4>
          <div className="cont-detalle">
            <h5 className="detalle-titulo">Redes</h5>
            <a href="" target="_blank" rel="noreferrer">
              <h1>
                <FontAwesomeIcon icon={faPaperPlane} />
              </h1>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <h1>
                <FontAwesomeIcon icon={faInstagram} />
              </h1>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
          <div className="cont-detalle">
            <h5 className="detalle-titulo">WhatsApp</h5>
            <a href="" target="_blank" rel="noreferrer">
              <h1>
                <FontAwesomeIcon icon={faWhatsapp} />
              </h1>
            </a>
          </div>
          <div className="cont-detalle">
            <h5 className="detalle-titulo">Email</h5>
            <p className="p-email">
              <h1>
                <FontAwesomeIcon icon={faEnvelope} />
              </h1>
              pdvp.com@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
