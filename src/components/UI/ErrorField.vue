<script setup lang="ts">
import { ErrorObject } from '@vuelidate/core';
import { defineProps } from 'vue'


const props = defineProps({
    errors: Array<ErrorObject>
})

</script>

<template>
     <div class="error-block">
        <span class="error" v-for="error in errors"
        :key="error.$uid"
        >{{$t(error.$uid)}}</span>   
    </div>  
</template>

<style scoped>
    .error {
        display: block;
        color: red;
        line-height: 1.3;
    }

    .error-block {
        display:flex;
        flex-direction: column;
    }

</style>