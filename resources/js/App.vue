<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/Detalle">Detalle</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from './pages/Home'
import Detalle from './pages/Detalle'

export default {
  name: 'app',
  components: {
    Home,
    Detalle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
