import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import routes from './routes'
import Axios from 'axios'

Vue.prototype.$axios = Axios;
require('./bootstrap');
window.Vue = require('vue');

const router = new VueRouter({
  routes

});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

