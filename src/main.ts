import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { auth } from './firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from './store/user'
import i18n from './i18n'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(i18n)

onAuthStateChanged(auth, (user) => {
    const userStore = useUserStore()
    if(user){
        userStore.user = user
    } else {
        userStore.user = null
    }
})

app.mount('#app')
