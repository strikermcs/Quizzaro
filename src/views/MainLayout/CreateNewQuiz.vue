<script setup lang="ts">
import { reactive } from 'vue'

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
</script>

<template>
   <el-button>singOut</el-button>
</template>