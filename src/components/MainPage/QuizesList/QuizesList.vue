<script setup lang="ts">
import { ref } from 'vue'
import { ISendQuizTable } from '@/interfaces/sentQuiz.interfaces';
import QuizPlay from '@/components/MainPage/QuizPlay/QuizPlay.vue';
import { IQuizDb } from '@/interfaces/quiz.interfaces';
import RefreshButton from '@/components/UI/RefreshButton.vue'


const props = defineProps<{data: ISendQuizTable[]}>()
const emit = defineEmits(['deleteSentQuiz'])
const playQuiz = ref<boolean>(false)
const Quiz = ref<IQuizDb>()

const handlePlay = (index: number, row: number) => {
  Quiz.value = props.data[index].quiz
  playQuiz.value = true
}

const refreshHandle = () => {
  playQuiz.value = false 
}

const handleDelete = (index: number, row: number) => {
  emit('deleteSentQuiz', index)
} 

</script>

<template>
    <el-table :data="data" style="width: 100%" v-if="!playQuiz">
        <el-table-column :label="$t('SentQuizesListQuizName')" prop="quiz.name" />
        <el-table-column :label="$t('SentQuizesListRecipient')" prop="recipientName" />
        <el-table-column align="right">
      <template #default="scope">
        <el-button size="small"
        @click="handlePlay(scope.$index, scope.row)"
          >{{$t('SentQuizesPlay')}}</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >{{$t('SentQuizesDelete')}}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <QuizPlay :quiz="(Quiz as IQuizDb)" v-else/>
  <RefreshButton @click="refreshHandle"/>
</template>