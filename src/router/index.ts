import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main-layout',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'create-quiz',
                component: () => import('../views/MainLayout/CreateNewQuiz.vue')
            },

            {
                path: '/my_quizes',
                name: 'my-quizes',
                component: () => import('../views/MainLayout/MyQuizes.vue')
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


export default router