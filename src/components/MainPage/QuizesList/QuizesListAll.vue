<script setup lang="ts">
import { ref } from 'vue'
import QuizPlay from '@/components/MainPage/QuizPlay/QuizPlay.vue';
import { IQuizDb } from '@/interfaces/quiz.interfaces';

const props = defineProps<{data: IQuizDb[]}>()

const playQuiz = ref<boolean>(false)
const activeQuiz = ref<IQuizDb>()

const handlePlay = (index: number, row: number) => {
  activeQuiz.value = props.data[index]  
  playQuiz.value = true
}

const refreshHandle = () => {
  playQuiz.value = false 
}
</script>

<template>
    <el-table :data="data" style="width: 100%" v-if="!playQuiz" >
        <el-table-column :label="$t('SentQuizesListQuizName')" prop="name" />
        <el-table-column align="right">
      <template #default="scope">
        <el-button size="small"
        @click="handlePlay(scope.$index, scope.row)"
          >{{$t('SentQuizesPlay')}}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <QuizPlay :quiz="(activeQuiz as IQuizDb)" v-else />
  <RefreshButton @click="refreshHandle"/>
  </template>