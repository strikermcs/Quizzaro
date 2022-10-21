import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '../store/user'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main-layout',
        meta: { auth: true },
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'main-page',
                component: () => import('../views/MainPage.vue')
            }
        ]
    },

    {
        path: '/user',
        name: 'empty-layout',
        component: () => import('../layouts/AuthLayout.vue'),
        children: [
            {
                path: '/user/register',
                name: 'register-page',
                component: () => import('../views/Register.vue')
            },

            {
                path: '/user/login',
                name: 'login-page',
                component: () => import('../views/Login.vue')
            }
        ] 
    },

    {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue') 
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const requireAuth = to.matched.some(record => record.meta.auth)
  
    if (requireAuth && !userStore.user){
      next('/welcome')
    }else{
      next()
    }
    
  })

export default router