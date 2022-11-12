<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import _ from 'lodash'
import { IQuizDb, IAnswer, IAnswersResult } from '@/interfaces/quiz.interfaces';
import OneCorrectAnswer from './OneCorrectAnswer.vue'
import MultiplayAnswer from './MultiplayCorrectAnswers.vue'
import QuizResultBoard from './QuizResultBoard.vue'
import { getResultTableData } from '@/utils/tableData'
import { calculatePercentOfCorrectAnswers } from '@/utils/quiz'

interface Props {
    quiz: IQuizDb
}

const props = defineProps<Props>()

const currentQuestion = ref<number>(0)
const quizFinish = ref(false)
const AnswersResult = reactive<IAnswersResult[]>([])
const question = computed(() => {
    return props.quiz.questions[currentQuestion.value]
})

const questionAnswers = computed(() => {
    const correctAnswers = props.quiz.questions[currentQuestion.value].answers.filter(a => a.correctAnswer === true)
    if (correctAnswers.length > 1) {
        return { multiplayAnswers: true, answers: props.quiz.questions[currentQuestion.value].answers }
    }
    return { multiplayAnswers: false, answers: props.quiz.questions[currentQuestion.value].answers }
})


const answerClickHandler = (answers: IAnswer[]) => {
    const { questions } = props.quiz
    AnswersResult.push(
        {
            answers, 
            correctPercent: calculatePercentOfCorrectAnswers(answers, props.quiz, currentQuestion.value)
        }
    )
    
    if(currentQuestion.value !== _.size(questions) - 1) {
        currentQuestion.value++
        return
    }

    quizFinish.value = true
}



</script>


<template>
    <div class="header-quizplay" >
        <span>{{quiz.name}}</span>
    </div>
    <div class="quiz-play-content" v-if="!quizFinish">
        <div class="quiz-question">
            <em>{{question.question}}</em>
        </div>

                <OneCorrectAnswer 
                v-if="!questionAnswers.multiplayAnswers" 
                :answers="questionAnswers.answers"
                @setAnswer="answerClickHandler"
                />

                <MultiplayAnswer v-else 
                :answers="questionAnswers.answers"
                @setAnswers="answerClickHandler"
                />
             
        <div class="quiz-progress">
            <el-steps  :active="currentQuestion" finish-status="success">
                <el-step v-for="step in quiz.questions" :key="step.question" />
            </el-steps>
        </div>
    </div>
    <QuizResultBoard v-else :results="getResultTableData(AnswersResult, quiz)"/>
</template>

<style scoped>
.header-quizplay {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 20px;
}


</style>