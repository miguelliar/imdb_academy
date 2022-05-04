<template>
  <div class="movie-table">
    <MovieItem
      v-for="movie in searchedFilms"
      :key="movie.primaryTitle"
      :movie="movie"
    >
    </MovieItem>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import MovieItem from "@/components/MovieItem.vue";

export default {
  name: "MovieList",
  components: { MovieItem },
  computed: {
    ...mapGetters(["searchedFilms"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-table {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
