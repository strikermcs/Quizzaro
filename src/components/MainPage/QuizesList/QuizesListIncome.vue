<script setup lang="ts">
import { ref } from 'vue'
import { IIncomeQuizTable } from '@/interfaces/sentQuiz.interfaces';
import QuizPlay from '@/components/MainPage/QuizPlay/QuizPlay.vue';
import { IQuizDb } from '@/interfaces/quiz.interfaces';
import RefreshButton from '@/components/UI/RefreshButton.vue'
import { IResultDataTableItem, IResultUserDataTable  } from '@/interfaces/quiz.interfaces'
import { useUserStore } from '@/store/user';
import quizService from '@/services/quiz.service'
import { useNotificationStore } from '@/store/notification';

const props = defineProps<{data: IIncomeQuizTable[]}>()

const playQuiz = ref<boolean>(false)
const Quiz = ref<IQuizDb>()
const currentQuiz = ref(0)
const isLoading = ref(false)

const userStore = useUserStore()
const notify = useNotificationStore()

const handlePlay = (index: number, row: number) => {
  Quiz.value = props.data[index].quiz
  currentQuiz.value = index
  playQuiz.value = true
}

const quizeFinishHandle = async(resultQuiz: IResultDataTableItem[]) => {
  isLoading.value = true
  const rezult: IResultUserDataTable = {
    quizRezult: resultQuiz,
    username: userStore.user?.displayName as string,
    userId: props.data[currentQuiz.value].senderId,
    isRead: false
  } 
  await quizService.sentResultQuizToUser(rezult)
  isLoading.value = false
  notify.SetNofication("Success", "AnswersQuizSendToUser", 'success')
}

const refreshHandle = () => {
  playQuiz.value = false 
}
</script>

<template>
    <el-table :data="data" style="width: 100%" v-if="!playQuiz" v-loading="isLoading">
        <el-table-column :label="$t('SentQuizesListQuizName')" prop="quiz.name" />
        <el-table-column :label="$t('SentQuizesListSender')" prop="senderName" />
        <el-table-column align="right">
      <template #default="scope">
        <el-button size="small"
        @click="handlePlay(scope.$index, scope.row)"
          >{{$t('SentQuizesPlay')}}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <QuizPlay :quiz="(Quiz as IQuizDb)" v-else @quize-finish="quizeFinishHandle"/>
  <RefreshButton @click="refreshHandle"/>
</template>