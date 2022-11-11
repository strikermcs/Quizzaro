<script setup lang="ts">
import { IAnswer } from '@/interfaces/quiz.interfaces';

interface IProps {
    answers: IAnswer[]
} 

const props = defineProps<IProps>()
const emit = defineEmits(['setAnswer'])

const answerClickHandler = (answer: IAnswer): void => {
    const answers: IAnswer[] = []

    answers.push(answer)
    emit('setAnswer', answers)

}

</script>


<template>
    <div class="answers">
        <el-button v-for="answer in answers" 
        :key="answer.key"
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

button.el-button {
    margin: 0; 
}
</style>