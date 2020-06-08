import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import VueRouter from "vue-router";
import routes from './routes'
import Axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

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
  icons: {
    iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify()
  
}).$mount('#app')

