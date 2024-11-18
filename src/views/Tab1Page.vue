<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="headSpace">
        <h2>Raadi</h2>
        <input type="search" class="searchBar" placeholder="Aflaan, Musalsalo ama Shaqsi  " />
      </div>

      <div class="cats">
        <span v-for="(item, index) in cat" :key="index">
          <ion-chip color="tertiary" v-if="item.active">
            {{ item.name }}
          </ion-chip>

          <ion-chip color="dark"  v-if="!item.active">
            {{ item.name }}
          </ion-chip>

        </span>
      </div>

      <!-- <ExploreContainer name="Tab 1 page" /> -->
      <BrowseContent />
      <SearchResults />

      <!-- Browse Content Container -->

      <!-- Search Result Container  -->

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonChip } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import BrowseContent from '@/components/browse/BrowseContent.vue';
import SearchResults from '@/components/browse/SearchResults.vue';
import  {  cat } from '@/model/categories'
</script>
<style scoped>
.headSpace {
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 2vh;
}
.searchBar {
  background: rgba(122, 122, 122, 0.04);
  border-radius: 50px;
  border: 2px solid #5f27cd;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1rem;
  width: 95vw;
  margin: 0 auto;
}

h2 {
  font-weight: 300;
  padding-left: 10px;
  font-size: 1.4rem;
}
.cats {
  padding-top: 10px;
  padding-left: 10px;
}
</style>
