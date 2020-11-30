<template>
  <div id="app">
    <div class="nav">
      <h2 class="logo">Public Repos</h2>
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #333;
  color: #f4f4f4;
  margin-bottom: 3rem;
}

.nav a {
  text-decoration: none;
  margin: 0 0.7rem;
  color: #f4f4f4;
}

.nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
