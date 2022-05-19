<template>
  <div class="home">
    <div class="header">
      <h1>IMDB Academy Webpage</h1>
      <MovieSearch />
    </div>
    <MovieList />
    <NotFounded v-show="searchedFilms.length === 0"></NotFounded>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieList from "@/components/MovieList.vue"; // @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import MovieSearch from "@/components/search/MovieSearch.vue";
import NotFounded from "@/components/NotFounded.vue";

@Options({
  components: {
    NotFounded,
    MovieSearch,
    MovieList,
  },
  name: "HomeView",
  methods: {
    ...mapActions(["searchFrontPage"]),
    ...mapGetters(["searchedFilms"]),
  },
  created() {
    this.searchFrontPage();
  },
})
export default class HomeView extends Vue {}
</script>

<style>
.header {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  margin-bottom: 30px;
}

.header > * {
  grid-column-start: 2;
  grid-column-end: 2;
}

.header > h1 {
  font-size: xxx-large;
}

NotFounded {
  margin-bottom: 100px;
}
</style>
