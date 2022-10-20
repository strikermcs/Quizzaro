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
        <template #card-header>Create an Account</template>
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
                    <el-form-item label="Email:">
                        <el-input 
                        type="email"
                        placeholder="Please input email:"
                        v-model="registerForm.email"/>
                    </el-form-item>
                    <el-form-item label="Password:">
                        <el-input 
                        type="password"
                        placeholder="Please input password"
                        v-model="registerForm.password"
                        show-password
                        />
                    </el-form-item>
                    <el-form-item label="Repead Password:">
                        <el-input  
                        type="password" 
                        placeholder="Please repead password"
                        v-model="registerForm.rePassword"
                        show-password/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Register</el-button>
                    </el-form-item>
                </el-form>
        </template>
        <template #content-link>
            <RouterLink to="/user/login">Already have an account? Login!</RouterLink>
        </template>
    </AuthTemplate>
</template>


