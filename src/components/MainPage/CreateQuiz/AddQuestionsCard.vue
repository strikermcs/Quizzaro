<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import MainCard from './MainCard.vue'
import { Delete } from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n";
import { useNotificationStore } from '@/store/notification';
import { IAnswer, IQuestion } from '@/interfaces/quiz.interfaces';
import { validateAnswers } from '@/common/validations';

const { t } = useI18n()

interface ITree {
  label: string
  children?: ITree[]
}


const props = defineProps(['quizName'])
const emit  = defineEmits(['publishQuiz'])
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

const quizQuestions = reactive<IQuestion[]>([])

const addQuestionForm = reactive<IQuestion>({
    question: '',
    answers: []
})

const clearQuestionForm = (): void => {
    addQuestionForm.answers = []
    addQuestionForm.question = ''
    isPreview.value = false
}


const addAnswerHandle = (): void => {
    addQuestionForm.answers.push(
        {
            key: Date.now(), 
            answer: '', 
            correctAnswer: false 
        })
}

const removeAnswerItem = (item : IAnswer): void => {
    const index = addQuestionForm.answers.indexOf(item)
    if(index !== -1) {
        addQuestionForm.answers.splice(index, 1)
    }
}

const addQuizQuestion = (el : FormInstance | undefined): void => {
    if (!el) return

    el.validate((valid) => {
        if(valid && validateAnswers(addQuestionForm.answers)) {
            quizQuestions.push({question: addQuestionForm.question, answers: addQuestionForm.answers})
            treeData[0].children?.push({label: `${t('Question')} ${treeData[0].children.length + 1}`})
            clearQuestionForm()
        }
    })
}


const handleNodeClick = (data: ITree): void => {
    const index = treeData[0].children!.indexOf(data)

    if(index !== -1) {
        currentQuestionIndex.value = -1
        currentQuestionIndex.value = index
        addQuestionForm.question = quizQuestions[index].question
        addQuestionForm.answers = quizQuestions[index].answers
        isPreview.value = true
    } else {
        clearQuestionForm()
    }
   
}

const EditQuestionHandler = (): void => {
    if(currentQuestionIndex.value !== -1) {
        quizQuestions[currentQuestionIndex.value].question = addQuestionForm.question
        quizQuestions[currentQuestionIndex.value].answers = addQuestionForm.answers
        notify.SetNofication('Success', 'EditQuizQuestionSuccess', 'success')
    }
}

const DeleteQuestionHandler = (): void => {
    if(currentQuestionIndex.value !== -1) {
        quizQuestions.splice(currentQuestionIndex.value, 1)
        treeData[0].children!.pop()
        clearQuestionForm()
        notify.SetNofication('Success', 'DeleteQuizQuestionSuccess', 'success')
    }
}

const publishQuizHandle = (): void => {
    emit('publishQuiz', { ...quizQuestions })
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
                    <el-form-item 
                    :label="$t('InputQuizQuestion')" 
                    prop="question"
                    :rules="[
                        {
                            required: true,
                            message: $t('TheFieldMustNotBeEmpty'),
                            trigger: 'blur',
                        },
                        {
                            min: 10,
                            message: $t('TheQuestionIsVeryShort'),
                            trigger: ['blur', 'change'],
                        },
                     ]"
                    >
                        <el-input type="textarea" v-model="addQuestionForm.question"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addAnswerHandle">{{$t('AddQuizAnswerButton')}}</el-button>
                    </el-form-item>
                    <TransitionGroup name="list" tag="p">
                        <el-form-item
                        v-for="answer in addQuestionForm.answers" :key="answer.key"
                        class="answer-item-form" 
                        :label="$t('AddQuizAnswer')" 
                        >
                            <div class="answer-item">
                                <el-switch v-model="answer.correctAnswer"
                                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" 
                                :active-text="$t('Correct')" 
                                :inactive-text="$t('InCorrect')" validate-event="false"/>
                                <el-input type="text" v-model="answer.answer" />
                                <el-button type="danger" :icon="Delete" circle @click="removeAnswerItem(answer)" />
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
                <div class="publish-quiz" v-if="quizQuestions.length >= 3">
                    <el-button type="success" @click="publishQuizHandle">{{$t('PublishQuiz')}}</el-button>
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