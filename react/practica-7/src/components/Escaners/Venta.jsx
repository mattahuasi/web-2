export default function VentaEscaner() {
  return (
    <div>
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 16,
          }}
        >
          Formulario de Compra
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            padding: 32,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <label
              htmlFor="direccion"
              style={{ fontWeight: 500, fontSize: 14, opacity: 0.7 }}
            >
              Direccion
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>

      <a href="/" data-mdb-ripple-init className="btn btn-warning">
        Volver a la pagina Principal
      </a>
    </div>
  );
}
