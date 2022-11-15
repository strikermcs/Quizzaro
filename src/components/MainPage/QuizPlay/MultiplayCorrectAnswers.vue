<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { IAnswer } from '@/interfaces/quiz.interfaces';

interface IProps {
    answers: IAnswer[]
}


const props = defineProps<IProps>()
const emit = defineEmits(['setAnswers'])
const answerGroup = ref<Array<string>>([])
const animate = ref<Array<string>>([])

let answersCheck: IAnswer[] = []

const correctAnswersCount = computed(() => {
    const correctAnswers = props.answers.filter(a => a.correctAnswer === true)
    return correctAnswers.length
})

const setAnswersHandler = () => {
    let answer: IAnswer | undefined
    answerGroup.value!.forEach(answerString => {
        animate.value.push(answerString)
        answer = props.answers.find(a => a.answer === answerString)
        if (answer){
            answersCheck.push(answer)
        }
    })
 
    setTimeout(() => {
        animate.value = []
        emit('setAnswers', answersCheck)
        answersCheck = [] 
    }, 1000)
    
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
            v-for="(answer, index) in answers"
            :key="answer.key"
            :label="answer.answer" border
            :class="{'correct-click': animate.includes(answer.answer) && answer.correctAnswer === true,
                     'error-click': animate.includes(answer.answer) && answer.correctAnswer === false }" 
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

.correct-click {
    animation: glowing 500ms infinite;
}

.error-click {
    animation: glowing-error 500ms infinite;
}

@keyframes glowing {
    0% { background: #2ba805; box-shadow: 0 0 3px #2ba805; }
    50% { background: #49e819; box-shadow: 0 0 10px #49e819; }
    100% { background: #2ba805; box-shadow: 0 0 3px #2ba805; }
}

@keyframes glowing-error {
    0% { background: #a80505; box-shadow: 0 0 3px #a81005; }
    50% { background: #e85b19; box-shadow: 0 0 10px #e84219; }
    100% { background: #a80505; box-shadow: 0 0 3px #a81005; }
}
</style>