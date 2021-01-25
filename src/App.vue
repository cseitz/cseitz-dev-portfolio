<template>
  <div id="nav" hidden>
    <router-link to="/">Home</router-link> |
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*@include dark {
    color: white;
    background-color: black;
  }*/
}

#nav {
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
