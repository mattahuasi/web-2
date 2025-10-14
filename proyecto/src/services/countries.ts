import { randomNumber } from "../helpers/helpers";
import { CountryData, CountrySpanishNames, OffsetType } from "../types";
import { Country } from "../types/country";
import { NotFoundImage, searchImage } from "./pexels";
import { generateSummary, searchSummary } from "./wikipedia";

const baseUrl = import.meta.env.VITE_RESTCOUNTRIES_BASE_URL;

export const getCountries = async ({
  offset,
  step,
}: OffsetType): Promise<CountryData[]> => {
  try {
    const response = await fetch(`${baseUrl}/all`);
    const countries: Country[] = await response.json();

    const data: CountryData[] = await Promise.all(
      countries.slice(offset, step).map(async (country: Country) => {
        const countryNameInSpanish = getCountryNameInSpanish(country);

        const summary = await searchSummary({
          title: countryNameInSpanish,
        });

        const pexels =
          (await searchImage({
            query: countryNameInSpanish,
          })) || NotFoundImage;

        return {
          data: country,
          extract: summary.extract || generateSummary({ country }),
          pexels,
        };
      })
    );

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getCountry = async ({
  countryName,
}: {
  countryName: string;
}): Promise<CountryData> => {
  try {
    const response = await fetch(`${baseUrl}/name/${countryName}`);
    const country = await response.json();

    const countryNameInSpanish = getCountryNameInSpanish(country[0]);

    const summary =
      (await searchSummary({
        title: countryNameInSpanish,
      })) || generateSummary({ country });
    const pexels =
      (await searchImage({ query: countryNameInSpanish })) || NotFoundImage;

    return { data: country[0], extract: summary.extract, pexels };
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getRandomCountry = async (): Promise<CountryData> => {
  try {
    const response = await fetch(`${baseUrl}/all`);
    const countries: Country[] = await response.json();

    const randomIndex = randomNumber({ x: 0, y: countries.length });
    const country: Country = countries[randomIndex];

    const countryNameInSpanish = getCountryNameInSpanish(country);

    const summary =
      (await searchSummary({
        title: countryNameInSpanish,
      })) || generateSummary({ country });
    const pexels =
      (await searchImage({ query: countryNameInSpanish })) || NotFoundImage;

    return { data: country, extract: summary.extract, pexels };
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getCountriesSpanishNames = async (): Promise<
  CountrySpanishNames[]
> => {
  try {
    const response = await fetch(`${baseUrl}/all`);
    const countries: Country[] = await response.json();

    return countries.map((country) => ({
      query: country.name.common,
      common: country.translations?.["spa"]?.common,
      official: country.translations?.["spa"]?.official,
    }));
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const getCountryNameInSpanish = (country: Country) =>
  country.translations?.["spa"]?.common || country.name.common;
