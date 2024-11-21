 <template>
    <ion-page>
        <ion-content :key="title.data.id">

            <div class="backBtn"  :class="{ darkBg: isDarkMode, lightBg: !isDarkMode }"  @click="backWard()">
                <svg width="33px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z" fill="currentColor"/>
                </svg>
            </div>

            <div  class="title_cover" :style="{ backgroundImage: `url(${title.data.poster})` }">
                <div class="gradient"></div>
            </div>


            <div class="context">
                <div class="header" :class="{ darkHeader: isDarkMode, lightHeader: !isDarkMode }">
                    <div class="left">
                        <h4 :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                            {{  title.data.title }}
                        </h4>
                        <p :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                            {{  Number(title.data.year) }}
                        </p>
                    </div>
                    <div class="right">
                        <ion-button color="dark" @click="redirect('/watch/content_uid')">
                            Daawo
                        </ion-button>
                        <div class="btnAdd" :class="{ darkBtn: isDarkMode, lightBtn: !isDarkMode }">
                            <svg width="33px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="currentColor"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="currentColor"/>
                            </svg>
                        </div>
                        
                    </div>
                </div>

                <div class="textPadding" :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                    <p>
                        {{title.data.plot }}
                    </p>
                </div>

                <div class="categories">
                    Astaanta   
                    <ion-chip color="tertiary" v-for="(item, index) in title.data.genres" >
                        {{ item }}
                    </ion-chip>
                </div>


                <!-- <div class="cast">
                    cast   
                    <ion-chip color="dark" v-for="(item, index) in title.data.cast" >
                        {{ item.name }}
                    </ion-chip>
                </div> -->

            </div>

            <div class="theCrew">
                <div class="header">
                    <h4 :class="{ darkText: isDarkMode, lightText: !isDarkMode }">Jilaay</h4>
                    <div class="all"  :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                        See all
                    </div>
                </div>
                <ul  class="crewList">
                    <li class="item"  v-for="(item, index)  in  title.data.cast" :key="index"></li>

                </ul>
            </div>

            <div class="theEpisodes">
                <div class="header">
                    <h4  :class="{ darkText: isDarkMode, lightText: !isDarkMode }">Xalqada</h4>
                    <div class="all" :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                        Season 1
                    </div>
                </div>

                <ul class="episodeList">
                    <li class="item"  v-for="(item, index)  in  episodes" :key="index" @click="redirect(`/watch/${item.title}`)">
                        <div class="number"  :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                            {{  item.number }}
                        </div>
                        <div class="left">
                            <div class="thumb"></div>
                        </div>
                        <div  class="middle">
                            <h5 :class="{ darkText: isDarkMode, lightText: !isDarkMode }">{{ item.title }}</h5>
                            <p :class="{ darkText: isDarkMode, lightText: !isDarkMode }">{{ item.summary }}</p>
                        </div>
                        <div  class="right"  :class="{ darkText: isDarkMode, lightText: !isDarkMode }">
                            <b>
                                {{  item.duration }}
                            </b>
                        </div>
                    </li>

                </ul>
            </div>

        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import  {IonPage, IonContent, IonChip, IonButton } from '@ionic/vue';
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";


const router = useRouter()
const isDarkMode = ref(false);
const crew =  ref([1,2,3,4,5,6])
const episodes =  ref([
    {
        'title':'Soo Laabashada Jamaal',
        'number':1,
        'summary':'Soo Laabashada Jamaal oo keentay farxada qoyska...',
        'duration':'20:73'
    },
    {
        'title':'Soo Dhixista Xirsi',
        'number':2,
        'summary':'Xirsi  oo ku  dhaliye walwal cidiisa madaama oo  soo  dhaxay ..',
        'duration':'22:13'
    },
    {
        'title':'Cashada Habboon iyo Doodda Amran',
        'number':3,
        'summary':'Cashada Habboon iyo Doodda Amran',
        'duration':'19:11'
    },
    {
        'title':'Maalin Jimco',
        'number':4,
        'summary':'Jumco  Wanaagsan ...',
        'duration':'26:71'
    },
    {
        'title':'Xilli Hore Imaada',
        'number':  5,
        'summary':'Dardaaran walid ...',
        'duration':'20:73'
    }
])

