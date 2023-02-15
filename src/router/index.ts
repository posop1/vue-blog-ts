import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('@/views/Posts/SinglePostView.vue')
  },
  { path: '/create', name: 'create', component: () => import('@/views/Posts/CreatePostView.vue') },
  { path: '/myPosts', name: 'my posts', component: () => import('@/views/Posts/MyPostView.vue') },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/Auth/RegistrationView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
