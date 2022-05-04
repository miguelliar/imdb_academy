<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @media only screen and (min-width: 640px) {
    .movie-table {
      display: grid;
      grid-template-columns: 100%;
      grid-column-gap: 0;
      grid-row-gap: 20px;
    }
  }

  @media only screen and (min-width: 1366px) {
    .movie-table {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-column-gap: 10px;
      grid-row-gap: 20px;
    }
  }

  @media only screen and (min-width: 1920px) {
    .movie-table {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-column-gap: 0;
      grid-row-gap: 20px;
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
