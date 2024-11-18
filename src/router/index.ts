import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Auth from '../views/AuthPage.vue'
// import Watch from '../views/WatchPage.vue'
// import TitlePage from '../views/TitlePage.vue'

import { currentUser } from '@/model/authState';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/auth',
    component: Auth,
    beforeEnter: auth_redirect
  },
  {
    path: '/title/:uid',
    component: () => import('@/views/TitlePage.vue'),
  },
  {
    path: '/watch/:content_uid',
    component: () => import('@/views/WatchPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


function auth_redirect() {

  if(currentUser.value !== null ) router.push("/tabs")
}

export default router
