<template>
    <div class="container" v-if="data.list.length > 0">
        <div class="header">
            <div class="left">
                <strong>{{ title }}</strong> <br>
                <small>{{ discription  }}</small>
            </div>
            <div class="right">
                See All
            </div>
        </div>


        <ul class="list">
            <li class="item" v-for="(item, index) in data.list" :key="index" @click="goTo(item.id)">
                <div class="coverImage" :style="{ backgroundImage: `url(${item.poster})` }"></div>
                <div class="context">
                   <small>{{ item.title }}</small>  <br>
                    <small>{{ Number(item.year) }}</small>
                </div>
            </li>
        </ul>
    </div>
</template>
<script  setup lang="ts">
import { ref, defineProps, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const props = defineProps<{
    title: string;
    discription: string;
    genre?: string
}>()

const router =   useRouter()

const list  =  ref([
    {
        title: 'Dandadan',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
        year: '2024',
        slug: 'dandadan'
    },
    {
        title: 'Gun Gale Online II',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx167141-m8eOYiDpeN4R.jpg',
        year: '2024',
        slug: 'gun_gale_online_II'
    },
    {
        title: 'DEATH NOTE',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-4r88a1tsBEIz.jpg',
        year: '2006',
        slug: 'death_note'
    },
    {
        title: 'Sousou no Frieren',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-gHSraOSa0nBG.jpg',
        year: '2024',
        slug: 'sousou_no_frieren'
    },
    {
        title: 'Gintama',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114129-RLgSuh6YbeYx.jpg',
        year: '2024',
        slug: 'gintama'
    },
    {
        title: 'HUNTER×HUNTER',
        cover: 'https://example.com/image5.jpg',
        year: '2011',
        slug: 'hxh'
    },
    {
        title: 'Movie 7',
        cover: 'https://example.com/image5.jpg',
        year: '2024',
        slug: 'm7'
    },
    {
        title: 'Movie 8',
        cover: 'https://example.com/image5.jpg',
        year: '2024',
        slug: 'm8'
    },
    {
        title: 'Movie 9',
        cover: 'https://example.com/image5.jpg',
        year: '2024',
        slug: 'm9'
    },
    {
        title: 'Movie 10',
        cover: 'https://example.com/image5.jpg',
        year: '2024',
        slug: 'm10'
    },
    {
        title: 'Movie 11',
        cover: 'https://example.com/image5.jpg',
        year: '2024',
        slug: 'm11'
    }
])

const data : any = reactive({list:  []})

function fetchByGenre (genre: string) {
  const options = {
      method: 'GET',
      url: import.meta.env.VITE_SEARCH_API_URL,
      params: {genres: genre},
      headers: {
          'Content-Type': 'application/json', 
          action: 'title_by_genres'
      }
  };

  axios.request(options).then(function (response) {
    data.list = response.data.results
  }).catch(function (error) {
    data.list = []
    console.error(error);
  });
}

onMounted(() => {
    fetchByGenre(`${props.genre}`)
})



function  goTo(path: string) {
    router.push({path:`/title/${path}`})
}

</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
    overflow-y: scroll;
    padding-left: 20px;
    padding-right: 120px;
}

.list::-webkit-scrollbar {
    display: none; /* Hides scrollbar in webkit browsers */
}
.list .item{
    margin: 0;
    padding: 0;
    width: 100px;
    height: 190px;
    margin: 3px;
    margin-bottom: 10px;
}
.list .item .coverImage {
    width: 100%;
    min-width: 100px;
    height: 90%;
    max-height: 140px;
    min-height: 100px;
    background: rgba(41, 41, 41, 0.356);
    border-radius: 3px;
    margin-bottom: 6px;
    background-position: left top;
    background-size: cover;
    background-repeat: none;
}
</style>
