<script setup lang="ts">
import { auth } from "../firebase/firebase";
import { useRouter } from 'vue-router'

const router = useRouter()

const singOutHandler = () => {
    router.push('/welcome')
    auth.signOut()  
}

</script>


<template>
   <el-button @click="singOutHandler">singOut</el-button>
</template>