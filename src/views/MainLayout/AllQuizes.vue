<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IQuizDb } from '@/interfaces/quiz.interfaces';
import quizService from '@/services/quiz.service';
import QuizesListAll from '@/components/MainPage/QuizesList/QuizesListAll.vue';

const isLoading = ref(true)
const quizes = ref<IQuizDb[]>([])

onMounted(async() => {
    quizes.value = await quizService.getAllQuizes()
    isLoading.value = false
})
 
</script>


<template>
     <el-card shadow="hover" class="card-listquiz" v-loading="isLoading">
        <template #header>
            <h3>{{$t('AllQuizes')}}</h3>
        </template>
      <QuizesListAll :data="quizes" />
    </el-card>
</template>