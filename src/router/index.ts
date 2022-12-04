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
            },
            
            {
                path: '/sent',
                name: 'sent',
                component: () => import('../views/MainLayout/SentQuizes.vue')
            },

            {
                path: '/income',
                name: 'income',
                component: () => import('../views/MainLayout/IncomeQuizes.vue')
            },

            {
                path: '/all',
                name: 'all',
                component: () => import('../views/MainLayout/AllQuizes.vue')
            },

            {
                path: '/mail',
                name: 'mail',
                component: () => import('../views/MainLayout/MailPage.vue')
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
    },

    {
        path: '/my_quizes/urlpath/:id',
        name: 'quiz-url',
        component: () => import('../views/QuizFromUrl.vue') 
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router