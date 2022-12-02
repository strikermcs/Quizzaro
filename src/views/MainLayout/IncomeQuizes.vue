<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QuizesListIncome from '@/components/MainPage/QuizesList/QuizesListIncome.vue';
import { IIncomeQuizTable } from '@/interfaces/sentQuiz.interfaces'
import quizService from '@/services/quiz.service';

const isLoading = ref(true)
const dataTable = ref<IIncomeQuizTable[]>([])


onMounted(async() => {
    dataTable.value = await quizService.getIncomeQuizes()
    isLoading.value = false
})
</script>


<template>
    <el-card shadow="hover" class="card-listquiz" v-loading="isLoading">
        <template #header>
            <h3>{{$t('SentQuizzesList')}}</h3>
        </template>
        <QuizesListIncome :data="dataTable" /> 
    </el-card>
</template>