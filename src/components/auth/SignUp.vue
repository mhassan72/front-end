<template>
    <div class="authComp">
        
        <div class="headerCustom">
            <h1 class="title">AKOON CUSUB!</h1>
            <p class="par">
                Fadlan buuxi bokiska hoose, si aad u guda gasho  akoonkaaga...
            </p>
        </div>
        <br>

            <ion-item>
                <ion-icon slot="start" :icon="call" aria-hidden="true"></ion-icon>
                <ion-input placeholder="Tel Kaaga" class="custom"></ion-input>
            </ion-item>
            <br>
            <ion-item>
                <ion-icon slot="start" :icon="key" aria-hidden="true"></ion-icon>
                <ion-input placeholder="Lambar Sireedka"class="custom" ></ion-input>
            </ion-item>
            <br>

            <div class="spacer_btw">
                <ion-chip color="medium">
                    <ion-label>Terms and Conditions ...</ion-label>
                    <ion-icon :icon="alertCircle"></ion-icon>
                </ion-chip>

                <ion-button size="default" color="light"> 
                    <ion-label>Badal Sirta</ion-label>
                    <ion-icon slot="end" :icon="help" aria-hidden="true"></ion-icon>
                </ion-button> 
            </div>

            <div class="action spacer_btw">
                <ion-button color="warning" size="small" @click="state.toggleLogin()"> 
                    <ion-label>Waan leyahay akoon!</ion-label>
                    <ion-icon slot="start" :icon="person" aria-hidden="true"></ion-icon>
                </ion-button> 

                <ion-button color="dark"> 
                    <ion-label>Diwaan Geli</ion-label>
                    <ion-icon slot="end" :icon="arrowForward" aria-hidden="true"></ion-icon>
                </ion-button> 
            </div>

                       

        <div class="shared_links">
        </div>
    </div>
</template>
  
<script setup lang="ts">
import {  IonInput, IonItem, IonButton, IonChip, IonLabel, IonIcon } from '@ionic/vue';
import { key, call,  alertCircle, fingerPrint, help, personAdd, arrowForward, person } from 'ionicons/icons';
import { state } from '@/model/authState';
</script>
<style scoped>
.authComp {
    padding: 3vw;
    padding-top: 10vh !important;
}

.headerCustom .par {
    font-weight: 300;
    opacity: 0.6;
    font-size: 1.2rem;
}

.headerCustom .title {
    font-weight: 600;
    font-size: 2.2rem;
}

ion-input.custom {
    --placeholder-opacity: 0.8;
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
    --border-style: none  !important;

  }

ion-item {
    --background: rgba(207, 207, 207, 0.021);
    --border-radius: 50px;
  }

  .spacer_btw  {
    display: flex;
    justify-content: space-between;
  }

  .action  {
    text-align: center;
    margin-top: 20px;
    padding-top: 10vh;
    padding-bottom: 5vh;
  }
</style>