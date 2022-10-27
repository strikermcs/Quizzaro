<script setup lang="ts">
import { reactive } from 'vue'
import AddNewQuizCard from '@/components/MainPage/CreateQuiz/AddNewQuizCard.vue';
import AddQuestionsCard from '@/components/MainPage/CreateQuiz/AddQuestionsCard.vue'
import { IQuestion, IQuiz, IQuizDb } from '@/interfaces/quiz.interfaces'
import { useUserStore } from '@/store/user';
import quizService from '@/services/quiz.service'
import { useNotificationStore } from '@/store/notification'
import { useI18n } from "vue-i18n";

interface IQuizStart {
    quizName: string
    quizTheme: string 
}

const { t } = useI18n()
const notify = useNotificationStore()

const quiz = reactive<IQuiz>({
    name: '',
    theme: '',
    questions: []
})

const createQuiz = (quizName: IQuizStart) => {
    quiz.name = quizName.quizName
    quiz.theme = quizName.quizTheme
}

const publishQuizHandle =  async (questions: IQuestion[]) => {
    const user = useUserStore()
    quiz.questions = questions

    const quizSave : IQuizDb = { ...quiz, userId: user.user?.uid as string }
    const result = await quizService.addQuiz(quizSave)
    if (result) {
        notify.SetNofication(t('Success'), t('PublishQuizSuccess'), 'success')
        quiz.name = '' 
        quiz.theme = ''
        quiz.questions = [] 
    }
}

</script>

<template>
    <div class="main-content">
        <AddNewQuizCard @createQuiz = "createQuiz" v-if="quiz.name.length === 0"/>
        <AddQuestionsCard :quizName="quiz.name" @publishQuiz="publishQuizHandle" v-else/>
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