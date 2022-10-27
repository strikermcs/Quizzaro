<script setup lang="ts">
import MyQuizzesList from '@/components/MainPage/MyQuizzesList/MyQuizzesList.vue'


</script>

<template>
   <div class="main-content">
        <el-card shadow="hover" class="card-listquiz">
            <template #header>
                <h3>{{$t('MyQuizzesList')}}</h3>
            </template>
           <MyQuizzesList />
        </el-card>
   </div>
</template>

<style scoped>
.card-listquiz {
    width: 80vw;
    max-height: 90vh;
    overflow: auto;
}

@media screen and (max-width: 1000px) {
    .card-listquiz {
        width: 99vw;
    }
}
</style>