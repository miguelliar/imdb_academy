import { createStore } from "vuex";
import { FilmFormat } from "@/store/FilmFormat";
import {
  fetchURL,
  pagination,
  plainSearch,
  searchQuery,
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
      context.commit("setSearchedFilms", await fetchURL(url));
      context.commit("setCurrentSearch", url);
      context.commit("setBeginningPage");
    },
    searchFrontPage(context) {
      context.dispatch("defaultSearch", plainSearch);
    },
    searchTitle(context, title: string) {
      if (title.trim().length === 0) {
        context.dispatch("searchFrontPage");
      } else {
        context.dispatch("defaultSearch", searchQuery + title);
      }
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
