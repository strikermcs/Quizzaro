<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { Message } from '@element-plus/icons-vue';
import { subscribeToMail } from '@/services/mail.service'
import { IResultUserDataTable } from '@/interfaces/quiz.interfaces';
import { useMailStore } from '@/store/mail'
import { useRouter } from 'vue-router';
 

const messageResults = ref<IResultUserDataTable[]>([]) 
const mailStore = useMailStore()
const router = useRouter()

const unreadMessageCount = computed(() => {
    let count = 0
    messageResults.value.forEach(item => {
        if(!item.isRead){
            count++;
        }
    })
    return count
})

const mailHandler = () => {
    mailStore.mail = messageResults.value
    router.push({name: "mail"}) 
}


const updateMail = (update: IResultUserDataTable[]) => {
    messageResults.value = update
} 


onMounted(() => {
    subscribeToMail(updateMail)
})

</script>

<template>
    <div class="mail" @click="mailHandler">
        <el-badge :value="unreadMessageCount" class="item" >
            <el-icon :size="30"><Message /></el-icon>
        </el-badge>
    </div>
</template>

<style scoped>
.mail {
   position: fixed;
   right: 0px;
   top: 10px;
   cursor: pointer;
   opacity: 0.3;
   transition: all 0.5s ease;
}

.mail:hover{
    opacity: 1;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>