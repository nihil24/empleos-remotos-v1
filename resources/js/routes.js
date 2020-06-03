
import Home from './pages/Home.vue'
import Detalle from './pages/Detalle.vue'

const routes = [
    { path: '/', 
      component: Home },

    { path: '/Detalle/:id', 
      component: Detalle }
]

export default routes;