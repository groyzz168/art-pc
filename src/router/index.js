import { createRouter, createWebHistory } from 'vue-router'
import VeraLogin from '@/views/VeraLogin.vue'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'Login', component: VeraLogin },
  { path: '/home', name: 'Home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 