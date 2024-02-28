import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import YeniView from '@/views/YeniView.vue'
import ListeView from '@/views/ListeView.vue'
import EditView from '@/views/EditView.vue'
import AboutView from '@/views/AboutView.vue'
import TestView from '@/views/TestView.vue'
import TestView2 from '@/views/SentenceCaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/yeni',
      name: 'yeni',
      component: YeniView
    },
    {
      path: '/liste',
      name: 'liste',
      component: ListeView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/test2',
      name: 'test2',
      component: TestView2
    }
  ]
})

export default router
