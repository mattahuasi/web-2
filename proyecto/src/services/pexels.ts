import { Pexels } from "../types/pexels";

const baseUrl = import.meta.env.VITE_PEXELS_BASE_URL;
const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

type PexelsProps = { query: string };

export const searchImage = async ({ query }: PexelsProps): Promise<Pexels> => {
  const querySettings =
    "&category=photography&orientation=landscape&size=large&page=1&per_page=10";
  try {
    const response = await fetch(
      `${baseUrl}/search?query=${encodeURIComponent(query)}${querySettings}`,
      { headers: { Authorization: apiKey }, mode: "cors" }
    );
    const photos: Pexels = await response.json();

    return photos;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const NotFoundImage: Pexels = {
  page: 0,
  per_page: 0,
  photos: [],
  total_results: 0,
  next_page: "",
};
