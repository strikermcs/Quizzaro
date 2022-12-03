<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMailStore } from '@/store/mail'
import { IResultUserDataTable } from '@/interfaces/quiz.interfaces';
import QuizesListMail from '@/components/MainPage/QuizesList/QuizesListMail.vue';

const data = ref<IResultUserDataTable[]>([])
const mailStore = useMailStore()

onMounted(() => {
    data.value = mailStore.mail as IResultUserDataTable[]
})

</script>


<template>
    <el-card shadow="hover" class="card-listquiz">
        <template #header>
            <h3>{{$t('UserMail')}}</h3>
        </template>
        <QuizesListMail :data="data"/>
    </el-card>
</template>