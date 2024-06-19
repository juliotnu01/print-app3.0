import { createWebHistory, createRouter } from 'vue-router'

import modal from './components/modal.vue'
import viewPDf from './components/viewPDF.vue'
const routes = [
   
  { path: '/', component: modal },
  { path: '/pdf/:url', component: viewPDf },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router