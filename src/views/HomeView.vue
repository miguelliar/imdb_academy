<template>
  <div class="home">
    <div class="header">
      <h1>IMDB Academy Webpage</h1>
      <MovieSearch />
    </div>
    <MovieList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieList from "@/components/MovieList.vue"; // @ is an alias to /src
import { mapActions } from "vuex";
import MovieSearch from "@/components/search/MovieSearch.vue";

@Options({
  components: {
    MovieSearch,
    MovieList,
  },
  name: "HomeView",
  methods: {
    ...mapActions(["searchFrontPage"]),
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
</style>
