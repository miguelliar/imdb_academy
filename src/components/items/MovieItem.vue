<template>
  <div class="movie-item">
    <ImageFrame :movie="movie"></ImageFrame>
    <p class="main-data">
      {{ movieSource.primaryTitle }} - {{ movieSource.startYear }}
    </p>
    <p class="rating">
      {{ movieSource.averageRating }}
      <i class="fas fa-star" aria-hidden="true"></i>
    </p>
  </div>
</template>

<script>
import { filmProject } from "@/store/FilmFormat";
import ImageFrame from "@/components/items/ImageFrame";

export default {
  name: "MovieItem",
  components: { ImageFrame },
  props: {
    movie: filmProject,
  },
  computed: {
    movieSource() {
      return this.movie.source;
    },
  },
};
</script>

<style scoped>
.movie-item {
  background: var(--dark-color);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}
.rating {
  margin-top: -15px;
}

.movie-item:hover >>> img {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.movie-item:hover :deep(.movie-data) {
  position: relative; /*static*/
  display: inline-block;
  visibility: visible;
}
</style>
