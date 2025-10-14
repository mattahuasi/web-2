import { Country } from "../types/country";
import { Summary } from "../types/wikipedia";

const baseUrl = import.meta.env.VITE_WIKIPEDIA_BASE_URL;

type SummaryProps = { title: string };
type generateProps = { country: Country };

export const searchSummary = async ({
  title,
}: SummaryProps): Promise<Summary> => {
  try {
    const response = await fetch(
      `${baseUrl}/page/summary/${encodeURIComponent(title)}`
    );
    const summary = await response.json();

    return summary;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const generateSummary = ({ country }: generateProps) =>
  `${country?.translations["spa"].official} es un país ubicado en la región ${country?.region} del continente ${country?.continents[0]} con un área de ${country?.area} km² y un población de ${country?.population} personas.`;
