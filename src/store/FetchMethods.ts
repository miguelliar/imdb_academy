//---------------------CONSTANTS-----------------------------
// ------------URL-------------
//Fetch URL base
export const plainSearch = "http://localhost:8080/api/search?";
export const imageSearch = (id: string) =>
  `http://www.omdbapi.com/?i=${id}&apikey=c13e24cd`;

//Aggregate for values of filters
const genresSearch = "?agg=genres";
const titleTypeSearch = "?agg=titleType";

//Pagination
export const pagination: (a: number, b: number) => string = (
  from: number,
  size: number
) => `?from=${from}&size=${size}`;

//Search parameters
export const titleFilterQuery = (title: string) =>
  title === undefined || title.trim().length === 0 ? "" : `&q=${title}`;

//Returns the selector for the genre query
export const genresFilterQuery = (genres: string[]) =>
  genres == undefined
    ? ""
    : genres.reduce((res, genre) => res + `&genre=${genre}`, "");

//Returns the selector for the type query
export const typeFilterQuery = (types: string[]) =>
  types == undefined
    ? ""
    : types.reduce((res, type) => res + `&type=${type}`, "");

// ------------Object-------------
//Default value for cover path
const defaultCoverPath = "../assets/movie_low.jpg";
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
    : require(defaultCoverPath);

//Returns the description
const plotContent = (response: { Plot: string }) =>
  response["Plot"] && response["Plot"] !== "N/A"
    ? response["Plot"]
    : defaultPlot;

//---------------------METHODS-----------------------------

export async function fetchURL(url: string) {
  return await fetch(url).then((data) => data.json());
}

export async function fetchAdditionalInformation(id: string) {
  const returned = await fetchURL(imageSearch(id));
  if (
    // Extraer toda la condición en una función
    checkResponseAvailable(returned)
  ) {
    return { Plot: plotContent(returned), Poster: coverPath(returned) };
  } else {
    return { Plot: defaultPlot, Poster: require(defaultCoverPath) };
  }
}

export async function fetchGenres() {
  return fetchURL(genresSearch);
}

export async function fetchFilmTypes() {
  return fetchURL(titleTypeSearch);
}
