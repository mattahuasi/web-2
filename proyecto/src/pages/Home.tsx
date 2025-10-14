import { useState } from "react";
import { CircleOverlay } from "../components/CircleOverlay";
import { ContentCard } from "../components/ContentCard";
import { ErrorCard } from "../components/ErrorCard";
import { FeatureCard } from "../components/FeatureCard";
import { Loader } from "../components/Loader";
import { OutlinedLink } from "../components/OutlinedLink";
import { TiltedImage } from "../components/TiltedImage";
import { randomNumber } from "../helpers/helpers";
import { useCountries, useRandomCountry } from "../hooks/useCountries";
import { BaseLayout } from "../layouts/BaseLayout";
import { OffsetType } from "../types";

export default function Home() {
  const {
    country,
    loading: loadingCountry,
    error: errorCountry,
  } = useRandomCountry();
  const randomIndex = randomNumber({ x: 0, y: 244 });
  const [randomOffset] = useState<OffsetType>({
    offset: randomIndex,
    step: randomIndex + 6,
  });

  const {
    countries,
    loading: loadingCountries,
    error: errorCountries,
  } = useCountries(randomOffset);

  return (
    <BaseLayout>
      <section className="relative bg-gray-50 dark:bg-gray-900">
        <div className="relative min-h-dvh overflow-clip">
          <CircleOverlay
            side="450px"
            top="-80px"
            right="-55px"
            bottom="auto"
            left="auto"
            backgroundColor="#8c30f5"
            opacity="0.5"
          />
          <CircleOverlay
            side="70px"
            top="40%"
            right="auto"
            bottom="auto"
            left="20%"
            backgroundColor="#ffc278"
            opacity="1"
          />
          <CircleOverlay
            side="70px"
            top="70%"
            right="auto"
            bottom="auto"
            left="65%"
            backgroundColor="#75e3ea"
            opacity="1"
          />

          {loadingCountry && (
            <div className="h-screen flex flex-col justify-center items-center">
              <Loader />
            </div>
          )}
          {errorCountry && (
            <div className="h-screen flex flex-col justify-center items-center">
              <ErrorCard
                error={errorCountries || new Error("No se puedo cargar")}
              />
            </div>
          )}

          <div className="absolute flex flex-col lg:flex-row justify-center items-center gap-1 top-44 lg:px-40 lg:top-32 lg:justify-between mx-10">
            {country && (
              <>
                <ContentCard
                  countryName={country?.data?.translations["spa"].official}
                  extract={country?.extract}
                  path={country?.data?.name.common}
                />
                <TiltedImage
                  src={
                    country?.pexels?.photos[5]?.src?.landscape ||
                    country?.data?.flags?.svg
                  }
                  alt={
                    country?.pexels.photos[0]?.alt ||
                    `Bandera de ${country?.data?.name?.common}`
                  }
                  photographer={
                    country?.pexels.photos[0]?.photographer ||
                    `Bandera de ${country?.data?.name?.common}`
                  }
                />
              </>
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 bg-gray-50 dark:bg-gray-900 px-10 lg:px-40 py-10">
        <h2 className="text-gray-900 dark:text-gray-50 text-2xl lg:text-3xl font-bold text-center">
          Algunos de los destinos sugeridos
        </h2>

        {loadingCountries && (
          <div className="h-screen flex flex-col justify-center items-center">
            <Loader />
          </div>
        )}
        {errorCountries && (
          <div className="h-screen flex flex-col justify-center items-center">
            <ErrorCard
              error={errorCountry || new Error("No se puedo cargar")}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {country &&
            countries?.map((country) => (
              <FeatureCard
                key={country?.data.name.common}
                title={country?.data.translations["spa"].official}
                description={country.extract}
                flag={country?.data.flag}
                path={country?.data?.name.common}
                photo={
                  country?.pexels?.photos[5]?.src?.landscape ||
                  country?.data?.flags?.svg
                }
              />
            ))}
        </div>

        <OutlinedLink />
      </section>
    </BaseLayout>
  );
}
