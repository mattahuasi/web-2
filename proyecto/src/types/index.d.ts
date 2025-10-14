import { Country } from "./country";
import { Image } from "./pexels";

export type CountryData = {
  data: Country;
  extract: string;
  pexels: Image;
};

export type OffsetType = { offset: number; step: number };

export type CountrySpanishNames = {
  query: string;
  common: string;
  official: string;
};
