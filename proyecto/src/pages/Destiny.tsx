import { useParams } from "react-router";
import { ErrorCard } from "../components/ErrorCard";
import { FlagCard } from "../components/FlagCard";
import { ImageGallery } from "../components/ImageGallery";
import { Loader } from "../components/Loader";
import { useCountry } from "../hooks/useCountries";
import { BaseLayout } from "../layouts/BaseLayout";
import { Photo } from "../types/pexels";

export default function Destiny() {
  const countryName = useParams().name || "Cargando...";
  const { country, loading, error } = useCountry({ countryName });

  return (
    <BaseLayout>
      <section className="realtive">
        <div className="relative min-h-dvh flex flex-col justify-center items-center overflow-clip bg-gray-50 dark:bg-gray-900">
          {loading && (
            <div className="h-screen flex flex-col justify-center items-center">
              <Loader />
            </div>
          )}
          {error && (
            <div className="h-screen flex flex-col justify-center items-center">
              <ErrorCard error={error || new Error("No se puedo cargar")} />
            </div>
          )}

          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center brightness-50">
            {country?.pexels.photos[0].src.landscape && (
              <img
                className="w-full h-full object-cover"
                src={
                  country?.pexels.photos[0].src.landscape ||
                  country?.data?.flags?.svg
                }
                alt={
                  country?.pexels.photos[0].alt ||
                  `Bandera de ${country?.data?.name?.common}`
                }
              />
            )}
          </div>

          <article className="absolute px-10 py-40">
            <h1 className="font-extrabold text-4xl text-center text-gray-50 mb-6">
              {country?.data?.name.common}
            </h1>
            {!loading && (
              <>
                <p className="text-gray-50 prose">
                  ¡Descubre {country?.data?.name.common} en en la región de{" "}
                  {country?.data?.region}, este país sorprende por su rica
                  diversidad cultural y natural. Con una población de
                  aproximadamente {country?.data?.population} habitantes,{" "}
                  {country?.data?.translations["spa"].official} es un lugar
                  donde la tradición y la modernidad se entrelazan
                  armoniosamente.
                </p>

                {/* <p className="text-gray-50 prose">
                  Algunos idiomas que se habla aqui son{" "}
                  {Object.values(
                    country?.data?.languages ?? { noFound: "No se encontró" }
                  ).join(", ")}
                  , lo que te permitirá sumergirte en la autenticidad del país
                  mientras te conectas con los amables locales.
                  Además, la
                  moneda, el{" "}
                  {Object.values(
                    country?.data?.currencies ?? { noFound: "No se encontró" }
                  )
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(", ")}
                  , te facilitará explorar su economía y disfrutar de su
                  vibrante mercado local.
                </p> */}
                <p className="text-gray-50 prose">
                  Ya sea que busques aventuras o prefieras explorar la historia
                  y cultura, {country?.data?.name.common} es el destino
                  perfecto. ¡Empaca tus maletas y vive una experiencia
                  inolvidable!
                </p>
              </>
            )}
          </article>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 bg-gray-50 dark:bg-gray-900 px-10 lg:px-40 py-10">
        <h2 className="text-gray-900 dark:text-gray-50 text-2xl lg:text-3xl font-bold text-center">
          Acerca de {country?.data?.name.common}
        </h2>

        {loading && (
          <div className="h-screen flex flex-col justify-center items-center">
            <Loader />
          </div>
        )}

        <p className="text-gray-900 dark:text-gray-50 prose">
          {country?.extract}
        </p>

        <h2 className="text-gray-900 dark:text-gray-50 text-2xl lg:text-3xl font-bold text-center">
          Datos relevantes
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <ul className="list-none text-gray-900 dark:text-gray-50 prose">
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Nombre común:
              </strong>{" "}
              {country?.data?.name.common}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Nombre oficial:
              </strong>{" "}
              {country?.data?.name.official}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Capital:
              </strong>{" "}
              {country?.data?.capital?.[0]}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Continente:
              </strong>{" "}
              {country?.data?.continents?.[0]}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Población:
              </strong>{" "}
              {country?.data?.population.toLocaleString()}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">Área:</strong>{" "}
              {country?.data?.area} km²
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Idiomas:
              </strong>{" "}
              {Object.values(country?.data?.languages || {}).join(", ")}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Moneda:
              </strong>{" "}
              {Object.values(
                country?.data?.currencies ?? { noFound: "No se encontró" }
              )
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(", ")}
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-50">
                Países vecinos:
              </strong>{" "}
              {country?.data?.borders?.length
                ? country.data.borders.join(", ")
                : "Sin fronteras terrestres"}
            </li>
            <li className="text-center">
              <a
                className="text-purple-500 font-semibold no-underline"
                href={country?.data?.maps.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                Ver en Google Maps
              </a>
            </li>
          </ul>

          <FlagCard
            countryName="Bandera oficial"
            flag={country?.data.flags.svg ?? "Cargando..."}
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 bg-gray-50 dark:bg-gray-900 px-10 lg:px-40 py-10">
        <h2 className="text-gray-900 dark:text-gray-50 text-2xl lg:text-3xl font-bold text-center">
          Algunas imagenes destacadas
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {country?.pexels.photos.slice(1, 10).map((photo: Photo) => (
            <ImageGallery
              src={photo?.src?.landscape || country?.data?.flags?.svg}
              alt={photo?.alt || `Bandera de ${country?.data?.name?.common}`}
              photographer={
                photo?.photographer ||
                `Bandera de ${country?.data?.name?.common}`
              }
            />
          ))}
        </div>

        <p className="text-gray-900 dark:text-gray-50 text-center">
          Elige{" "}
          <span className="text-purple-500">{country?.data?.name.common}</span>{" "}
          como tu proximo destino.
        </p>
      </section>
    </BaseLayout>
  );
}
