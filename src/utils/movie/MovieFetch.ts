import { RouteParamValue } from "vue-router";
import { fetchURL } from "@/utils/FetchMethods";
import {
  genresFilterQuery,
  pagination,
  plainSearch,
  titleFilterQuery,
  typeFilterQuery,
} from "@/utils/movie/FiltersFetch";

export const baseUrl = "http://localhost:8080";
export const idSearch = (id: string | RouteParamValue[]) =>
  `/api/id_search?id=${id}`;

export function filmsURL(
  searchInput: string,
  genresFilters: string[] = [],
  typeFilters: string[] = []
) {
  return (
    baseUrl +
    plainSearch +
    titleFilterQuery(searchInput) +
    genresFilterQuery(genresFilters) +
    typeFilterQuery(typeFilters)
  );
}

export async function fetchFilm(id: string) {
  return await fetchURL(idSearch(id));
}

export async function fetchNextPage(url: string, from: number, size: number) {
  return await fetch(url + pagination(from, size));
}
