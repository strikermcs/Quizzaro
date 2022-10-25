<script setup lang="ts">
import { reactive, ref } from 'vue'
import MainCard from './MainCard.vue'
import img from '@/assets/quiz1.png'
import type { FormInstance, FormRules } from 'element-plus'
import { useI18n } from "vue-i18n";

const { t } = useI18n()
const createQuizFormRef = ref<FormInstance>()

const emit =  defineEmits(['createQuiz'])

const createQuizForm = reactive({
    quizName: '',
    quizTheme: ''
})

const rules = reactive<FormRules>({
    quizName: [
        {required: true, message: t('TheFieldMustNotBeEmpty'), trigger: 'change' },
        {min: 4, message: t('NameMinLength'), trigger: 'change'}
    ],
    quizTheme: [
        {required: true, message: t('TheFieldMustNotBeEmpty'), trigger: 'change' },
        {min: 4, message: t('NameMinLength'), trigger: 'change'}
    ]
})

const onSubmit = async (formEl: FormInstance | undefined) => {
    if(!formEl) return
    await formEl.validate((valid, fields) => {
        if(valid){
           emit('createQuiz', { ...createQuizForm })
        }
    })
}
</script>

<template>
    <MainCard>
        <template #first-column>
            <div class="image">
                <el-image :src="img" fit="contain" class="image-card" />
            </div>
        </template>
        <template #second-column>
            <el-form
                ref="createQuizFormRef"
                label-position="top"
                label-width="100px"
                :model="createQuizForm"
                class="add-form"
                :rules = "rules"
                >
                    <el-form-item :label="$t('CreateNewQuizName')" prop="quizName">
                        <el-input  v-model="createQuizForm.quizName"/>
                    </el-form-item>
                    <el-form-item :label="$t('CreateNewQuizTheme')" prop="quizTheme">
                        <el-input v-model="createQuizForm.quizTheme"/>
                    </el-form-item>
                    <el-form-item>
                        <div class="submit-button">
                            <el-button type="primary" @click="onSubmit(createQuizFormRef)">{{$t('Create')}}</el-button>
                        </div>    
                    </el-form-item>
                </el-form>
        </template>
    </MainCard>
</template>

<style scoped>
    .submit-button {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .image-card {
        width: 200px;
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

   
</style>