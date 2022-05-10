<template>
  <div class="search-container" @click="this.$refs.search_title.focus()">
    <input
      type="text"
      name="search"
      placeholder="Search any movie..."
      class="search-txt"
      :value="searchInput"
    />
    <a @click="this.searchTitle(searchInput)" class="search-btn">
      <i class="fas fa-search"></i>
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MovieSearch",
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    ...mapActions(["searchTitle"]),
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
