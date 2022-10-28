<script setup lang="ts">
import { ref } from 'vue'
import MyQuizzesList from '@/components/MainPage/MyQuizzesList/MyQuizzesList.vue'
import { IQuizDb } from '@/interfaces/quiz.interfaces'
import TestQuiz from '@/components/MainPage/QuizPlay/QuizPlay.vue'

interface ICommand {
  command: string,
  data: IQuizDb
}

const commandComponents: any = {
    TestQuiz
}

const CommandActive = ref<ICommand | null>(null)

const commandHandler = (command: ICommand) => {
    CommandActive.value = command
} 

</script>

<template>
   <div class="main-content">
        <el-card shadow="hover" class="card-listquiz" >
            <template #header>
                <h3>{{$t('MyQuizzesList')}}</h3>
            </template>
           <MyQuizzesList @sendCommand="commandHandler" v-if="!CommandActive"/>
           <component :is="commandComponents[CommandActive.command]" v-else :quiz="CommandActive.data"/>
        </el-card>
   </div>
</template>

<style scoped>
.card-listquiz {
    width: 80vw;
    max-height: 90vh;
    overflow: auto;
}

@media screen and (max-width: 1000px) {
    .card-listquiz {
        width: 99vw;
    }
}
</style>