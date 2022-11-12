<script setup lang="ts">
import { computed } from 'vue'
import { IResultDataTableItem } from '@/interfaces/quiz.interfaces';
import { SuccessFilled, CircleCloseFilled } from '@element-plus/icons-vue'

interface IProps {
    results: IResultDataTableItem[],
}

const props = defineProps<IProps>()

const getOverallResult = computed(() => {
  let count: number = 0
  props.results.forEach(r => {
    count += r.result
  })
  return Math.ceil(count / props.results.length * 100)
})

</script>


<template>
  <div class="header-result"><h3>{{$t('QuizResultDashboardHeader')}}</h3></div>
   <el-table :data="results" style="width: 100%">
    <el-table-column prop="question" :label="$t('ResultTableQuestionColumn')" width="180" />
    <el-table-column prop="rigthAnswers" :label="$t('ResultTableRigthAnswersColumn')" width="180" />
    <el-table-column prop="userAnswers" :label="$t('ResultTableUserAnswersColumn')" />
    <el-table-column align="right">
      <template #header>
        {{$t('ResultTableResultColumn')}}
      </template>
      <template #default="scope">
        <el-icon :size="25" color="red" v-if="scope.row.result === 0"><CircleCloseFilled /></el-icon>
        <el-icon :size="25" color="green" v-if="scope.row.result === 1">
          <SuccessFilled />
        </el-icon>
        <span v-else-if="scope.row.result < 1 && scope.row.result != 0" class="result-percent">
          {{scope.row.result * 100 + "%"}}</span>  
      </template>
    </el-table-column>
  </el-table>
  <div class="common-result">
    <div>{{$t('QuizCommonResult')}}<span>{{" " + getOverallResult + "%"}}</span></div>
  </div>
</template>

<style scoped>
.header-result {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.result-percent {
  font-size: 16px;
  color: chocolate;
}

.common-result {
  display: flex;
  justify-content: end;
  padding-top: 30px;
  font-size: 17px;
  font-weight: bold;
  color: blue;
}
</style>