import { createStore } from "vuex";
import { filmFormat } from "@/store/FilmFormat";

export default createStore({
  state: {
    searchedFilms: [filmFormat],
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
  },
  actions: {
    searchFilm(context, url) {
      return fetch(url)
        .then((data) => data.json())
        .then((result) => context.commit("setSearchedFilms", result))
        .catch((err) => console.log(err));
    },
    searchFrontPage(context) {
      return context.dispatch("searchFilm", "http://localhost:8080/api/search");
    },
  },
  modules: {},
});
