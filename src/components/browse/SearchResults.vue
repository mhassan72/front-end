<template>
    <div class="list" color="clear">
        <!-- <h1>Search Result Content</h1> -->
         <div class="loader"  v-if="search.loading">
            <ion-spinner name="dots"></ion-spinner>
         </div>

        <ion-list>

            <!-- {{ search.results }} -->
            <ion-item  
                    v-for="(item, index) in search.results" 
                    :key="index"  
                    :href="`/title/${item.id}`"
                    >
                <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" :src="item.poster_path" />
                </ion-avatar>

                <ion-label>
                    <!-- {{ item.title }}({{ item.runtime[0] }}) -->
                    <hr>
                    <p>{{ item.plot }}</p>
                </ion-label>
            </ion-item>
        </ion-list>


    </div>
</template>

<script lang="ts" setup>
import { search } from '@/model/search';
import { IonItem, IonSpinner, IonLabel, IonAvatar, IonList } from '@ionic/vue';
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