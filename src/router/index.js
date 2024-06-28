import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/motivos/cadastrar',
    name: 'cadastrar-motivo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Motivos/CadastrarView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
