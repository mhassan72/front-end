<template>
      <ion-modal :is-open="state.tnc">
        <ion-header>
          <ion-toolbar>
            <ion-title>Sharuudaha Isticmaalka Aalada</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="state.toggleTnc()">
                <ion-icon :icon="close"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <h3>
                Hello world
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
                reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
                dicta.
            </p>

            <h5>
                Hello world
            </h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
                reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
                dicta.
            </p>
        </ion-content>
      </ion-modal>
  </template>
  
<script lang="ts" setup>
import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle, IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import { state }  from '@/model/authState'
import { close } from 'ionicons/icons';
  
    const isOpen = ref(false);
  
    const setOpen = (open: boolean) => (isOpen.value = open);
  </script>