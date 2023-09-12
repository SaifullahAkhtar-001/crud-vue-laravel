<template>
    <div class="text-xl dark:bg-[#121212] m-0 dark:text-white min-h-screen min-w-full">
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
components:{
  Navbar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
