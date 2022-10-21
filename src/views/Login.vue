<script setup lang="ts">
import AuthTemplate from '../components/auth/authTemplate.vue'
import dog from '../assets/dog2.jpeg'
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import ErrorField from '../components/UI/ErrorField.vue'

const loginForm = reactive({
    email: '',
    password: ''
})

const rules = computed(() => {
    return {
        email: { required, email },
        password: { required, minLength: minLength(6) }
    }
})

const v$ = useVuelidate(rules, loginForm)

const onSubmit = async () => {
    const result = await v$.value.$validate()
    if(result){
        alert('ok')
    }else {
        alert('error')
    }
}

</script>


<template>
     <AuthTemplate>
        <template #card-header>{{$t('LoginCardHeader')}}</template>
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
                    <el-form-item :label="$t('LoginCardEmailFieldLabel')">
                        <el-input 
                        type="email"
                        :placeholder="$t('LoginCardEmailFieldPlaceholder')"
                        v-model="loginForm.email"/>
                        <ErrorField :errors="v$.email.$errors"/>
                    </el-form-item>
                    <el-form-item :label="$t('LoginCardPasswordFieldLabel')">
                        <el-input 
                        type="password"
                        :placeholder="$t('LoginCardPasswordFieldPlaceholder')"
                        v-model="loginForm.password"
                        show-password
                        />
                        <ErrorField :errors="v$.password.$errors"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">{{$t('LoginCardSubmitButton')}}</el-button>
                    </el-form-item>
                </el-form>
        </template>
        <template #content-link>
            <RouterLink to="/user/register">{{$t('LoginCardRegisterLink')}}</RouterLink>
        </template>
    </AuthTemplate>
</template>