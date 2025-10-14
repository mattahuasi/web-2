import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./EstiloNav.css";
import icono from "./softtech.jpeg";

export default function NavBar() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Link to="/" className="navbar-brand">
          <img className="logoTienda" src={icono} alt="Logo de la Tienda" />
        </Link>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link className="nav-link" to={"/"}>
              Inicio
            </Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <Link to="/Escaners" className="dropdown-item">
                Escaners
              </Link>
              <Link to="/Portatiles" className="dropdown-item">
                Portatiles
              </Link>
              <Link to={"/Pcescritorio"} className="dropdown-item">
                Pc de Escritorio
              </Link>
              <Link to={"/Impresoras"} className="dropdown-item">
                Impresoras
              </Link>
            </NavDropdown>
            <Link className="nav-link" to={"/preguntas"}>
              Preguntas
            </Link>
            <Link className="nav-link" to={"/contactos"}>
              Contactanos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
