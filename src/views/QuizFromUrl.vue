<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElButton, ElCard, ElForm, ElFormItem, ElInput, FormInstance, FormRules } from 'element-plus'
import { useI18n } from "vue-i18n";
import QuizPlay from '@/components/MainPage/QuizPlay/QuizPlay.vue';
import { IQuizDb, IResultDataTableItem, IResultUserDataTable } from '@/interfaces/quiz.interfaces';
import quizService from '@/services/quiz.service';
import { useNotificationStore } from '@/store/notification';

const { t } = useI18n()

const route = useRoute()
const enterUsernameFormRef = ref<FormInstance>()
const quiz = ref<IQuizDb>()
const isQuizPlay = ref(false)
const isLoading = ref(true)
const notify = useNotificationStore()

const enterUsername = reactive({
    username: '',
})

const rules = reactive<FormRules>({
    username: [
        {required: true, message: t('TheFieldMustNotBeEmpty'), trigger: 'change' }
    ]
})


const onSubmit = async (formEl: FormInstance | undefined) => {
    console.log(formEl)
    if(!formEl) return
    await formEl.validate((valid, fields) => {
        if(valid){
           isQuizPlay.value = true
           console.log('uidgiqwg')
        }
    })
}


const quizeFinishHandle = async(resultQuiz: IResultDataTableItem[]) => {
  isLoading.value = true
  const rezult: IResultUserDataTable = {
    quizRezult: resultQuiz,
    username: enterUsername.username,
    userId: quiz.value?.userId as string,
    isRead: false
  } 
  await quizService.sentResultQuizToUser(rezult)
  isLoading.value = false
  notify.SetNofication("Success", "AnswersQuizSendToUser", 'success')
}

onMounted(async() => {
    quiz.value = await quizService.getQuizById(route.params.id as string)
    isLoading.value = false
})
</script>

<template>
    <div class="content">
        <el-card shadow="hover" class="card-listquiz" v-loading="isLoading" >
            <template #header>
                <h3>{{$t('UrlQuizHeader')}}</h3>
            </template>
            <el-form
            ref="enterUsernameFormRef"
            label-position="top"
            label-width="100px"
            :model="enterUsername"
            class="add-form"
            :rules = "rules"
            v-if="!isQuizPlay"
            >
                <el-form-item :label="$t('EnterUsername')" prop="username">
                    <el-input  v-model="enterUsername.username"/>
                </el-form-item>
                <el-form-item>
                    <div class="submit-button">
                        <el-button type="primary" @click="onSubmit(enterUsernameFormRef)">{{$t('StartUrlQuiz')}}</el-button>
                    </div>    
                </el-form-item>
            </el-form>
            <QuizPlay :quiz="(quiz as IQuizDb)" @quize-finish="quizeFinishHandle" v-else/>
        </el-card>      
    </div>
</template>

<style scoped>
.content {
    max-width: 1000px;
    padding: 40px 0px 40px 0px;
    margin: 0 auto; 
}
</style>
