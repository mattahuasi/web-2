import Img1 from "../imagenes/imagen1.jpg";
import Img2 from "../imagenes/imagen2.jpg";
import Img3 from "../imagenes/imagen3.jpg";
import Image from "./Image";

export const Section = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              //Uso de los PRODS
              src={Img1}
              className="img-circle"
              alt="..."
              width="500"
              height="300"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={Img2}
              className="img-circle"
              alt="..."
              width="500"
              height="300"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={Img3}
              className="img-circle"
              alt="..."
              width="500"
              height="300"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
