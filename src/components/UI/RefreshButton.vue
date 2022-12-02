<script setup lang="ts">
import { RefreshLeft } from '@element-plus/icons-vue';
</script>

<template>
    <div class="refresh">
        <el-icon :size="40"><RefreshLeft /></el-icon>
    </div> 
</template>

<style scoped>
.refresh {
    position: fixed;
    right: 20px;
    bottom: 20px;
    opacity: 0.3;
    cursor: pointer;
    transition: all 0.5s ease;
}

.refresh:hover {
    opacity: 1;
}

</style>