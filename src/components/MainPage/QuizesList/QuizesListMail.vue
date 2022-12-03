<script setup lang="ts">
import { ref } from 'vue'
import { IResultUserDataTable, IResultDataTableItem } from '@/interfaces/quiz.interfaces';
import QuizResultBoard from '../QuizPlay/QuizResultBoard.vue';

const props = defineProps<{data: IResultUserDataTable[]}>()
const isResultBoard = ref(false)
const resultsBoard = ref<IResultDataTableItem[]>([])

const handleOpen = (index: number, row: number) => {
    resultsBoard.value = props.data[index].quizRezult
    isResultBoard.value = true
}

const refreshHandle = () => {
    isResultBoard.value = false
}
</script>

<template>
    <el-table :data="data" style="width: 100%" v-if="!isResultBoard">
        <el-table-column :label="$t('MailQuizUsername')" prop="username" />
        <el-table-column align="right">
      <template #default="scope">
        <div class="rigth-row">
            <el-button size="small"
            @click="handleOpen(scope.$index, scope.row)"
            >{{$t('MailOpen')}}</el-button>
            <div class="indicator"
            :class="{'green': scope.row.isRead}"
            ></div>
        </div> 
      </template>
    </el-table-column>
  </el-table>
  <QuizResultBoard :results="resultsBoard" v-else/>
  <RefreshButton @click="refreshHandle"/>
</template>

<style scoped>
.rigth-row {
    display: flex;
    flex-direction:row;
    gap: 20px;
    justify-content: end;
    align-items: center;
}

.indicator {
    width: 15px;
    height: 15px;
    border: 1px solid grey;
    border-radius: 50%;
    background-color: red;
}

.green {
    background-color: rgb(28, 172, 28);
}

</style>