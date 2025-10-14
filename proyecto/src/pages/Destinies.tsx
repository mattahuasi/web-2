import { ErrorCard } from "../components/ErrorCard";
import { FeatureCard } from "../components/FeatureCard";
import { Loader } from "../components/Loader";
import { OutlinedButton } from "../components/OutlineButton";
import { useCountries } from "../hooks/useCountries";
import { BaseLayout } from "../layouts/BaseLayout";

const LIMIT = 250;
const STEP = 15;

export default function Destinies() {
  const { currentCountries, loading, error, fetchMoreCountries } = useCountries(
    {
      offset: 0,
      step: STEP,
    }
  );

  const loadMore = async () => {
    if (currentCountries.length >= LIMIT) return;

    const offset = currentCountries.length;
    const step = Math.min(STEP, LIMIT - offset);
    fetchMoreCountries({ offset, step: offset + step });
  };

  return (
    <BaseLayout>
      <section className="flex flex-col justify-center items-center gap-10 px-10  pt-40 lg:p-24 pb-6 bg-gray-50 dark:bg-gray-900 lg:px-40">
        <h1 className="font-extrabold text-3xl text-center text-gray-900 dark:text-gray-50">
          Explora todos los destinos
        </h1>

        {loading && (
          <div className="h-screen">
            <Loader />
          </div>
        )}

        {error && (
          <div className="h-screen flex flex-col justify-center items-center">
            <ErrorCard error={error || new Error("No se puedo cargar")} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {currentCountries?.map((country) => (
            <FeatureCard
              key={country?.data?.name?.common}
              title={country?.data?.translations["spa"]?.official}
              description={country?.extract}
              flag={country?.data?.flag}
              path={country?.data?.name?.common}
              photo={
                country?.pexels?.photos[5]?.src?.landscape ||
                country?.data?.flags?.svg
              }
            />
          ))}
        </div>

        {currentCountries.length < LIMIT && (
          <OutlinedButton onClick={loadMore} label="Cargar mas destinos" />
        )}
      </section>
    </BaseLayout>
  );
}
