<template>
<v-app>
<v-toolbar class="blue darken-4 text-center" dense>
  <v-toolbar-title>
    <router-link class="secondary" to="/"> <a> Home </a></router-link>
  </v-toolbar-title>
    <v-spacer></v-spacer>

</v-toolbar>
    <router-view/>
</v-app>

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
