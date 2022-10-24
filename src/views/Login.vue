<script setup lang="ts">
import AuthTemplate from '../components/auth/authTemplate.vue'
import dog from '../assets/dog2.jpeg'
import { reactive, watch, ref } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { useI18n } from "vue-i18n";

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const loginFormRef = ref<FormInstance>()

const loginForm = reactive({
    email: '',
    password: ''
})


const rules = reactive<FormRules>({
    email: [
        {
            type: 'email', 
            required: true,
            message: t('email-email'),
            trigger: 'change',
        }
    ],
    password: [
        {
            type: 'string',
            required: true,
            message: t('password-required'),
            trigger: 'change'
        },
        
        {
            min: 6, 
            message: t('password-minLength'),
            trigger: 'change' 
        }
    ]
})


const onSubmit = async (formEl: FormInstance | undefined) => {
    if(!formEl) return
    await formEl.validate((valid, fields) => {
        if(valid){
            userStore.login(loginForm.email, loginForm.password)
        }
    })
}

watch(() => userStore.user, (user) => {
    if(user){
        router.push('/')
    }
})

</script>


<template>
     <AuthTemplate>
        <template #card-header>{{$t('LoginCardHeader')}}</template>
        <template #content-image>
            <el-image style="height: 400px" :src="dog"/>
        </template>
        <template #content-form>
            <el-form
                ref="loginFormRef"
                label-position="top"
                label-width="100px"
                :model="loginForm"
                :rules="rules"
                style="min-width: 300px"
                >
                    <el-form-item :label="$t('LoginCardEmailFieldLabel')"  prop="email">
                        <el-input 
                        type="email"
                        :placeholder="$t('LoginCardEmailFieldPlaceholder')"
                        v-model="loginForm.email"/>
                    </el-form-item>
                    <el-form-item :label="$t('LoginCardPasswordFieldLabel')"  prop="password">
                        <el-input 
                        type="password"
                        :placeholder="$t('LoginCardPasswordFieldPlaceholder')"
                        v-model="loginForm.password"
                        show-password
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit(loginFormRef)">{{$t('LoginCardSubmitButton')}}</el-button>
                    </el-form-item>
                </el-form>
        </template>
        <template #content-link>
            <RouterLink to="/user/register">{{$t('LoginCardRegisterLink')}}</RouterLink>
        </template>
    </AuthTemplate>
</template>