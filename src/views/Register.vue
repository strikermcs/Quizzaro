<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import dog from '../assets/dog1.jpeg'
import AuthTemplate from '../components/auth/authTemplate.vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { useI18n } from "vue-i18n";

    const { t } = useI18n()
    const router = useRouter()
    const userStore = useUserStore()
    const registerFormRef = ref<FormInstance>() 

    const registerForm = reactive({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    })


    const checkPassword = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('Please input the password again'))
        } else if (value !== registerForm.password) {
            callback(new Error(t('rePassword-sameAs')))
        } else {
            callback()
        }
    }

    const rules = reactive<FormRules>({
        username: [
            {
                type: 'string',
                required: true,
                message: t('username-required')
            }
        ],
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
        ],
        rePassword: [
            {
                type: 'string',
                required: true,
                message: t('password-required'),
                trigger: 'change'
            },

            {
                validator: checkPassword,
                trigger: 'change'
            }
        ]
    })
   

    
    const onSubmit = async(formEl: FormInstance | undefined) => {
        if(!formEl) return
        await formEl.validate((valid,fields) => {
            if(valid) {
                userStore.register(registerForm.username, registerForm.email, registerForm.password)
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
        <template #card-header>{{$t('RegisterCardHeader')}}</template>
        <template #content-image>
            <el-image style="height: 400px" :src="dog"/>
        </template>
        <template #content-form>
            <el-form
                ref="registerFormRef"
                label-position="top"
                label-width="100px"
                :model="registerForm"
                :rules="rules"
                style="min-width: 300px"
                >
                    <el-form-item :label="$t('RegisterCardUsernameFieldLabel')" prop="username">
                        <el-input 
                        type="text"
                        :placeholder="$t('RegisterCardUsernameFieldPlaceholder')"
                        v-model="registerForm.username"
                        />
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardEmailFieldLabel')" prop="email">
                        <el-input 
                        type="email"
                        :placeholder="$t('RegisterCardEmailFieldPlaceholder')"
                        v-model="registerForm.email"
                        />
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardPasswordFieldLabel')" prop="password">
                        <el-input 
                        type="password"
                        :placeholder="$t('RegisterCardPasswordFieldPlaceholder')"
                        v-model="registerForm.password"
                        show-password
                        />
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardRepeadPasswordFieldLabel')" prop="rePassword">
                        <el-input  
                        type="password" 
                        :placeholder="$t('RegisterCardRepeadPasswordFieldPlaceholder')"
                        v-model="registerForm.rePassword"
                        show-password/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit(registerFormRef)">{{$t('RegisterCardSubmitButton')}}</el-button>
                    </el-form-item>
                </el-form>
        </template>
        <template #content-link>
            <RouterLink to="/user/login">{{$t('RegisterCardLoginLink')}}</RouterLink>
        </template>
    </AuthTemplate>
</template>


