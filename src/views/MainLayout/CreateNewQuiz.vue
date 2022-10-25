<script setup lang="ts">
import { reactive } from 'vue'
import AddNewQuizCard from '@/components/MainPage/CreateQuiz/AddNewQuizCard.vue';
import AddQuestionsCard from '@/components/MainPage/CreateQuiz/AddQuestionsCard.vue'

interface IQuizStart {
    quizName: string
    quizTheme: string 
}

const quiz = reactive({
    name: '',
    theme: '',
    questions: [
        {
            question: '',
            answers: [],
            correctAnswer: ''
        }
    ]
})

const createQuiz = (quizName: IQuizStart) => {
    quiz.name = quizName.quizName
    quiz.theme = quizName.quizTheme
}

</script>

<template>
    <div class="main-content">
        <AddNewQuizCard @createQuiz = "createQuiz" v-if="quiz.name.length === 0"/>
        <AddQuestionsCard :quizName="quiz.name" v-else/>
    </div>
</template>

<style scoped>
    .main-content{
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
    }
</style>