const title : any  = reactive({ data: {}})

function fetchTitle () {
    const options = {
        method: 'GET',
        url: 'https://1vfc2rfcll.execute-api.eu-west-2.amazonaws.com/production/titles_search',
        params: {id: '0848228'},
        headers: {'Content-Type': 'application/json', action: 'find_title_by_id'}
    };

    axios.request(options).then(function (response) {
        title.data  =  response.data.items[0]
    }).catch(function (error) {
        console.error(error);
    });
}

fetchTitle ()

function backWard()  {
    router.go(-1)
}

function redirect(route: string) {
  router.push(`${route}`)
}

function detectScreenMode() {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    isDarkMode.value = darkModeQuery.matches;
    darkModeQuery.addEventListener('change', (event) => {
        isDarkMode.value = event.matches;
    });
}

onMounted(() => {
    detectScreenMode();
});
</script>
<style scoped>
.backBtn {
    width: 50px;
    height: 50px;
    margin: 12px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
}
.title_cover {
    background: rgb(255, 255, 255);
    width: 100%;
    height: 30vw;
    min-height: 300px;
    background-position: top center;
    background-size: cover;
}
.gradient  {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.396);
}

.context .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
}


.darkHeader {
    border-bottom: 1px solid rgba(81, 81, 81, 0.325);
}
.lightHeader  {
    border-bottom: 1px solid rgba(81, 81, 81, 0.112);
}


.context .header h4 {
    padding: 0;
    margin: 0;
}

.context .header p {
    padding: 0;
    margin: 0;
    padding-top: 4px;
}

.context .header .right  {
    display: flex;
    align-items: center;
    gap: 5px;
}

.darkText {
    color: rgba(255, 255, 255, 0.674);
}
.lightText  {
    color: rgba(2, 2, 2, 0.674);
}

.darkBtn {
    color: white;
}
.lightBtn  {
    color: black;
}

.darkBg {
    background: rgba(0, 0, 0, 0.595);
}
.lightBg  {
    background: rgba(255, 255, 255, 0.679);
}

.btnAdd {
    cursor: pointer;
}

.btnAdd:hover {
    color:  #5f27cd;
}

.textPadding {
    padding: 12px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.1rem;
    font-weight: 300;
}
.theCrew {
}
.theCrew .header {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(106, 106, 106, 0.273);
}
.theCrew .header  h4 {
    padding: 0;
    margin: 0;
}

.theCrew .crewList {
    display: flex;
    gap: 10px;
    list-style: none;
    padding-left: 10px;
    padding-bottom: 10px;
}

.theCrew .crewList .item {
    background: rgba(45, 45, 45, 0.549);
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
}

.theEpisodes {
}
.theEpisodes .header {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(106, 106, 106, 0.273);
}
.theEpisodes .header  h4 {
    padding: 0;
    margin: 0;
}

.context .categories {
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: gray;
}

.context .cast {
    padding-left: 20px;
    color: gray;
}

.episodeList {
    padding: 12pt;
}
.episodeList .item {
    display: flex;
    justify-content: space-between;
    align-items: start;
    border-bottom: 1px solid  rgba(115, 115, 115, 0.163);
    min-height: 100px;
    margin: 6px;
    margin-bottom: 16px;
    cursor: pointer;
}

.episodeList .item:last-child {
    border-bottom: none;
    margin-bottom: 50px;
}

.episodeList .item .number {
    min-width: 50px;
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    justify-content: left;
    align-items: center
}

.episodeList .item  .right {
    width: 20%;
    text-align: right;
}
.episodeList .item .middle {
    width: 60%;
    padding-left: 10px;
}

.episodeList .item .middle h5  {
    padding: 0;
    margin: 0;
}



.episodeList .item .middle p{
    padding: 0;
    margin: 0;
    font-weight: 300;
    padding-top: 10px;
    margin-bottom: 10px;
}
.episodeList .item .left {
    width: 20%;
    max-width: 77px;
    min-width: 60px;
}

.episodeList .item .left  .thumb {
    max-width: 77px;
    min-width: 60px;
    height: 60px;
    background: rgba(0, 0, 0, 0.406);
    border-radius: 2px;
}
</style>