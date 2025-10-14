import "../App.css"; //import “../styles.css”

export const Section1 = () => {
  return (
    <div>
      <section id="boletin">
        <div className="contenedor">
          <h5>Envianos tus sugerencias indicando tu correo electronico en:</h5>
          <form>
            <input type="email" placeholder="Ingrese el Email..." />
            <button type="submit" className="boton1">
              Subscríbete
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
