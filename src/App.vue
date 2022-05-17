<template>
  <nav>
    <div class="nav-content">
      <p>IMDB Academy</p>
      <div class="nav-links">
        <router-link to="/">Home</router-link> &emsp;
        <router-link to="/about">About</router-link> &emsp;
      </div>
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
  color: var(--bright-color); //extraer display:grid

  .movie-table {
    display: grid;
  }

  .filter-container {
    display: grid;
  }
  @media only screen and (min-width: 640px) {
    .movie-table {
      grid-template-columns: 100%;
      grid-column-gap: 0;
      grid-row-gap: 20px;
    }
    .filter-container {
      grid-template-columns: 33% 33% 33%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .movie-table {
      grid-template-columns: 50% 50%;
      grid-column-gap: 10px;
      padding: 20px;
    }
    .filter-container {
      grid-template-columns: 20% 20% 20% 20% 20%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .movie-table {
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
  .nav-links {
    border-radius: 25px;
    height: fit-content;
    display: inline-flex;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    align-items: center;
    padding: 0 10px;
    margin-top: -17px;
  }
  a:not(.top-search) {
    list-style: none;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    padding: 12px 16px;
    margin: 0 8px;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      transition: 1.5s;
      border-radius: 25px;
    }
    &:hover {
      &::before {
        background: linear-gradient(to bottom, #e8edec, #d2d1d3);
        box-shadow: 0px 3px 20px black;
        transform: scale(1.2);
      }
      color: black;
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
