<script setup lang="ts">
import { IQuizDb } from '@/interfaces/quiz.interfaces';

interface Props {
    quiz: IQuizDb
}

const props = defineProps<Props>()

const test = () => {
    console.log(props.quiz)
}

</script>


<template>
    Quiz Play
    <el-button @click="test"></el-button>
</template>