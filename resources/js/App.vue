<template>
<v-app>
<v-toolbar class="blue darken-4 text-center" dense>
  <v-toolbar-title>
    <router-link to="/"><v-icon x-large dark>mdi-home</v-icon></router-link>
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
  text-align: center;
}
</style>
