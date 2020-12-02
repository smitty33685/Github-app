<template>
  <div id="app">
    <div class="nav">
      <h1 class="logo">Public Repos</h1>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About App</router-link>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  background: #dddada;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: #222;
  color: #f4f4f4;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
    margin: 0 0.7rem;
    color: #f4f4f4;
    text-transform: uppercase;

    &:hover {
      color: #547dde;
    }
  }
}
</style>
