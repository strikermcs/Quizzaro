<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FindAndChooseUsers from '@/components/MainPage/SendQuiz/FindUsers/FindAndChoose.vue'
import FindAndChooseUserMobile from '@/components/MainPage/SendQuiz/FindUsers/FindAndChooseMobile.vue';
import UsersService from '@/services/users.service';
import { IUser } from '@/interfaces/user.interfaces';
import { getItems } from '@/utils/quiz';

const props = defineProps(['quiz']) 
const loading = ref(true)

let users: IUser[] | undefined
let usersChoose: IUser[]

const updateUsers = (users: IUser[]) => {
    usersChoose = users
    console.log(usersChoose)
}

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
                <div class="find-users">
                    <FindAndChooseUsers 
                    :users="getItems(users as IUser[])"
                    @users-choosen="updateUsers"  
                    />
                </div>
                <div class="find-users-mobile">
                    <FindAndChooseUserMobile 
                    :users="getItems(users as IUser[])"
                    @users-choosen="updateUsers"  
                    />
                </div>         
            </div>
            <div class="column send-button">
                <el-button type="primary">{{$t('SendQuizToUsersButton')}}</el-button>
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.send-button {
    display: flex;
    align-items: flex-end;
}

.find-users-mobile {
    display: none;
}

@media screen and (max-width: 815px){
    .find-users-mobile {
        display: block;
    }

    .find-users {
        display: none;
    }
}
</style>