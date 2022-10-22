<script setup lang="ts">
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
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>