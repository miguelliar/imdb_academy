<template>
  <nav>
    <div class="nav-content">
      <p>IMDB Academy</p>
      <router-link to="/">Home</router-link> &emsp;
      <router-link to="/about">About</router-link> &emsp;
      <a v-if="$route.name === 'home'" class="top-search">
        <i class="fas fa-search"></i>
      </a>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
:root {
  --link-inactive-color: #2c3e50;
  --link-active-color: #42b983;
  --bright-color: #d9c2ad;
  --mid-brigth: #bf9a78;
  --mid-dark: #a67f68;
  --dark-color: #40363c;
  --dark-color-transparent: hsl(324, 8%, 23%, 0.25);
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
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  z-index: 10;
}

.nav-content {
  display: flex;
  padding: 30px;
  background-color: black;
  width: 100%;
  height: 10%;

  p {
    font-size: xx-large;
    margin-top: -20px;
    margin-right: 10px;
  }
  a {
    font-weight: bold;
    color: var(--link-inactive-color);
    margin-top: -5px;
    &.router-link-exact-active {
      color: var(--link-active-color);
    }
  }
  .top-search {
    position: absolute;
    left: 90%;
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
    margin-top: -15px;
    transition: 0.4s;
  }
}

.top-search:hover {
  background: var(--bright-color);
}

body {
  background: var(--background-dark-color);
  margin-top: 7%;
}
</style>
