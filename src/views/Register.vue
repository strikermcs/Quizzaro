<script setup lang="ts">
import { reactive, computed, watch } from 'vue'
import dog from '../assets/dog1.jpeg'
import AuthTemplate from '../components/auth/authTemplate.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength } from '@vuelidate/validators'
import ErrorField from '../components/UI/ErrorField.vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

    const router = useRouter()
    const userStore = useUserStore() 

    const registerForm = reactive({
        email: '',
        password: '',
        rePassword: ''
    })

    const rules = computed(() => {
        return {
            email: { required, email },
            password: { required, minLength: minLength(6) },
            rePassword: { required, sameAs: sameAs(registerForm.password) }
        }
    })

    const v$ = useVuelidate(rules, registerForm)

    const onSubmit = async() => {
        const result = await v$.value.$validate()
        if(result) {
           userStore.register(registerForm.email, registerForm.password)
        }
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
                label-position="top"
                label-width="100px"
                :model="registerForm"
                style="min-width: 300px"
                >
                    <el-form-item :label="$t('RegisterCardEmailFieldLabel')">
                        <el-input 
                        type="email"
                        :placeholder="$t('RegisterCardEmailFieldPlaceholder')"
                        v-model="registerForm.email"
                        />
                       <ErrorField :errors="v$.email.$errors"/>
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardPasswordFieldLabel')">
                        <el-input 
                        type="password"
                        :placeholder="$t('RegisterCardPasswordFieldPlaceholder')"
                        v-model="registerForm.password"
                        show-password
                        />
                        <ErrorField :errors="v$.password.$errors"/>
                    </el-form-item>
                    <el-form-item :label="$t('RegisterCardRepeadPasswordFieldLabel')">
                        <el-input  
                        type="password" 
                        :placeholder="$t('RegisterCardRepeadPasswordFieldPlaceholder')"
                        v-model="registerForm.rePassword"
                        show-password/>
                        <ErrorField :errors="v$.rePassword.$errors"/>  
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


