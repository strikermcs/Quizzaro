<script setup lang="ts">
import logo from '../assets/quizzaro.png'
</script>

<template>
   <div class="authpage">
        <div class="auth-header">
            <el-image style="width: 250px;" :src="logo"  />
        </div>
        <div class="authcontent">
            <RouterView />
        </div>  
   </div>
</template>

<style scoped>
.authpage {
    height: 100vh;
    width: 100%;
    background-color: #4e73df;
    background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.auth-header {
    margin-bottom: 10px;
}

.authcontent {
    z-index: 12;
}
</style>