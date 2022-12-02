<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import QuizesList from '@/components/MainPage/QuizesList/QuizesList.vue';
import quizService from '@/services/quiz.service';
import { ISendQuizTable } from '@/interfaces/sentQuiz.interfaces'
import { useNotificationStore } from '@/store/notification';

const isLoading = ref(true)
const dataTable = ref<ISendQuizTable[]>([])
const notify = useNotificationStore()

const deleteSentQuizHandle = async(index: number) => {
    isLoading.value = true
    const id = dataTable.value[index].sentQuizId
    await quizService.sentQuizDelete(id)
    console.log(index, id)
    dataTable.value.splice(index, 1)
    isLoading.value = false
    notify.SetNofication('Success','ItemDeleteSuccessfully', 'success')
}

onMounted(async() => {
    const res = await quizService.getSentQuizes()
    dataTable.value = res
    isLoading.value = false 
}) 
</script>

<template>
    <el-card shadow="hover" class="card-listquiz" v-loading="isLoading">
        <template #header>
            <h3>{{$t('SentQuizzesList')}}</h3>
        </template>
        <QuizesList :data="dataTable" @delete-sent-quiz="deleteSentQuizHandle"/> 
    </el-card>
</template>