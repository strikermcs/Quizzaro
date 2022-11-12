<script setup lang="ts">

const props = defineProps({
    visible: {type: Boolean, required: true },
    title: {type: String, default: 'Warning'},
    text: {type: String}
})

const emit = defineEmits<{(e: 'sendAnswer', answer: boolean ): void}>()

const sendAnswer = (answer: boolean) => {
    emit('sendAnswer', answer)
} 
</script>


<template>
    <el-dialog :model-value="visible" :title="$t(title)" width="30%" center :show-close="false">
        <span>{{text}}</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="sendAnswer(false)">{{$t('Cansel')}}</el-button>
                <el-button type="primary" @click="sendAnswer(true)">{{$t('Confirm')}}</el-button>
            </span>
        </template>
  </el-dialog>
</template>