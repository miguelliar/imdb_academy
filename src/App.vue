<template>
  <nav>
    <div class="nav-content">
      <p>IMDB Academy</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <a class="top-search">
        <i class="fas fa-search"></i>
      </a>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
:root {
  --bright-color: #d9c2ad;
  --mid-brigth: #bf9a78;
  --mid-dark: #a67f68;
  --dark-color: #40363c;
  --background-dark-color: #0d0d0d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--bright-color);
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
      padding: 20px;
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
  position: fixed;
  width: 100%;
  height: 10%;
}

.nav-content {
  display: flex;
  padding: 30px;
  background-color: black;
  width: 100%;
  height: 10%;

  p {
    font-size: xx-large;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  background: var(--background-dark-color);
}
</style>
