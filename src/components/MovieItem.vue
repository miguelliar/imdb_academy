<template>
  <div class="movie-item">
    <img src="../assets/movie_low.jpg" class="film-cover" />
    <div class="image-frame">
      <div class="movie-data">
        <p>
          Title: {{ movie.source.primaryTitle }} - Original title:
          {{ movie.source.originalTitle }}
        </p>
        <p>Air date: {{ movie.source.startYear }}</p>
        <p>Runtime minutes: {{ movie.source.runtimeMinutes }}</p>
        <p>Genres: {{ movie.source.genres }}</p>
        <p>
          Rating: {{ movie.source.averageRating }}
          <i class="fas fa-star" aria-hidden="true"></i>
        </p>
      </div>
    </div>
    <p class="main-data">
      {{ movie.source.primaryTitle }} - {{ movie.source.startYear }}
    </p>
    <p class="rating">
      {{ movie.source.averageRating }}
      <i class="fas fa-star" aria-hidden="true"></i>
    </p>
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
  background: #40363c;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}
.film-cover {
  border-radius: 10px;
  margin-top: 10px;
}
.movie-data {
  visibility: hidden;
  position: absolute;
}
.rating {
  margin-top: -15px;
}

.movie-item:hover > img {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.movie-item:hover > .movie-data {
  position: relative; /*static*/
  display: inline-block;
  visibility: visible;
}
</style>
