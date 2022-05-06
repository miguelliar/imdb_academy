<template>
  <div class="search-container" @click="this.$refs.search_title.focus()">
    <input
      type="text"
      ref="search_title"
      name="search"
      placeholder="Search any movie..."
      class="search-txt"
    />
    <a
      @click="this.searchTitle(this.$refs.search_title.value)"
      class="search-btn"
    >
      <i class="fas fa-search"></i>
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MovieSearch",
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
  color: #a67f68;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #40363c;
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
  color: #d9c2ad;
  font-size: 16px;
  line-height: 40px;
  padding: 0 6px;
}
.search-container:hover > .search-btn {
  background: #d9c2ad;
}
</style>
