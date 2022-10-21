<template>
    <el-select v-model="$i18n.locale" class="locale-select" size="small">
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
    width: 50px;
}
</style>