<script setup lang="ts">
import { IAnswer } from '@/interfaces/quiz.interfaces';

interface IAnswersResult {
    answers: IAnswer[]
    correctPercent: number
}

interface IProps {
    results: IAnswersResult[]
}

const props = defineProps<IProps>()

</script>


<template>
    Result Board
</template>