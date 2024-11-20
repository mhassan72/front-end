<template>
    <div class="list" color="clear">
        <!-- <h1>Search Result Content</h1> -->
         <div class="loader"  v-if="search.loading">
            <ion-spinner name="dots"></ion-spinner>
         </div>

        <ion-list>
            <ion-item  v-for="(item, index) in search.results" :key="index">
                <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>

                <ion-label>
                    {{ item?.title }}
                </ion-label>
            </ion-item>
        </ion-list>



    </div>
</template>

<script lang="ts" setup>
import { search } from '@/model/search';
import { IonItem, IonSpinner, IonLabel, IonAvatar } from '@ionic/vue';
</script>
<style scoped>

.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>