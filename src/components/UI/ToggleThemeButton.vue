<script setup lang="ts">
import { ref, watch } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'

const theme = ref<string>(localStorage.getItem('theme') || 'light')

const themeToggleHandler = () => {
    document.documentElement.classList.toggle('dark')
    if(theme.value === 'dark') {
        localStorage.setItem('theme', 'light')
        theme.value = 'light'
    } else {
        localStorage.setItem('theme', 'dark')
        theme.value = 'dark'
    }
}

</script>

<template>
    <el-icon :size="30" class="theme-button" @click="themeToggleHandler">
         <component :is="theme === 'dark' ? Sunny : Moon" />
    </el-icon>
</template>

<style scoped>
.theme-button {
    cursor: pointer;
    transition: all 0.4s ease;
}

.theme-button:hover {
    color: rgb(54, 54, 189);
}
</style>