<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { IAnswer } from '@/interfaces/quiz.interfaces';

interface IProps {
    answers: IAnswer[]
}


const props = defineProps<IProps>()
const emit = defineEmits(['setAnswers'])
const answerGroup = ref<Array<string>>()
const answersCheck: IAnswer[] = []

const correctAnswersCount = computed(() => {
    const correctAnswers = props.answers.filter(a => a.correctAnswer === true)
    return correctAnswers.length
})

const setAnswersHandler = () => {
    let answer: IAnswer | undefined
    answerGroup.value!.forEach(answerString => {
        answer = props.answers.find(a => a.answer === answerString)
        if (answer){
            answersCheck.push(answer)
        }
    })

    emit('setAnswers', answersCheck)
}

watch(answerGroup, (answers) => {
    if(answers!.length == correctAnswersCount.value) {
        setAnswersHandler()
        answerGroup.value = []
    } 
})

</script>


<template>
    <div class="multi-answers">
        <div class="multi-answers-count-label">
            <span>{{$t('CorrectAnswersCount') + ' ' + correctAnswersCount}}</span>
        </div>
        <el-checkbox-group v-model="answerGroup" class="answers">
            <el-checkbox 
            v-for="answer in answers"
            :key="answer.key"
            :label="answer.answer" border 
            />
        </el-checkbox-group>
    </div>
</template>

<style scoped>
.answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 30px 0px 30px 0px;
}

label.el-checkbox.is-bordered {
    margin: 0;
}

.multi-answers-count-label {
    padding-top: 20px;
}
</style>