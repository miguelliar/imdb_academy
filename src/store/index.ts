import { createStore } from "vuex";
import { FilmFormat } from "@/store/FilmFormat";
import {
  fetchAdditionalInformation,
  fetchURL,
  genresFilterQuery,
  pagination,
  plainSearch,
  titleFilterQuery,
  typeFilterQuery,
} from "@/store/FetchMethods";

export default createStore({
  state: {
    searchedFilms: [] as FilmFormat[],
    from: 0,
    size: 10,
    currentSearch: "",
  },
  getters: {
    searchedFilms(state) {
      return state.searchedFilms;
    },
  },
  mutations: {
    setSearchedFilms(state, listOfFilms) {
      state.searchedFilms = listOfFilms;
    },
    addListOfFilms(state, listOfFilms) {
      state.searchedFilms = [state.searchedFilms, ...listOfFilms];
    },
    setCurrentSearch(state, search) {
      state.currentSearch = search;
    },
    setNextPage(state) {
      state.from = state.from + state.size;
    },
    setBeginningPage(state) {
      state.from = 0;
    },
  },
  actions: {
    async defaultSearch(context, url: string) {
      const films: FilmFormat[] = await fetchURL(url);
      for (const film of films) {
        film.additionalInformation = await fetchAdditionalInformation(film.id);
      }
      console.log(films);
      context.commit("setSearchedFilms", films);
      context.commit("setCurrentSearch", url);
      context.commit("setBeginningPage");
    },
    searchFrontPage(context) {
      context.dispatch("defaultSearch", plainSearch);
    },
    searchFilm(
      context,
      params: {
        searchInput: string;
        genresFilters: string[];
        typeFilters: string[];
      }
    ) {
      context.dispatch(
        "defaultSearch",
        `${plainSearch}${titleFilterQuery(
          params.searchInput
        )}${genresFilterQuery(params.genresFilters)}${typeFilterQuery(
          params.typeFilters
        )}`
      );
    },
    nextPage(context) {
      context.commit("setNextPage");
      const state = context.state;
      context.commit(
        "addListOfFilms",
        fetchURL(state.currentSearch + pagination(state.from, state.size))
      );
    },
  },
  modules: {},
});
