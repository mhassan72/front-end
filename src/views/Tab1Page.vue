<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="headSpace">
        <h2>Raadi</h2>
        <input 
            type="search" 
            class="searchBar" 
            placeholder="Aflaan, Musalsalo ama Shaqsi"
            v-model="search.term"
            @keyup="handleSearch()"
        />

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
      <BrowseContent v-if="search.browse" />
      <SearchResults v-if="search.search" />

      <!-- Browse Content Container -->

      <!-- Search Result Container  -->

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonChip } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import BrowseContent from '@/components/browse/BrowseContent.vue';
import SearchResults from '@/components/browse/SearchResults.vue';
import  {  cat } from '@/model/categories'
import axios from 'axios';
import { search } from '@/model/search';

function handleSearch() {
  search.loading = true
  const options = {
    method: 'GET',
    url: 'https://1vfc2rfcll.execute-api.eu-west-2.amazonaws.com/production/titles_search',
    params: {search_term: `${search.term}`},
    headers: {
      'Content-Type': 'application/json', 
      action: 'search_titles'
    },
  };

  axios.request(options).then(function (response) {
    search.browse =  false
    search.loading = false
    search.search = true
    search.results = response.data['results']
  }).catch(function (error) {
    search.browse =  true
    search.search = false
    search.loading = false
    console.error(error);
  });


  
}

</script>

<!-- <script setup lang="ts">
import { IonPage, IonContent, IonChip } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import BrowseContent from '@/components/browse/BrowseContent.vue';
import SearchResults from '@/components/browse/SearchResults.vue';
import  {  cat } from '@/model/categories'
import axios, { AxiosRequestConfig } from 'axios';
import { ref } from 'vue';

// Utility to create Axios configuration
function createAxiosConfig(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  params: Record<string, string>,
  headers: Record<string, string>,
  data?: object
): AxiosRequestConfig {
  const API_KEY = import.meta.env.VITE_API_KEY; // Load API key
  return {
    method,
    url,
    params,
    headers: {
      ...headers,
      'x-api-key': API_KEY,
    },
    data: data ? JSON.stringify(data) : undefined,
  };
}

// Reactive state
const searchTerm = ref('');
const titles = ref<string[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

// Search handler
async function handleSearch(): Promise<void> {
  if (!searchTerm.value.trim()) {
    error.value = 'Search term cannot be empty.';
    return;
  }

  // Reset state for new search
  loading.value = true;
  error.value = null;
  titles.value = [];

  // API configuration
  const url = import.meta.env.VITE_SEARCH_API_URL;
  const params = { search_term: searchTerm.value };
  const headers = {
    'Content-Type': 'application/json',
    action: 'search_titles',
  };

  const config = createAxiosConfig('GET', url, params, headers);

  try {
    const response = await axios.request(config);
    // Ensure data integrity before assigning
    titles.value = response.data?.titles || [];
  } catch (err: unknown) {
    // Type-safe error handling
    if (axios.isAxiosError(err)) {
      error.value = err.response?.data?.message || 'An error occurred while fetching data.';
    } else {
      error.value = 'An unexpected error occurred.';
    }
    console.error(err);
  } finally {
    loading.value = false;
  }
}

</script> -->
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
