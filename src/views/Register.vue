<script setup lang="ts">
import { reactive } from 'vue'
import dog from '../assets/dog1.jpeg'
import AuthTemplate from '../components/auth/authTemplate.vue'

    const registerForm = reactive({
        email: '',
        password: '',
        rePassword: ''
    })

    const onSubmit = () => {
        console.log(registerForm)
    }

</script>

<template>
    <AuthTemplate>
        <template #card-header>{{$t('RegisterCardHeader')}}</template>
        <template #content-image>
            <el-image style="height: 400px" :src="dog"/>
        </template>
        <template #content-form>
            <el-form
                label-position="top"
                label-width="100px"
                :model="registerForm"
                style="min-width: 300px"
                >
                    <el-form-item :label="$t('RegisterCardEmailFieldLabel')">
                        <el-input 
                        type="email"
                        :placeholder="$t('RegisterCardEmailFieldPlaceholder')"
                        v-model="registerForm.email"/>
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardPasswordFieldLabel')">
                        <el-input 
                        type="password"
                        :placeholder="$t('RegisterCardPasswordFieldPlaceholder')"
                        v-model="registerForm.password"
                        show-password
                        />
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardRepeadPasswordFieldLabel')">
                        <el-input  
                        type="password" 
                        :placeholder="$t('RegisterCardRepeadPasswordFieldPlaceholder')"
                        v-model="registerForm.rePassword"
                        show-password/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">{{$t('RegisterCardSubmitButton')}}</el-button>
                    </el-form-item>
                </el-form>
        </template>
        <template #content-link>
            <RouterLink to="/user/login">{{$t('RegisterCardLoginLink')}}</RouterLink>
        </template>
    </AuthTemplate>
</template>


