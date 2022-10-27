<script lang="ts" setup>
import { computed, ref, onMounted, reactive } from 'vue'
import quizService from '@/services/quiz.service'
import { useUserStore } from '@/store/user'
import { IQuizDb } from '@/interfaces/quiz.interfaces'
import { VideoPlay, Delete, Edit } from '@element-plus/icons-vue'

const user = useUserStore()
const search = ref('')
const loading = ref(true)


const Quizzes = reactive<IQuizDb[]>([])


const filterTableData = computed(() =>
  Quizzes.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)


onMounted(async() => {
    const result = await quizService.getQuizzesByUser(user.user?.uid!)
    Quizzes.push(...result)
    loading.value = false
})

const handleEdit = async (index: number, row: IQuizDb) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: IQuizDb) => {
  console.log(index, row)
}

const handleTest = async (index: number, row: IQuizDb) => { 
   console.log(index, row)
 }

</script>

<template>
   <el-table :data="filterTableData" style="width: 100%" v-loading="loading">
    <el-table-column :label="$t('MyQuizzesTableItemName')" prop="name" />
    <el-table-column :label="$t('MyQuizzesTableItemTheme')" prop="theme" class="theme-column"/>
    <el-table-column align="right" :min-width="140">
      <template #header>
        <el-input v-model="search" size="small" :placeholder="$t('MyQuizzesTableSearchPlaceholder')" />
      </template>
      <template #default="scope">
        <div class="control-buttons">
            <el-button type="primary" circle @click="handleEdit(scope.$index, scope.row)" :icon="Edit"/>       
            <el-button type="success" circle @click="handleTest(scope.$index, scope.row)" :icon="VideoPlay"/>
            <el-button type="danger" circle :icon="Delete" @click="handleDelete(scope.$index, scope.row)" />
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>


<style scoped>
.control-buttons {
    display: flex;
    justify-content: end;
}

</style>