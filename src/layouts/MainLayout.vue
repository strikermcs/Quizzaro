<script setup lang="ts">
  import MainMenu from '../components/MainPage/MainMenu/MainMenu.vue'
  import { auth } from '../firebase/firebase'
  import { onAuthStateChanged } from "firebase/auth";
  import { useUserStore } from '../store/user'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const userStore = useUserStore()

  onAuthStateChanged(auth, (user) => {

    if(user) {
        userStore.user = user
    } else {
        userStore.user = null
        router.push('/welcome')
    }
        
  })  
  
</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside-menu">
        <MainMenu />
      </el-aside>
      <el-main >
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.aside-menu {
  width: 200px;
  transition: all 0.5s ease;
}

@media screen and (max-width: 1000px) {
  .aside-menu {
    position: absolute;
    left: -200px;
  }
}
</style>