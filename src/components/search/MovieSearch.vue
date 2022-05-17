<template>
  <div class="search-container" @click="this.$refs.search_title.focus()">
    <input
      type="text"
      name="search"
      ref="search_title"
      placeholder="Search any
    movie..."
      class="search-txt"
      v-model="searchInput"
    />
    <a
      @click="searchFilm({ searchInput, genresFilters, typeFilters })"
      class="search-btn"
    >
      <i class="fas fa-search"></i>
    </a>
  </div>
  <div class="search-filters">
    <CheckboxGroup
      :name="'Genres'"
      :filters="[
        'Drama',
        'Comedy',
        'Action',
        'Family',
        'Something',
        'Something more',
        'even more',
        'bla1',
        'bla2',
        'bla3',
        'bla4',
        'bla5',
        'bla6',
        'bla',
      ]"
      @filter-change="updateGenresFilters"
    ></CheckboxGroup>
    <CheckboxGroup
      :name="'Types'"
      :filters="['movie', 'short', 'video', 'tvMovie']"
      @filter-change="updateTypeFilters"
    ></CheckboxGroup>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CheckboxGroup from "@/components/search/CheckboxGroup";

export default {
  name: "MovieSearch",
  components: { CheckboxGroup },
  data() {
    return {
      searchInput: "",
      genresFilters: [],
      typeFilters: [],
    };
  },
  methods: {
    ...mapActions(["searchFilm"]),
    updateGenresFilters(genres) {
      this.genresFilters = genres;
    },
    updateTypeFilters(types) {
      this.typeFilters = types;
    },
  },
};
</script>

<style scoped>
.search-container {
  background: #40363c;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}
.search-btn {
  color: var(--mid-dark);
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.4s;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: inside;
  color: var(--bright-color);
  font-size: 16px;
  line-height: 40px;
  padding: 0 6px;
}
.search-container:hover > .search-btn {
  background: var(--bright-color);
}

.search-filters {
  background-color: var(--dark-color);
  margin: 5% 5% -2%;
  padding: 3% 5% 5%;
  border-radius: 10px;
}
</style>
