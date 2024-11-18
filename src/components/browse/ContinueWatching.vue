<template>
    <div class="continue">

        <div class="header">
            <h4>Dhameestiro</h4>
        </div>

        <ul  class="list">
            <li class="item" v-for="(item, index) in list" :key="index" @click="goTo(item.slug)">
                <div class="coverImage":style="{ backgroundImage: `url(${item.cover})` }"></div>
                <div class="context">
                    <p>{{ item.title }}</p>
                    <small>
                        <ion-chip color="primary">
                            {{  item.watched }}
                        </ion-chip>
                    </small>
                </div>
            </li>
        </ul>

    </div>
</template>
<script setup lang="ts">
import { IonChip } from '@ionic/vue';
import { ref }  from 'vue';
import { useRouter } from 'vue-router'

const list  =  ref([
    {
        title: 'Habboon 2',
        cover: 'data:image/jpeg;base64,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',
        watched: '10%',
        slug:'habboon_season_2'
    },
    {
        title: 'Gun Gale Online II',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx167141-m8eOYiDpeN4R.jpg',
        watched: '20%',
        slug:'Gun_Gale_Online_II'
    },
    {
        title: 'DEATH NOTE',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-4r88a1tsBEIz.jpg',
        watched: '66%',
        slug:'death_note'
    },
    {
        title: 'Sousou no Frieren',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-gHSraOSa0nBG.jpg',
        watched: '69%',
        slug:'sousou_no_frieren'
    },
    {
        title: 'Gintama',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114129-RLgSuh6YbeYx.jpg',
        watched: '70%',
        slug:'gintama'
    },
    {
        title: 'HUNTER×HUNTER',
        cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114129-RLgSuh6YbeYx.jpg',
        watched: '90%',
        slug:'hxh'
    }
])
const router =   useRouter();

function  goTo(path: string) {
    router.push({path:`/watch/${path}`})
}
</script>
<style scoped>
.continue .header {
    padding-left: 20px;
}

.continue .list {
    list-style: none;
    display: flex;
    scroll-behavior: smooth;
    justify-content: flex-start;
    gap: 6px;
    overflow-y: scroll;
    height: 220px;
    padding-right: 30px;
    /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* For Firefox */
}

.continue .list .item {
    min-width: 200px;
    height: 200px;
    cursor:  pointer
}

.continue .list .item .coverImage {
    background: rgb(33, 33, 33);
    width: 100%;
    height: 75%;
    border-radius: 6px;
    background-position: center center;
    background-size: cover;
    background-repeat: none;
}

.continue .list .item .context {
    margin-top: 10px;
}

.continue .list .item .context p {
    padding: 0;
    margin: 0;
    font-weight: 600;
}
</style>