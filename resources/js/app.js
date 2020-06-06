import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import VueRouter from "vue-router";
import routes from './routes'
import Axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'


Vue.prototype.$axios = Axios;

require('./bootstrap');
window.Vue = require('vue');

Vue.use(VueRouter);
const router = new VueRouter({
  routes

});

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken4, 
        secondary: colors.shades.white, 
        accent: colors.shades.black,
      },
    },
  },
})

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify()
  
}).$mount('#app')

