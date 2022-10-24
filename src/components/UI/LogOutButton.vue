<script setup lang="ts">
import { SwitchButton } from '@element-plus/icons-vue';
import { useUserStore } from '../../store/user';
import { useRouter } from 'vue-router' 

const user = useUserStore()
const router = useRouter()

const logOutHandle = () => {
    user.singOut()
    router.push('/welcome')
}

</script>

<template>
   <el-icon :size="30" class="log-out-button" @click="logOutHandle">
        <SwitchButton />
   </el-icon>
</template>

<style scoped>
.log-out-button {
    cursor: pointer;
    transition: all 0.4s ease;
}

.log-out-button:hover {
    color: rgb(54, 54, 189);
}
</style>