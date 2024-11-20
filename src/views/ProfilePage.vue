<template>
    <ion-page>
      <ion-content :fullscreen="true">

        <div class="header">
            <div class="btn" @click="backWard()">
                <svg width="33px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z" fill="currentColor"/>
                </svg>
            </div>

            <ion-chip>
                <ion-avatar>
                    <img alt="Silhouette of a person's head" src="https://titlemedia.s3.eu-west-2.amazonaws.com/Screenshot+2024-11-18+at+18.15.25.png" />
                </ion-avatar>
                <ion-label>Chip Avatar</ion-label>
            </ion-chip>

        </div>
        
      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonAvatar, IonChip, IonLabel } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function backWard()  {
    router.go(-1)
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: start;
    align-items: top;
    padding-top: 10px;
    padding-bottom: 10px

}

.header h1 {
    padding: 0;
    margin: 0;
}

.header .btn {
    display: flex;
    align-items: center;
    padding-right: 20px
}
</style>
  