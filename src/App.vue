<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { auth } from './firebase/firebase'
  import { onAuthStateChanged } from "firebase/auth";
  import { useUserStore } from './store/user'
  import { useNotificationStore } from './store/notification'
  import ShowNotification from './utils/notification'
  import { watch } from 'vue'
  import { useI18n } from "vue-i18n";

  const { t, locale } = useI18n();

  const userStore = useUserStore()
  const notify = useNotificationStore()

  watch(() => notify.trigger, () => {
    ShowNotification(notify.notification!.type,
       t(notify.notification!.title), t(notify.notification!.message))
  })

  onBeforeMount(() => {

    onAuthStateChanged(auth, (user) => {
        userStore.user = user
    })

    if(localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark')
    }

    locale.value = localStorage.getItem('locale') || 'UA'
  })
  
</script>

<template>
  <RouterView />
</template>
