<script setup lang="ts">
import { reactive, ref } from 'vue'
import AddNewQuizCard from '@/components/MainPage/CreateQuiz/AddNewQuizCard.vue';
import AddQuestionsCard from '@/components/MainPage/CreateQuiz/AddQuestionsCard.vue'
import { IQuestion, IQuiz, IQuizDb } from '@/interfaces/quiz.interfaces'
import { useUserStore } from '@/store/user';
import quizService from '@/services/quiz.service'
import { useNotificationStore } from '@/store/notification'


interface IQuizStart {
    quizName: string
    quizTheme: string 
}

const notify = useNotificationStore()
const loading = ref(false)

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
    loading.value = true
    const user = useUserStore()
    quiz.questions = questions

    const quizSave : IQuizDb = { ...quiz, userId: user.user?.uid as string }
    const result = await quizService.addQuiz(quizSave)
    if (result) {
        notify.SetNofication('Success', 'PublishQuizSuccess', 'success')
        quiz.name = '' 
        quiz.theme = ''
        quiz.questions = [] 
    }
    loading.value = false
}

</script>

<template>
    <div class="main-content" v-loading="loading">
        <AddNewQuizCard @createQuiz = "createQuiz" v-if="quiz.name.length === 0"/>
        <AddQuestionsCard :quizName="quiz.name" @publishQuiz="publishQuizHandle" v-else/>
    </div>
</template>
