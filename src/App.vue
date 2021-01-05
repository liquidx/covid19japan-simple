<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="css">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(0.8rem, -1rem + 8vw, 20px);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(250, 250, 250);
}

#app {
  padding: 0.5em;
  max-width: 600px;
  min-height: 100vh;
  background: white;
}

</style>
