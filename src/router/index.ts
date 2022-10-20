import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main-layout',
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
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router