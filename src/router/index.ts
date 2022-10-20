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
        component: () => import('../layouts/EmptyLayout.vue') 
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router