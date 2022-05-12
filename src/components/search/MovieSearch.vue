<template>
  <div class="search-container" @click="this.$refs.search_title.focus()">
    <input
      type="text"
      name="search"
      ref="search_title"
      placeholder="Search any movie..."
      class="search-txt"
      :value="searchInput"
      @input="(event) => (searchInput = event.target.value)"
    />
    <a
      @click="searchFilm({ searchInput, genresFilters, typeFilters })"
      class="search-btn"
    >
      <i class="fas fa-search"></i>
    </a>
  </div>
  <CheckboxGroup
    :filters="['Drama', 'Comedy', 'Action', 'Family']"
    @filter-change="updateGenresFilters"
  ></CheckboxGroup>
  <CheckboxGroup
    :filters="['movie', 'short', 'video', 'tvMovie']"
    @filter-change="updateTypeFilters"
  ></CheckboxGroup>
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
      console.log(this.genresFilters);
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
</style>
