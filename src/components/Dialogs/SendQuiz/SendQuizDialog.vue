<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>

<template>
    <el-dialog
    v-model="dialogVisible"
    :title="$t('SendQuizToUserDialog')"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>