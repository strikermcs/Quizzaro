<script lang="ts" setup>
import { watch, ref } from 'vue'
import { menuList } from './menulist'
import MenuButtons from '@/components/UI/mainMenuButtons.vue'
import logo from '@/assets/quizzaro.png'
import Burger from '@/components/UI/burger.vue'

const props = defineProps(['menuOpen']) 
const emit = defineEmits(['toggleMenu'])
const closeButton = ref(false)
const menuState = ref(true)

const burgerClickHandler = (toggle: boolean) => {
  menuState.value = toggle
  emit('toggleMenu', toggle)
}

watch(menuState, (count) => {
  if(!count){
    setTimeout(() => {
      closeButton.value = true
    }, 500)
  } else {
    closeButton.value = false
  }
})


</script>


<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="column first">
        <div class="logo">
          <el-image :src="logo" style="width: 180px"/>
        </div>
        <Transition appear enter-active-class="animated zoomIn">
          <nav class="menu" v-show="menuOpen">
            <ul class="main-menu">
              <li class="main-menu-item"
              v-for="item in menuList" :key="item.id"
              >
                <router-link :to="item.route" class="main-menu-link">
                  <el-icon class="menu-icon"><component :is="item.icon"/></el-icon>
                  <span>{{$t(item.title)}}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </Transition> 
        <div class="button-items">
          <MenuButtons /> 
       </div> 
      </div>
      <Teleport to="body" :disabled="menuOpen">
        <div class="column second" :class="{'close-button-active': !menuOpen, 'back-button ': closeButton}">
          <div class="burger-menu">
            <Burger :isOpen="menuOpen" @burgerClick="burgerClickHandler"/>
          </div>
        </div>
      </Teleport>  
    </div>     
  </div>
</template>

<style scoped>

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.sidebar-wrapper {
  display: grid;
  grid-template-columns: 1fr 40px;
  width: 260px;
}

.column {
  transition: all 0.5s ease;
}

.first {
  background: #101121;
  position: relative;
  height: 100vh;
}

.second {
  background: #0e101e;
  border: 1px solid black;
  height: 100vh;
}

.close-button-active {
  position: absolute;
  top: 10px;
  left: -45px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: 9999;
  border-color: rgb(136, 136, 136);
}

.back-button {
  left: 10px;
}

.logo {
  display: flex;
  justify-content: center;
  margin: 20px 0px 50px 0px; 
}

.button-items {
  position: absolute;
  left: 0;
  bottom: 20px;
}

.main-menu-item {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1.1em;
  list-style: none;
  transition: 0.4s;
  height: 55px;
}

.main-menu-item:hover {
  background: #1A1D37;
}

.main-menu-item:hover .main-menu-link {
  color: white;
}

.main-menu-link {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: 400;
  color: #7981b5;
  text-decoration: none;
  display: flex;
  padding: 0 0 0 15px;
  transition: 0.4s;
}

.menu-icon {
  margin-right: 10px;
}

.button-items {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
}
</style>