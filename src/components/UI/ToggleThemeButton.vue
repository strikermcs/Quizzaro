<script setup lang="ts">
import { ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'

const isDark = ref(false)

const themeToggleHandler = () => {
    document.querySelector('html')!.classList.toggle('dark')
    if(document.querySelector('html')!.classList.contains('dark')){
        isDark.value = true
        return
    }
    isDark.value = false
}

</script>

<template>
    <el-icon :size="30" class="theme-button" @click="themeToggleHandler">
         <component :is="isDark ? Sunny : Moon" />
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