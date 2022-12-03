<script setup lang="ts">
  import MainMenu from '../components/MainPage/MainMenu/MainMenu.vue'
  import { auth } from '../firebase/firebase'
  import { onAuthStateChanged } from "firebase/auth";
  import { useUserStore } from '../store/user'
  import { useRouter } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import Mail from '@/components/MainPage/Mail/Mail.vue';
 
  const router = useRouter()
  const userStore = useUserStore()
  const isAsideOpen = ref(true)

  const menuToggleHandler = (toggle: boolean) => {
    isAsideOpen.value = toggle
  }

  onAuthStateChanged(auth, (user) => {

    if(user) {
        userStore.user = user
    } else {
        userStore.user = null
        router.push('/welcome')
    }
        
  })
  
  onMounted(() => {
    if(userStore.user) {
      router.push('/')
    }
  })
  
</script>


<template>
  <div class="main">
    <Mail v-if="userStore.user"/>
    <aside class="aside-menu" :class="{ 'aside-close': !isAsideOpen }">
      <MainMenu :menuOpen="isAsideOpen" @toggleMenu="menuToggleHandler"/>
    </aside>
    <main class="page" :class="{ 'page-full' : !isAsideOpen }">
      <div class="page-container">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main {
  position: relative;
}
.aside-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
  height: 100%;
  z-index: 2000;
  background: #0e101e;
  overflow: hidden;
  transition: ease-in-out 0.4s 0s;
}

.page {
  margin: 0 0 0 260px; 
  transition: ease-in-out 0.4s;
}

.page-container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 40px; 
  /* padding: 0px 5px 0px 5px;  */
}

.aside-close {
  left: -260px;
}

.page-full {
  margin: 0;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1320px) {
  .page {
    margin: 0;
  }

  .page-container {
    width: 90%;
  }

}

</style>