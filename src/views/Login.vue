<script setup lang="ts">
import AuthTemplate from '../components/auth/authTemplate.vue'
import dog from '../assets/dog2.jpeg'
import { reactive } from 'vue'

const loginForm = reactive({
    email: '',
    password: ''
})

const onSubmit = () => {
    console.log(loginForm)
}

</script>


<template>
     <AuthTemplate>
        <template #card-header>Welcome Back!</template>
        <template #content-image>
            <el-image style="height: 400px" :src="dog"/>
        </template>
        <template #content-form>
            <el-form
                label-position="top"
                label-width="100px"
                :model="loginForm"
                style="min-width: 300px"
                >
                    <el-form-item label="Email:">
                        <el-input 
                        type="email"
                        placeholder="Please input email:"
                        v-model="loginForm.email"/>
                    </el-form-item>
                    <el-form-item label="Password:">
                        <el-input 
                        type="password"
                        placeholder="Please input password"
                        v-model="loginForm.password"
                        show-password
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Login</el-button>
                    </el-form-item>
                </el-form>
        </template>
        <template #content-link>
            <RouterLink to="/user/register">Create an Account!</RouterLink>
        </template>
    </AuthTemplate>
</template>