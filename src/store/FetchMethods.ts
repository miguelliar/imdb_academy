//---------------------CONSTANTS-----------------------------
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

//---------------------METHODS-----------------------------

export async function fetchURL(url: string) {
  return await fetch(url).then((data) => data.json());
}

export async function fetchCover(id: string) {
  const returned = await fetchURL(imageSearch(id));
  if (
    returned !== undefined &&
    returned["Response"] === "True" &&
    returned["Poster"] !== "N/A"
  ) {
    console.log(returned);
    return returned["Poster"];
  } else {
    return require("../assets/movie_low.jpg");
  }
}

export async function fetchGenres() {
  return fetchURL(genresSearch);
}

export async function fetchFilmTypes() {
  return fetchURL(titleTypeSearch);
}
