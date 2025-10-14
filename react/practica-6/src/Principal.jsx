import { Link } from "react-router-dom";

export default function Principal() {
  return (
    <>
      <header>
        <h1>Empresa SoftTech s.r.l</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/contactanos">Contactanos</Link>
          </li>
          <li>
            <Link to="/registrate">Registrate</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
