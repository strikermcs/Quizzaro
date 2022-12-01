<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue';
import { IUserItem } from '@/interfaces/user.interfaces';
import { UserItemsToUsers } from '@/utils/quiz';

const props = defineProps<{users: IUserItem[]}>()
const emit = defineEmits(['usersChoosen'])
const searchItem = ref<string>('')
const checkUsers = ref([])

const listUsers = computed(() => {
    if(searchItem.value.trim() != ''){
        return props.users.filter(item => item.username.toLowerCase().includes(searchItem.value.toLowerCase())) 
    }
    return props.users
})

const changeUserCheckedHandler = () => {
    const users: IUserItem[] = []

    if(checkUsers.value.length > 0){
       

        checkUsers.value.forEach(username => {
            let user:IUserItem
            user = props.users.find(user => user.username === username) as IUserItem
            users.push(user)
        })

        emit('usersChoosen', UserItemsToUsers(users))
        
        return
    }

    emit('usersChoosen', UserItemsToUsers(users))
}


</script>

<template>
   <div class="items-add-content">
        <div class="items-list-add-group">
            <div class="items-add-search">
                <el-input
                v-model="searchItem"
                class="w-50 m-2"
                placeholder="Please Input"
                :prefix-icon="Search"
                />
            </div>
            <div class="items-add-list">
                <el-checkbox-group 
                v-model="checkUsers" 
                class="user-list"
                @change="changeUserCheckedHandler"
                >
                    <el-checkbox
                    v-for="user in listUsers"
                    :key="user.id"
                    :label="user.username" size="large" border/>
                </el-checkbox-group>
            </div>      
        </div>
    </div>    
</template>

<style scoped>
.items-add-content {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.items-add-list {
   margin-top: 20px;
   border: 1px solid rgb(167, 165, 165);
   border-radius: 5px;
   padding: 1px;
}
.user-list {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 300px;
}

.el-checkbox {
    margin: 0;
}
</style>