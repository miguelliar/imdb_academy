<template>
  <div class="movie-item">
    <p class="main-data">
      Title: {{ movie.source.primaryTitle }} - {{ movie.source.startYear }}
    </p>
    <p class="rating">Rating: {{ movie.source.averageRating }}</p>
  </div>
</template>

<script>
import { filmFormat } from "@/store/FilmFormat";

export default {
  name: "MovieItem",
  props: {
    movie: filmFormat,
  },
};
</script>

<style scoped>
.movie-item {
  background: aquamarine;
}
</style>
