<template>
  <div class="image-frame">
    <img
      :src="movieAdditional.Poster"
      class="film-cover"
      :alt="'Film cover of ' + movieSource.primaryTitle"
    />
    <div class="movie-data">
      <p class="film-title">Title: {{ movieSource.primaryTitle }}</p>
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
  data() {
    return {
      movieCover: require("../../assets/movie_low.jpg"),
    };
  },
  props: {
    movie: filmProject,
  },
  computed: {
    movieSource() {
      return this.movie.source;
    },
    movieAdditional() {
      return this.movie.additionalInformation;
    },
  },
};
</script>

<style scoped>
img {
  transition: 1s;
  max-width: 100%;
  max-height: 100%;
}
.film-title {
  font-weight: bold;
}
.film-cover {
  border-radius: 10px;
  margin-top: 10px;
}
.movie-data {
  visibility: hidden;
  position: absolute;
  text-align: left;
  left: 5%;
  top: 5%;
}
</style>
