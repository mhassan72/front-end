<template>
<div>
    <ContinueWatching  v-if="isAutehnticated"></ContinueWatching>
    <!-- <MovieListSlider genre="Action" title="Dagaal 🥷" discription=""></MovieListSlider> -->
    <!-- <MovieListSlider genre="Adventure" title="Tacabur  😹" discription=""></MovieListSlider>
    <MovieListSlider genre="Romance"  title="Jaceel ❤️" discription=""></MovieListSlider>
    <MovieListSlider genre="Drama"  title="Jaceel ❤️" discription=""></MovieListSlider> -->

    <MovieListSlider
        v-for="(item, index) in genres"
        :genre="item.en"  
        :title="item.so" 
        discription=""
        :key="index"
    >
    </MovieListSlider>

    <div class="footerGap"></div>
</div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { currentUser } from '@/model/authState'
import ContinueWatching from '@/components/browse/ContinueWatching.vue'
import MovieListSlider from '@/components/browse/MovieListSlider.vue'
import  { genres } from '@/model/categories'

const  data = ref([]);

const  isAutehnticated  =  computed(() => {
    return currentUser.value !== null
})

</script>
<style  scoped>
.footerGap {
    min-height: 180px;
    width: 100%;
  }
</style>