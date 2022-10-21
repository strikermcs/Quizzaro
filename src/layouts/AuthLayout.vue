<script setup lang="ts">
import logo from '../assets/quizzaro.png'
import LocaleSelect from '../components/UI/LocaleSelect.vue'
</script>

<template>
   <div class="authpage">
        <router-link to="/welcome" class="auth-header">
            <el-image style="width: 250px;" :src="logo"  />
        </router-link>
        <div class="authcontent">
            <RouterView />
        </div>
        <div class="locale">
            <LocaleSelect />
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

.locale {
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>