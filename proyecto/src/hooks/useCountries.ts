import { useEffect, useState } from "react";
import {
  getCountries,
  getCountriesSpanishNames,
  getCountry,
  getRandomCountry,
} from "../services/countries";
import { CountryData, CountrySpanishNames, OffsetType } from "../types";

export const useCountries = ({ offset, step }: OffsetType) => {
  const [countries, setCountries] = useState<CountryData[] | null>(null);
  const [currentCountries, setCurrentCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getCountries({ offset, step });
        setCountries(response);
        setCurrentCountries(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [offset, step]);

  const fetchMoreCountries = async ({ offset, step }: OffsetType) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getCountries({ offset, step });

      setCurrentCountries((prevCountries) => [...prevCountries, ...response]);
      setCountries(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { countries, currentCountries, loading, error, fetchMoreCountries };
};

export const useCountry = ({ countryName }: { countryName: string }) => {
  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getCountry({ countryName });
        setCountry(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryName]);

  return { country, loading, error };
};

export const useRandomCountry = () => {
  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getRandomCountry();
        setCountry(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return { country, loading, error };
};

export const useCountriesSpanishNames = () => {
  const [countriesSpanishNames, setCountriesSpanishNames] = useState<
    CountrySpanishNames[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountriesSpanishNames = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getCountriesSpanishNames();
        setCountriesSpanishNames(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountriesSpanishNames();
  }, []);

  return { countriesSpanishNames, loading, error };
};
