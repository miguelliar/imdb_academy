//Endpoint for searching posters
import { fetchURL } from "@/utils/FetchMethods";

export const imageSearch = (id: string) =>
  `http://www.omdbapi.com/?i=${id}&apikey=c13e24cd`;
//TODO: Extraer en variable de entorno api key --> .env

export const emptyPoster = "";
//Default value for description
const defaultPlot = "There description is unavailable";

//Returns true if the response is correct
const checkResponseAvailable = (response: {
  Response: string;
  Poster: string;
}) => response && response["Response"] === "True";

//Returns the cover path
const coverPath = (response: { Poster: string }) =>
  response["Poster"] && response["Poster"] !== "N/A"
    ? response["Poster"]
    : emptyPoster;

//Returns the description
const plotContent = (response: { Plot: string }) =>
  response["Plot"] && response["Plot"] !== "N/A"
    ? response["Plot"]
    : defaultPlot;

/**
 * Returns an object with the Poster and the Plot.
 * If the returned information from the fetch is
 * empty in any of those two cases the default behaviour will be:
 * Plot: ""
 * Poster: "There description is unavailable"
 * @param id of the film
 */
export async function fetchAdditionalInformation(id: string) {
  const returned = await fetchURL(imageSearch(id));
  if (
    // Extraer toda la condición en una función
    checkResponseAvailable(returned)
  ) {
    return { Plot: plotContent(returned), Poster: coverPath(returned) };
  } else {
    return { Plot: defaultPlot, Poster: emptyPoster };
  }
}
