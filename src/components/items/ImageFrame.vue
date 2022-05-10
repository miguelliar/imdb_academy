<template>
  <div class="image-frame">
    <img
      src="../../assets/movie_low.jpg"
      class="film-cover"
      alt="Default image for a film frame"
    />
    <div class="movie-data">
      <p>
        Title: {{ movieSource.primaryTitle }} - Original title:
        {{ movieSource.originalTitle }}
      </p>
      <p>Air date: {{ movieSource.startYear }}</p>
      <p>Runtime minutes: {{ movieSource.runtimeMinutes }}</p>
      <p>Genres: {{ movieSource.genres }}</p>
      <p>
        Rating: {{ movieSource.averageRating }}
        <i class="fas fa-star" aria-hidden="true"></i>
      </p>
    </div>
  </div>
</template>

<script>
import { filmProject } from "@/store/FilmFormat";

export default {
  name: "ImageFrame",
  props: {
    movie: filmProject,
  },
  computed: {
    movieId() {
      return this.movie.id;
    },
    movieSource() {
      return this.movie.source;
    },
  },
};
</script>

<style scoped>
.film-cover {
  border-radius: 10px;
  margin-top: 10px;
}
.movie-data {
  visibility: hidden;
  position: absolute;
}
</style>
