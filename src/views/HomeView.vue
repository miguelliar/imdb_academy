<template>
  <head>
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
  </head>
  <div class="home">
    <h1>Welcome to IMDB Academy Webpage</h1>
    <MovieSearch />
    <MovieList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieList from "@/components/MovieList.vue"; // @ is an alias to /src
import { mapActions } from "vuex";
import MovieSearch from "@/components/MovieSearch.vue";

@Options({
  components: {
    MovieSearch,
    MovieList,
  },
  name: "HomeView",
  methods: {
    ...mapActions(["searchFilm"]),
  },
  created() {
    this.searchFilm("http://localhost:8080/api/search");
  },
})
export default class HomeView extends Vue {}
</script>
