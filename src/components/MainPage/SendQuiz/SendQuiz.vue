<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FindAndCheckUsers from '@/components/common/FindAndCheck.vue'
import UsersService from '@/services/users.service';
import { IUser } from '@/interfaces/user.interfaces';
import { getItems } from '@/utils/quiz';

const props = defineProps(['quiz']) 
const loading = ref(true)

let users: IUser[] | undefined


onMounted( async() => {
  users = await UsersService.getAllUsers()
  loading.value = false 
})

</script>

<template>
    <div class="send-quiz-header">
        <h3>{{$t('SendQuizHeader')}}</h3>
    </div> 
    <div class="sendQuiz" v-loading="loading">
        <div class="column">
            <div class="users-add-header">{{$t('SendQuizSelectUsers')}}</div>
            <FindAndCheckUsers :items="getItems(users as IUser[])"/>
        </div>
        <div class="column">
            <div class="send-quiz-settings">
                fdjhkldjflkhjdfjgh
            </div>
        </div>
    </div>
</template>

<style scoped>
.send-quiz-header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.sendQuiz {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>