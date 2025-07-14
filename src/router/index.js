import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import VeraLogin from '@/views/VeraLogin.vue'
import Explore from '@/views/Explore.vue'
import MenuDemo from '@/views/MenuDemo.vue'
import SocialFeed from '@/views/SocialFeed.vue'
import News from '@/views/News.vue'
import Trending from '@/views/Trending.vue'
import Profile from '@/views/Profile.vue'
import ThreeJsDemo from '@/views/ThreeJsDemo.vue'
import MasaigonDemo from '@/views/MasaigonDemo.vue'
import Test from '@/views/Test.vue'
import TestDemo from '@/views/TestDemo.vue'
// import WaveFluidDemo from '@/views/WaveFluidDemo.vue'

const routes = [
  { path: '/login', name: 'login', component: VeraLogin },
  { path: '/home', name: 'Home', component: Home },
  { path: '/explore', name: 'Explore', component: Explore },
  { path: '/menu-demo', name: 'MenuDemo', component: MenuDemo },
  { path: '/social-feed', name: 'SocialFeed', component: SocialFeed },
  { path: '/news', name: 'News', component: News },
  { path: '/trending', name: 'Trending', component: Trending },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/threejs-demo', name: 'ThreeJsDemo', component: ThreeJsDemo },
  { path: '/masaigon-demo', name: 'MasaigonDemo', component: MasaigonDemo },
  { path: '/masaigon-background', name: 'MasaigonBackground', component: MasaigonDemo },
  // { path: '/wave-fluid', name: 'WaveFluidDemoAlt', component: WaveFluidDemo },
  { path: '/test', name: 'Test', component: Test },
  { path: '/test-demo', name: 'TestDemo', component: TestDemo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 