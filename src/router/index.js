import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import VeraLogin from '@/views/VeraLogin.vue'
import Explore from '@/views/Explore.vue'
import SocialFeed from '@/views/SocialFeed.vue'
import News from '@/views/News.vue'
import NewsBritish from '@/views/News_British.vue'
import NewsInclusive from '@/views/News_Inclusive.vue'
import NewsPublic from '@/views/News_Public.vue'
import Trending from '@/views/Trending.vue'
import Profile from '@/views/Profile.vue'
import ThreeJsDemo from '@/views/ThreeJsDemo.vue'
import MasaigonDemo from '@/views/MasaigonDemo.vue'
import Test from '@/views/Test.vue'
import TestDemo from '@/views/TestDemo.vue'
import WaveFluidDemo from '@/views/WaveFluidDemo.vue'

const routes = [
  { path: '/', name: 'main', component: VeraLogin },
  { path: '/login', name: 'login', component: VeraLogin },
  { path: '/home', name: 'Home', component: Home },
  { path: '/explore', name: 'Explore', component: Explore },
  { path: '/social-feed', name: 'SocialFeed', component: SocialFeed },
  { path: '/news', name: 'News', component: News },
  { path: '/newsb', name: 'Newsb', component: NewsBritish },
  { path: '/newsc', name: 'Newsc', component: NewsInclusive },
  { path: '/newsd', name: 'Newsd', component: NewsPublic },
  { path: '/trending', name: 'Trending', component: Trending },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/threejs-demo', name: 'ThreeJsDemo', component: ThreeJsDemo },
  { path: '/masaigon-demo', name: 'MasaigonDemo', component: MasaigonDemo },
  { path: '/masaigon-background', name: 'MasaigonBackground', component: MasaigonDemo },
  { path: '/wave', name: 'WaveFluidDemo', component: WaveFluidDemo },
  { path: '/test', name: 'Test', component: Test },
  { path: '/test-demo', name: 'TestDemo', component: TestDemo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 