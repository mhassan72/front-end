<template>
<div>
    <ContinueWatching></ContinueWatching>
    <MovieListSlider title="Trending #️⃣" discription="simple discription here"></MovieListSlider>
    <MovieListSlider title="Majaajilo  😹" discription="simple discription here"></MovieListSlider>
    <MovieListSlider title="Jaceel ❤️" discription="simple discription here"></MovieListSlider>
    <MovieListSlider title="Dagaal 🥷" discription="simple discription here"></MovieListSlider>


    <div class="footerGap"></div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ContinueWatching from '@/components/browse/ContinueWatching.vue'
import MovieListSlider from '@/components/browse/MovieListSlider.vue'
const  data = ref([]);
</script>
<style  scoped>
.footerGap {
    min-height: 180px;
    width: 100%;
  }
</style>