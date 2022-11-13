<script setup lang="ts">
import LocaleSelect from './LocaleSelect.vue'
import ToggleThemeButton from './ToggleThemeButton.vue'
import LogOut from './LogOutButton.vue'
</script>


<template>
    <div class="main-menu-buttons">
        <ToggleThemeButton />
        <LocaleSelect />
        <LogOut />
    </div>
</template>

<style scoped>
    .main-menu-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px 0px 15px;
        color: #7981b5;
        min-width: 160px;
    }
</style>