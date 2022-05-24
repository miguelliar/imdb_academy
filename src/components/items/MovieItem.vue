<template>
  <div
    class="movie-item"
    @click="$router.push({ path: `/details/${movie.id}` })"
  >
    <ImageFrame :movie="movie" />
    <div class="movie-footer">
      <p class="main-data">
        {{ movieSource.primaryTitle }} - {{ movieSource.startYear }}
      </p>
      <p class="rating">
        {{ movieSource.averageRating }}
        <i class="fas fa-star" aria-hidden="true"></i>
      </p>
    </div>
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
router-link p {
  text-decoration: none;
  color: var(--bright-color);
}
.movie-item {
  position: relative;
  background: var(--dark-color-transparent);
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 10px;
}
.rating {
  margin-top: -15px;
}

.movie-item:hover :deep(img) {
  filter: blur(8px) brightness(20%);
  -webkit-filter: blur(8px) brightness(20%);
}

.movie-item:hover :deep(.movie-data) {
  position: absolute;
  width: auto;
  display: block;
  visibility: visible;
  opacity: 80%;
}
</style>
