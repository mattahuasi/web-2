import { BaseLayout } from "../layouts/BaseLayout";

export default function About() {
  return (
    <BaseLayout>
      <section className="bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center gap-10 px-10 pt-40 lg:p-24 pb-6 lg:px-40">
        <h1 className="font-extrabold text-3xl text-center text-gray-900 dark:text-gray-50">
          Acerca del explorador de Destinos de Viaje
        </h1>

        <p className="text-gray-900 dark:text-gray-50 prose">
          <strong className="text-gray-900 dark:text-gray-50">
            Explorador de Destinos de Viaje
          </strong>{" "}
          es tu compañero ideal para descubrir los lugares más fascinantes del
          mundo. Diseñada para viajeros apasionados, esta aplicación te permite
          explorar destinos únicos con información detallada y recursos visuales
          que te inspirarán a planear tu próxima aventura.
        </p>

        <h2 className="font-extrabold text-2xl text-center text-gray-900 dark:text-gray-50">
          Funcionalidades principales
        </h2>
        <ul className="list-disc ml-8 text-gray-900 dark:text-gray-50 prose">
          <li>
            <strong className="text-gray-900 dark:text-gray-50">
              Exploración global:
            </strong>{" "}
            Utilizamos la{" "}
            <a
              className="text-purple-500 font-semibold no-underline"
              href="https://restcountries.com/"
              target="_blank"
              rel="noreferrer"
            >
              API de REST Countries
            </a>{" "}
            para brindarte acceso a una lista completa de países con información
            esencial como ubicación, población y datos culturales. información
            esencial como ubicación, población y datos culturales.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-50">
              Resumen enriquecido:
            </strong>{" "}
            Cada destino incluye un resumen informativo obtenido directamente
            desde{" "}
            <a
              className="text-purple-500 font-semibold no-underline"
              href="https://es.wikipedia.org/wiki/Wikipedia:Portada"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
            , garantizando datos precisos sobre historia, cultura y puntos de
            interés.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-50">
              Galería visual:
            </strong>{" "}
            Con imágenes de alta calidad extraídas de{" "}
            <a
              className="text-purple-500 font-semibold no-underline"
              href="https://www.pexels.com/"
              target="_blank"
              rel="noreferrer"
            >
              Pexels
            </a>
            , podrás visualizar los paisajes, monumentos y atractivos
            principales de cada destino.
          </li>
        </ul>

        <div className="bg-gray-600 h-[1px] w-full rounded-sm opacity-50"></div>

        <p className="text-gray-900 dark:text-gray-50 prose text-center">
          Con Explorador de Destinos de Viaje, planifica aventuras memorables
          con confianza y entusiasmo. ¡Comienza hoy mismo tu exploración!
        </p>
      </section>
    </BaseLayout>
  );
}
