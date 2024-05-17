<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

watch(() => locale.value, () => {
    localStorage.setItem('locale', locale.value)
})

</script>

<template>
    <el-select v-model="$i18n.locale" class="locale-select" >
        <el-option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :label="locale"
        :value="locale"
        />
  </el-select>
</template>

<style scoped>
.locale-select {
    width: 70px;
}
</style>