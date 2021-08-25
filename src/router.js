import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicial from './views/Inicial.vue'
import Paciente from './views/Paciente.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Inicial },
    // Acessa o component de exemplo com o Vue router
    { path: '/cliente', component: Paciente }
  ]
})