<script lang="ts" setup>
import { ref } from 'vue'
import { menuList } from './menulist'
import MenuButtons from '@/components/UI/mainMenuButtons.vue'
import logo from '@/assets/quizzaro.png'
import { useRouter } from 'vue-router' 

const defaultActive = ref<String>("1")
const router = useRouter();

const headerClickHandler = () => {
  defaultActive.value = "1"
  router.push('/')
}

</script>


<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical"
        :default-active="defaultActive"
        text-color="#fff"
        router
      >
      <div class="menu-header" @click="headerClickHandler">
        <el-image :src="logo" style="width: 180px"/>
      </div>
        <el-menu-item v-for="item in menuList" :key="item.id" :index="item.id"
        :route="item.route"
        >
          <el-icon><component :is="item.icon"/></el-icon>
          <span>{{$t(item.title)}}</span>
        </el-menu-item>
       <div class="button-items">
          <MenuButtons /> 
       </div> 
    </el-menu>
</template>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  position: relative;
}

.menu-header {
    display: flex;
    justify-content: center;
    padding: 20px 0px 20px 0px;
    cursor: pointer;
}

.button-items {
  position: absolute;
  left: 0;
  bottom: 20px;
}
</style>