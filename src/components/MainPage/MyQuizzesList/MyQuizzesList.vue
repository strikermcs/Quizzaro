<script lang="ts" setup>
import { computed, ref, onMounted, reactive } from 'vue'
import quizService from '@/services/quiz.service'
import { useUserStore } from '@/store/user'
import { IQuizDb } from '@/interfaces/quiz.interfaces'
import { VideoPlay, Delete, Edit, Promotion } from '@element-plus/icons-vue'
import QuestionDialog from '@/components/Dialogs/QuestionDialog.vue'
import { useNotificationStore } from '@/store/notification'


interface ICommand {
  command: string,
  data: IQuizDb
}

const user = useUserStore()
const search = ref('')
const loading = ref(true)
const dialogVisible = ref(false)
const notify = useNotificationStore()

const emit = defineEmits<{(e: 'sendCommand', command: ICommand): void}>()

let quizId: string

const dataQuizzes = reactive<{Quizzes: IQuizDb[]}>({Quizzes : [] })


const filterTableData = computed(() =>
  dataQuizzes.Quizzes.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)


onMounted(async() => {
    const result = await quizService.getQuizzesByUser(user.user?.uid!)
    dataQuizzes.Quizzes.push(...result)
    loading.value = false
})

const handleEdit = async (index: number, row: IQuizDb) => {
  emit('sendCommand', {command: 'EditQuiz', data: row})
}
const handleDelete = (index: number, row: IQuizDb) => {
  quizId = row.id as string
  dialogVisible.value = true
}

const handleTest = async (index: number, row: IQuizDb) => { 
  emit('sendCommand', {command: 'TestQuiz', data: row})
}

const handleSend = async (index: number, row: IQuizDb) => { 
  emit('sendCommand', {command: 'SendQuiz', data: row})
}

 const dialogAnswer = async (answer: boolean) => {
    dialogVisible.value = false
    if(answer) {
      loading.value = true
      await quizService.deleteQuizById(quizId)
      dataQuizzes.Quizzes = dataQuizzes.Quizzes.filter(q => q.id !== quizId)
      notify.SetNofication('Success', 'ItemDeleteSuccessfully', 'success')
      loading.value = false
    }
 }

</script>

<template>
   <el-table :data="filterTableData" style="width: 100%" v-loading="loading">
    <el-table-column :label="$t('MyQuizzesTableItemName')" prop="name" />
    <el-table-column align="right" :min-width="140">
      <template #header>
        <el-input v-model="search" size="small" :placeholder="$t('MyQuizzesTableSearchPlaceholder')" />
      </template>
      <template #default="scope">
        <div class="control-buttons">
            <el-button type="primary" circle @click="handleEdit(scope.$index, scope.row)" :icon="Edit"/>       
            <el-button type="success" circle @click="handleTest(scope.$index, scope.row)" :icon="VideoPlay"/>
            <el-button type="warning" circle @click="handleSend(scope.$index, scope.row)" :icon="Promotion"/>
            <el-button type="danger" circle :icon="Delete" @click="handleDelete(scope.$index, scope.row)" />
        </div>
      </template>
    </el-table-column>
  </el-table>
  <QuestionDialog :visible="dialogVisible" :text="$t('QuestionDoYouReallyWantToDelete')" @sendAnswer="dialogAnswer"/>
</template>


<style scoped>
.control-buttons {
    display: flex;
    justify-content: end;
}

</style>