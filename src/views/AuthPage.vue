<template>
    <ion-page>
        <ion-content>
            <div class="spacer">
                <!-- Exitt strat  -->
                <div class="exitStrat">
                    <button class="clean-btn" @click="exitPrompt">
                        <ion-icon :icon="closeOutline"></ion-icon>
                    </button>
                </div>
                
                <!-- Views -->
                <AuthSignIn v-if="state.login"></AuthSignIn>
                <AuthSignUp v-if="state.register"></AuthSignUp>
                <TermsAndContions v-if="state.tnc"></TermsAndContions>
            </div>

        </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import {  IonPage, IonContent, IonIcon } from '@ionic/vue';
import {  closeOutline }  from 'ionicons/icons';
import { state, currentUser } from '@/model/authState';
import  AuthSignIn from '@/components/auth/SignIn.vue';
import  AuthSignUp from '@/components/auth/SignUp.vue';
import  TermsAndContions from '@/components/auth/TermsAndContions.vue'

import { useRouter } from 'vue-router';
import { computed, watch } from 'vue'

const router = useRouter()

const userState = computed(() => {
  return currentUser.value !== null;
})

function  exitPrompt () {
    router.push('/tabs')
}



// Watch for changes in `userState` and redirect automatically
watch(userState, (isAuthenticated) => {
  if (isAuthenticated) {
    router.push('/tabs');
  } else {
    router.push('/auth');
  }
});

</script>

<style scoped >
.spacer {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    padding-top: 1.4rem;
}

.exitStrat  {
    width: 80px;
    position: fixed;
    right: 1px;
    top: 20px;
    text-align: center;
}

.clean-btn {
    background: none;
    font-size: 2rem;
}

</style>