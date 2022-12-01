<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Search, UserFilled } from '@element-plus/icons-vue';
import { IUserItem } from '@/interfaces/user.interfaces';
import { UserItemsToUsers } from '@/utils/quiz';

const props = defineProps<{users: IUserItem[]}>()
const emit = defineEmits(['usersChoosen'])
const searchItem = ref<string>('')
const listItems = ref<IUserItem[]>([]) 

const listOne = computed(() => {
    if(searchItem.value.trim() != ''){
        return listItems.value.filter(item => item.username.toLowerCase().includes(searchItem.value.toLowerCase()) &&
        item.list == 1) 
    }
    return listItems.value.filter(item => item.list === 1)
})

const listTwo = computed(() => {
    let list = listItems.value.filter(item => item.list === 2)
    emit('usersChoosen',  UserItemsToUsers(list))
    return list
})

const startDrag = (evt: DragEvent, item: any) => {
      evt.dataTransfer!.dropEffect = 'move'
      evt.dataTransfer!.effectAllowed = 'move'
      evt.dataTransfer!.setData('itemID', item.userId)
    }
    
const onDrop = (evt: DragEvent, list: any) => {
      const itemID = evt.dataTransfer!.getData('itemID')
      const item = listItems.value.find((item) => item.userId == itemID)
      item!.list = list
    }

const deleteItemHandle = (item: any) => {
    item.list = 1
}

const userClickHandle = (item: any) => {
    item.list == 1 ? item.list = 2 : item.list = 1
}


watch(() => props.users, (count) => {
    listItems.value = count
})


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
                <ul class="items-list">
                    <li 
                    v-for="item in listOne" 
                    :key="item.username"
                    draggable="true"
                    @dragstart="startDrag($event, item)"
                    >
                        <div @click.prevent="userClickHandle(item)" class="item">
                            <span>{{item.username}}</span>
                            <el-icon><UserFilled /></el-icon>  
                        </div> 
                    </li>
                </ul>
            </div>      
        </div>

        <div class="checked-items">
            <ul class="checked-items-list"
            @drop="onDrop($event, 2)"
            @dragover.prevent
            @dragenter.prevent
            >
                <li class="checked-item" 
                v-for="item in listTwo" :key="item.username" >
                    <div class="item-check">{{item.username}}
                        <span @click="deleteItemHandle(item)">X</span>
                    </div>
                </li>
            </ul>
        </div>    
    </div> 
</template>

<style scoped>

li {
    list-style: none;
}
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

.items-list {   
    padding: 5px 10px;
    height: 300px;
    overflow-y: scroll;
}

.checked-items {
    border: 1px solid rgb(167, 165, 165);
   border-radius: 5px;
   padding: 1px;
}

.checked-items-list {
    width: 200px;
    padding: 5px 10px;
    height: 350px;
    overflow-y: scroll;
}

.checked-item {
    padding: 5px 0px 5px 0px;
    /* color: #606266; */
}

.item-check {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-check span {
    font-size: 13px;
    color: red;
    cursor: pointer;
    padding: 1px 3px 1px 3px;
    transition: all 0.4s ease;
}

.item-check span:hover {
    border: 1px solid red; 
} 

.item {
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 5px 0px 5px 0px;
    cursor: pointer; 
}
</style>