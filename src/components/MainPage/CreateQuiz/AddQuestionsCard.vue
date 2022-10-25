<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import MainCard from './MainCard.vue'
import { Delete } from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n";
import { useNotificationStore } from '../../../store/notification';

const { t } = useI18n()

interface ITree {
  label: string
  children?: ITree[]
}

interface IAnswer {
    key: number
    answer: string,
    correctAnswer: boolean
}

interface IAddQuestionForm {
    question: string
    answers: IAnswer[]
}  

const props = defineProps(['quizName'])
const addQuestionFormRef = ref<FormInstance>()
const isPreview = ref(false)
const notify = useNotificationStore()
const currentQuestionIndex = ref(-1)

const TreeProps = {
  children: 'children',
  label: 'label',
}

const treeData =  reactive<ITree[]>(
    [
        {
            label: props.quizName,
            children: []
        }
    ]
)

const quizQuestions = reactive<IAddQuestionForm[]>([])

const addQuestionForm = reactive<IAddQuestionForm>({
    question: '',
    answers: []
})



const addAnswerHandle = () => {
    addQuestionForm.answers.push(
        {
            key: Date.now(), 
            answer: '', 
            correctAnswer: false 
        })
}

const removeAnswerItem = (item : IAnswer) => {
    const index = addQuestionForm.answers.indexOf(item)
    if(index !== -1) {
        addQuestionForm.answers.splice(index, 1)
    }
}

const addQuizQuestion = (el : FormInstance | undefined) => {
    if (!el) return
    quizQuestions.push({question: addQuestionForm.question, answers: addQuestionForm.answers})
    treeData[0].children?.push({label: `${t('Question')} ${treeData[0].children.length + 1}`})
    addQuestionForm.answers = []
    addQuestionForm.question = ''
}


const handleNodeClick = (data: ITree) => {
    const index = treeData[0].children!.indexOf(data)

    if(index !== -1) {
        currentQuestionIndex.value = -1
        currentQuestionIndex.value = index
        addQuestionForm.question = quizQuestions[index].question
        addQuestionForm.answers = quizQuestions[index].answers
        isPreview.value = true
    } else {
        addQuestionForm.answers = []
        addQuestionForm.question = ''
        isPreview.value = false
    }
   
}

const EditQuestionHandler = () => {
    if(currentQuestionIndex.value !== -1) {
        quizQuestions[currentQuestionIndex.value].question = addQuestionForm.question
        quizQuestions[currentQuestionIndex.value].answers = addQuestionForm.answers
        notify.SetNofication('Succes', t('EditQuizQuestionSuccess'), 'success')
    }
}

const DeleteQuestionHandler = () => {
    if(currentQuestionIndex.value !== -1) {
        quizQuestions.splice(currentQuestionIndex.value, 1)
        treeData[0].children!.pop()
        addQuestionForm.answers = []
        addQuestionForm.question = ''
        isPreview.value = false
    }
}

</script>

<template>
    <MainCard>
        <template #first-column>
            <div class="questions-tree">
                <el-tree :data="treeData" :props="TreeProps" @node-click="handleNodeClick" />
            </div>
        </template>
        <template #second-column>
            <el-form
                ref="addQuestionFormRef"
                label-position="top"
                label-width="100px"
                :model="addQuestionForm"
                >
                    <el-form-item :label="$t('InputQuizQuestion')" prop="quizName">
                        <el-input type="textarea" v-model="addQuestionForm.question"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addAnswerHandle">{{$t('AddQuizAnswerButton')}}</el-button>
                    </el-form-item>
                    <TransitionGroup name="list" tag="p">
                        <el-form-item
                        class="answer-item-form" 
                        :label="$t('AddQuizAnswer')" 
                        prop="quizTheme"
                        v-for="(answer, index) in addQuestionForm.answers" :key="answer.key">
                            <div class="answer-item">
                                <el-switch v-model="answer.correctAnswer" 
                                :active-text="$t('Correct')" 
                                :inactive-text="$t('InCorrect')" />
                                <el-input  v-model="answer.answer"/>
                                <el-button type="danger" :icon="Delete" circle @click="removeAnswerItem(answer)"/>
                            </div>
                        </el-form-item>
                    </TransitionGroup>
                    <el-form-item v-if="addQuestionForm.answers.length >= 2">
                        <el-button 
                        type="primary"
                         @click="addQuizQuestion(addQuestionFormRef)"
                         v-if="!isPreview"
                         >{{$t('addQuizQuestion')}}</el-button>
                        <div class="buttons-preview" v-if="isPreview">
                            <el-button type="warning" @click="EditQuestionHandler">{{$t('EditQuizQuestion')}}</el-button>
                            <el-button type="danger" @click="DeleteQuestionHandler">{{$t('DeleteQuizQuestion')}}</el-button>
                        </div>
                    </el-form-item>
                </el-form>
                <div class="publish-quiz" v-if="addQuestionForm.answers.length >= 2">
                    <el-button type="success">{{$t('PublishQuiz')}}</el-button>
                </div>
        </template>
    </MainCard>
</template>

<style scoped>

.answer-item {
    width: 100%;
    display: flex;
    gap: 10px;
}

.publish-quiz {
    display: flex;
    justify-content: end;
    border-top: 1px solid rgb(212, 212, 212);
    padding-top: 10px;
}

.buttons-preview {
    width: 100%;
    display: flex;
    justify-content: center;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>