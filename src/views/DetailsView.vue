<template>
  <div class="movie-page">
    <h1>{{ movieData.source.primaryTitle }}</h1>
    <img
      :src="
        movieData.additionalInformation.Poster === noPoster
          ? movieCover
          : movieData.additionalInformation.Poster
      "
      :alt="'Poster of movie ' + this.movieData.source.primaryTitle"
    />
    <div class="movie-details">
      <p>{{ movieData.additionalInformation.Plot }}</p>
      <p>Type: {{ movieData.source.titleType }}</p>
      <p>Original title: {{ movieData.source.originalTitle }}</p>
      <p>Air date: {{ movieData.source.startYear }}</p>
      <p>Runtime minutes: {{ movieData.source.runtimeMinutes }}</p>
      <p>Genres: {{ movieData.source.genres }}</p>
      <p>Average rating: {{ movieData.source.averageRating }}</p>
    </div>
    <Recommendations></Recommendations>
  </div>
</template>

<script>
import { filmProject } from "@/store/FilmFormat";
import { emptyPoster, fetchAdditionalInformation } from "@/utils/PosterFetch";

import moviePoster from "@/assets/movie_low.jpg";
import { fetchFilm } from "@/utils/movie/MovieFetch";

export default {
  name: "ResourceView",
  data: function () {
    return {
      movieData: filmProject,
      movieCover: moviePoster,
      noPoster: emptyPoster,
    };
  },
  methods: {
    async computeMovie(id) {
      this.movieData = await fetchFilm(id);
      this.movieData.additionalInformation = await fetchAdditionalInformation(
        id
      );
    },
  },
  beforeMount() {
    this.computeMovie(this.$route.params.id);
  },
};
</script>

<style scoped>
h1 {
  grid-area: title;
}
img {
  grid-area: img;
  padding-bottom: 30px;
}
.movie-details {
  grid-area: details;
  text-align: left;
  padding: 5%;
  background-color: var(--dark-color-transparent);
  box-shadow: inset 0px 0px 20px 20px var(--background-dark-color);
}
.movie-page {
  display: grid;
  grid-template-areas:
    " title title title title"
    " . img details ."
    " . img . .";
  justify-content: space-evenly;
}
</style>
