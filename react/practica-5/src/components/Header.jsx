export const Header = () => {
  return (
    <div>
      <header>
        <div className="contenedor">
          <div id="marca">
            <h1>
              <span className="resaltado">WebSite</span>Desarrollo Integrado de
              Sitios Web
            </h1>
          </div>
          <nav>
            <ul>
              <li className="actual">
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="nosotros.html">Antecedentes</a>
              </li>
              <li>
                <a href="servicios.html">Servicios</a>
              </li>
              <li>
                <a href="contacto.html">Contactanos</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
