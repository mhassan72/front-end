<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { ref } from 'vue';

  const keys = ref({
    auth_api_url: import.meta.env.VITE_AUTH_API_URL,
    api_key: import.meta.env.VITE_API_KEY
  })

  console.log(keys.value)

</script>
