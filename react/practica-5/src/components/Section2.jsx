// import { ReactComponent as Css3 } from "../imagenes/css3.svg";
// import { ReactComponent as Html5 } from "../imagenes/html5.svg";
// import { ReactComponent as Js } from "../imagenes/js.svg";

import Css3 from "../imagenes/css3.svg";
import Html5 from "../imagenes/html5.svg";
import Js from "../imagenes/js.svg";

export const Section2 = () => {
  return (
    <div>
      <section id="cajas">
        <div className="contenedor">
          <div className="caja">
            {/*<img src="css3.png" alt="" />*/}
            {/* <Css3 className="App-css" /> */}
            <img src={Css3} className="App-css" alt="" />
            <h3>CSS3</h3>
            <p>
              Después de HTML5, CSS3 es el segundo lenguaje que deberías
              aprender si piensas dedicarte al diseño y desarrollo web. Aunque
              HTML5 sirve para definir la estructura, CSS3 te permite darle un
              aspecto único a tu sitio.
            </p>
          </div>
          <div className="caja">
            {/*<img src="html5.png" alt="" />*/}
            {/* <Html5 className="App-css" /> */}
            <img src={Html5} className="App-css" alt="" />

            <h3>HTML5</h3>
            <p>
              Los documentos HTML5 se encuentran estrictamente organizados. Cada
              parte del documento está diferenciada, declarada y determinada por
              etiquetas específicas, es decir implementa etiquetas semánticas,
              que por sí mismas ya tiene significado.
            </p>
          </div>
          <div className="caja">
            {/*<img src="js_logo.png" alt="" />*/}
            {/* <Js className="App-css" /> */}
            <img src={Js} className="App-css" alt="" />
            <h3>JavaScript</h3>
            <p>
              Lenguaje de secuencias de comandos que te permite crear contenido
              de actualización dinámica, multimedia, animar imágenes, etc. Es
              sorprendente lo que puedes lograr con unas pocas líneas de código
              JavaScript.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
