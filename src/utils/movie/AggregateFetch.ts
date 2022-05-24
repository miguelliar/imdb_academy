import { fetchURL } from "@/utils/FetchMethods";
import { baseUrl } from "@/utils/movie/MovieFetch";

//Aggregate for values of filters
const genresSearch = "?agg=genres";
const titleTypeSearch = "?agg=titleType";

export async function fetchGenres() {
  return fetchURL(baseUrl + genresSearch);
}

export async function fetchFilmTypes() {
  return fetchURL(baseUrl + titleTypeSearch);
}
