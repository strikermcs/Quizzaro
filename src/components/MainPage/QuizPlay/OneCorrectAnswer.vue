<script setup lang="ts">
import { ref } from 'vue'
import { IAnswer } from '@/interfaces/quiz.interfaces';

interface IProps {
    answers: IAnswer[]
} 

const props = defineProps<IProps>()
const emit = defineEmits(['setAnswer'])
const animate = ref(0)

const answerClickHandler = (answer: IAnswer): void => {
    const answers: IAnswer[] = []

    answers.push(answer)
    animate.value = answer.key
    
    setTimeout(() => {
        animate.value = 0
        emit('setAnswer', answers)
    }, 1000)

}

</script>


<template>
    <div class="answers">
        <el-button v-for="answer in answers" 
        :key="answer.key"
        :class="{'correct-click' : animate === answer.key && answer.correctAnswer === true,
                 'error-click' :  animate === answer.key && answer.correctAnswer === false}"
        @click="answerClickHandler(answer)"
        >{{answer.answer}}</el-button>
    </div> 
</template>

<style scoped>
.answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 30px 0px 30px 0px;
}

.correct-click {
    animation: glowing 500ms infinite;
}

.error-click {
    animation: glowing-error 500ms infinite;
}
button.el-button {
    margin: 0; 
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