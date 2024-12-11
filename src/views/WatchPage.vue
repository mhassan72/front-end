<template>
    <ion-page>
      <ion-content>
        <div class="videoPlayer">
            <div class="videotitle">
                <div  class="backBtn" @click="backBtn">
                    <ion-icon :icon="chevronBack" slot="start"></ion-icon>
                </div>
                
                <h4 class="mainHeader">
                    {{ title.data.title + "  ( " +Number(title.data.year) + "  )" }}
                </h4>
                
                <div class="" @click="closePlayer">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94358 1.25L10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02502 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10L1.25 9.94358C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94358 1.25ZM18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25L14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10583 22.75 9.94359V10C22.75 10.4142 22.4142 10.75 22 10.75C21.5858 10.75 21.25 10.4142 21.25 10C21.25 8.09318 21.2484 6.73851 21.1102 5.71085C20.975 4.70476 20.7213 4.12511 20.2981 3.7019C19.8749 3.27869 19.2952 3.02502 18.2892 2.88976ZM2 13.25C2.41421 13.25 2.75 13.5858 2.75 14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25C10.4142 21.25 10.75 21.5858 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564L1.25 14C1.25 13.5858 1.58579 13.25 2 13.25ZM22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 13.5858 21.5858 13.25 22 13.25Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
  
          <!-- Show big buttons based on isControlsVisible state with fade effect -->
          <div :class="{ bigBtns: true, fadeOut: !isControlsVisible }">
            <div class="rewind" @click="rewindVideo">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.324 1.67511C11.4489 1.41526 11.7117 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 7.59065 3.90459 3.80298 7.69972 2.14482C8.07929 1.97898 8.52143 2.15224 8.68726 2.53181C8.8531 2.91137 8.67984 3.35351 8.30028 3.51935C5.03179 4.94742 2.75 8.20808 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 7.46598 17.9879 3.69386 13.6826 2.90266L14.5857 4.03148C14.8444 4.35493 14.792 4.82689 14.4685 5.08565C14.1451 5.34441 13.6731 5.29197 13.4143 4.96852L11.4143 2.46852C11.2342 2.24339 11.1991 1.93496 11.324 1.67511ZM10.3249 7.82402C10.5847 7.94891 10.75 8.2117 10.75 8.5V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58579 16.25 9.25 15.9142 9.25 15.5V10.0605L7.96852 11.0857C7.64507 11.3444 7.17311 11.292 6.91435 10.9685C6.65559 10.6451 6.70803 10.1731 7.03148 9.91435L9.53148 7.91435C9.75661 7.73425 10.065 7.69913 10.3249 7.82402ZM14.25 9.25C13.6977 9.25 13.25 9.69772 13.25 10.25V13.75C13.25 14.3023 13.6977 14.75 14.25 14.75C14.8023 14.75 15.25 14.3023 15.25 13.75V10.25C15.25 9.69772 14.8023 9.25 14.25 9.25ZM11.75 10.25C11.75 8.86929 12.8693 7.75 14.25 7.75C15.6307 7.75 16.75 8.86929 16.75 10.25V13.75C16.75 15.1307 15.6307 16.25 14.25 16.25C12.8693 16.25 11.75 15.1307 11.75 13.75V10.25Z" fill="currentColor"/>
                </svg>
            </div>

            <div class="bigPlay" @click="togglePlay">
                <!-- {{ isPlaying ? 'Pause' : 'Play' }} -->
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path v-if="isPlaying" fill-rule="evenodd" clip-rule="evenodd" d="M5.948 1.25H6.052C6.95048 1.24997 7.6997 1.24995 8.29448 1.32991C8.92228 1.41432 9.48908 1.59999 9.94455 2.05546C10.4 2.51093 10.5857 3.07773 10.6701 3.70552C10.7501 4.30031 10.75 5.04953 10.75 5.94801V18.052C10.75 18.9505 10.7501 19.6997 10.6701 20.2945C10.5857 20.9223 10.4 21.4891 9.94455 21.9445C9.48908 22.4 8.92228 22.5857 8.29448 22.6701C7.6997 22.7501 6.95048 22.75 6.052 22.75H5.94801C5.04953 22.75 4.30031 22.7501 3.70552 22.6701C3.07773 22.5857 2.51093 22.4 2.05546 21.9445C1.59999 21.4891 1.41432 20.9223 1.32991 20.2945C1.24995 19.6997 1.24997 18.9505 1.25 18.052V5.948C1.24997 5.04952 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04952 1.24997 5.948 1.25ZM3.90539 2.81654C3.44393 2.87858 3.24644 2.9858 3.11612 3.11612C2.9858 3.24644 2.87858 3.44393 2.81654 3.90539C2.7516 4.38843 2.75 5.03599 2.75 6V18C2.75 18.964 2.7516 19.6116 2.81654 20.0946C2.87858 20.5561 2.9858 20.7536 3.11612 20.8839C3.24644 21.0142 3.44393 21.1214 3.90539 21.1835C4.38843 21.2484 5.03599 21.25 6 21.25C6.96401 21.25 7.61157 21.2484 8.09461 21.1835C8.55607 21.1214 8.75357 21.0142 8.88389 20.8839C9.0142 20.7536 9.12143 20.5561 9.18347 20.0946C9.24841 19.6116 9.25 18.964 9.25 18V6C9.25 5.03599 9.24841 4.38843 9.18347 3.90539C9.12143 3.44393 9.0142 3.24644 8.88389 3.11612C8.75357 2.9858 8.55607 2.87858 8.09461 2.81654C7.61157 2.7516 6.96401 2.75 6 2.75C5.03599 2.75 4.38843 2.7516 3.90539 2.81654ZM17.948 1.25H18.052C18.9505 1.24997 19.6997 1.24995 20.2945 1.32991C20.9223 1.41432 21.4891 1.59999 21.9445 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70552C22.7501 4.30031 22.75 5.04953 22.75 5.94801V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V5.94801C13.25 5.04953 13.2499 4.30031 13.3299 3.70552C13.4143 3.07773 13.6 2.51093 14.0555 2.05546C14.5109 1.59999 15.0777 1.41432 15.7055 1.32991C16.3003 1.24995 17.0495 1.24997 17.948 1.25ZM15.9054 2.81654C15.4439 2.87858 15.2464 2.9858 15.1161 3.11612C14.9858 3.24644 14.8786 3.44393 14.8165 3.90539C14.7516 4.38843 14.75 5.03599 14.75 6V18C14.75 18.964 14.7516 19.6116 14.8165 20.0946C14.8786 20.5561 14.9858 20.7536 15.1161 20.8839C15.2464 21.0142 15.4439 21.1214 15.9054 21.1835C16.3884 21.2484 17.036 21.25 18 21.25C18.964 21.25 19.6116 21.2484 20.0946 21.1835C20.5561 21.1214 20.7536 21.0142 20.8839 20.8839C21.0142 20.7536 21.1214 20.5561 21.1835 20.0946C21.2484 19.6116 21.25 18.964 21.25 18V6C21.25 5.03599 21.2484 4.38843 21.1835 3.90539C21.1214 3.44393 21.0142 3.24644 20.8839 3.11612C20.7536 2.9858 20.5561 2.87858 20.0946 2.81654C19.6116 2.7516 18.964 2.75 18 2.75C17.036 2.75 16.3884 2.7516 15.9054 2.81654Z" fill="currentColor"/>
                    <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z" fill="currentColor"/>
                </svg>
            </div>
            <div class="skip" @click="skipVideo">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.2883 1.25 12.5511 1.41526 12.676 1.67511C12.8009 1.93496 12.7658 2.24339 12.5857 2.46852L10.5857 4.96852C10.3269 5.29197 9.85493 5.34441 9.53148 5.08565C9.20803 4.82689 9.15559 4.35493 9.41435 4.03148L10.3174 2.90266C6.01213 3.69386 2.75 7.46598 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 8.20808 18.9682 4.94742 15.6997 3.51935C15.3202 3.35351 15.1469 2.91137 15.3127 2.53181C15.4786 2.15224 15.9207 1.97898 16.3003 2.14482C20.0954 3.80298 22.75 7.59065 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.3249 7.82402C10.5847 7.94891 10.75 8.2117 10.75 8.5V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58579 16.25 9.25 15.9142 9.25 15.5V10.0605L7.96852 11.0857C7.64507 11.3444 7.17311 11.292 6.91435 10.9685C6.65559 10.6451 6.70803 10.1731 7.03148 9.91435L9.53148 7.91435C9.75661 7.73425 10.065 7.69913 10.3249 7.82402ZM14.25 9.25C13.6977 9.25 13.25 9.69772 13.25 10.25V13.75C13.25 14.3023 13.6977 14.75 14.25 14.75C14.8023 14.75 15.25 14.3023 15.25 13.75V10.25C15.25 9.69772 14.8023 9.25 14.25 9.25ZM11.75 10.25C11.75 8.86929 12.8693 7.75 14.25 7.75C15.6307 7.75 16.75 8.86929 16.75 10.25V13.75C16.75 15.1307 15.6307 16.25 14.25 16.25C12.8693 16.25 11.75 15.1307 11.75 13.75V10.25Z" fill="currentColor"/>
                </svg>
            </div>
          </div>
  
          <!-- Video player element with click to show controls -->
          <video ref="video" preload="meta" autoplay @timeupdate="updateTime" @click="showControls">
            <source :src="sourceUrl" ref="source" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
          <div class="controls">
            <div class="seekBar" @click="seekVideo">
                <div class="progressBar" :style="{ width: `${(videoProgress * 100)}%` }">
                </div>
            </div>


            <div class="buttons">
                <button class="play" @click="togglePlay">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path v-if="isPlaying" fill-rule="evenodd" clip-rule="evenodd" d="M5.948 1.25H6.052C6.95048 1.24997 7.6997 1.24995 8.29448 1.32991C8.92228 1.41432 9.48908 1.59999 9.94455 2.05546C10.4 2.51093 10.5857 3.07773 10.6701 3.70552C10.7501 4.30031 10.75 5.04953 10.75 5.94801V18.052C10.75 18.9505 10.7501 19.6997 10.6701 20.2945C10.5857 20.9223 10.4 21.4891 9.94455 21.9445C9.48908 22.4 8.92228 22.5857 8.29448 22.6701C7.6997 22.7501 6.95048 22.75 6.052 22.75H5.94801C5.04953 22.75 4.30031 22.7501 3.70552 22.6701C3.07773 22.5857 2.51093 22.4 2.05546 21.9445C1.59999 21.4891 1.41432 20.9223 1.32991 20.2945C1.24995 19.6997 1.24997 18.9505 1.25 18.052V5.948C1.24997 5.04952 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04952 1.24997 5.948 1.25ZM3.90539 2.81654C3.44393 2.87858 3.24644 2.9858 3.11612 3.11612C2.9858 3.24644 2.87858 3.44393 2.81654 3.90539C2.7516 4.38843 2.75 5.03599 2.75 6V18C2.75 18.964 2.7516 19.6116 2.81654 20.0946C2.87858 20.5561 2.9858 20.7536 3.11612 20.8839C3.24644 21.0142 3.44393 21.1214 3.90539 21.1835C4.38843 21.2484 5.03599 21.25 6 21.25C6.96401 21.25 7.61157 21.2484 8.09461 21.1835C8.55607 21.1214 8.75357 21.0142 8.88389 20.8839C9.0142 20.7536 9.12143 20.5561 9.18347 20.0946C9.24841 19.6116 9.25 18.964 9.25 18V6C9.25 5.03599 9.24841 4.38843 9.18347 3.90539C9.12143 3.44393 9.0142 3.24644 8.88389 3.11612C8.75357 2.9858 8.55607 2.87858 8.09461 2.81654C7.61157 2.7516 6.96401 2.75 6 2.75C5.03599 2.75 4.38843 2.7516 3.90539 2.81654ZM17.948 1.25H18.052C18.9505 1.24997 19.6997 1.24995 20.2945 1.32991C20.9223 1.41432 21.4891 1.59999 21.9445 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70552C22.7501 4.30031 22.75 5.04953 22.75 5.94801V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V5.94801C13.25 5.04953 13.2499 4.30031 13.3299 3.70552C13.4143 3.07773 13.6 2.51093 14.0555 2.05546C14.5109 1.59999 15.0777 1.41432 15.7055 1.32991C16.3003 1.24995 17.0495 1.24997 17.948 1.25ZM15.9054 2.81654C15.4439 2.87858 15.2464 2.9858 15.1161 3.11612C14.9858 3.24644 14.8786 3.44393 14.8165 3.90539C14.7516 4.38843 14.75 5.03599 14.75 6V18C14.75 18.964 14.7516 19.6116 14.8165 20.0946C14.8786 20.5561 14.9858 20.7536 15.1161 20.8839C15.2464 21.0142 15.4439 21.1214 15.9054 21.1835C16.3884 21.2484 17.036 21.25 18 21.25C18.964 21.25 19.6116 21.2484 20.0946 21.1835C20.5561 21.1214 20.7536 21.0142 20.8839 20.8839C21.0142 20.7536 21.1214 20.5561 21.1835 20.0946C21.2484 19.6116 21.25 18.964 21.25 18V6C21.25 5.03599 21.2484 4.38843 21.1835 3.90539C21.1214 3.44393 21.0142 3.24644 20.8839 3.11612C20.7536 2.9858 20.5561 2.87858 20.0946 2.81654C19.6116 2.7516 18.964 2.75 18 2.75C17.036 2.75 16.3884 2.7516 15.9054 2.81654Z" fill="currentColor"/>
                        <path v-if="!isPlaying" fill-rule="evenodd" clip-rule="evenodd" d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z" fill="currentColor"/>
                    </svg>
                    <!-- <ion-icon :icon="isPlaying ? pause : play"></ion-icon> -->
                </button>
                <ion-label>{{ currentTime }} / {{ duration }}</ion-label>
                <button class="expand" @click="toggleFullscreen">
                    <!-- <ion-icon :icon="caretDownCircle"></ion-icon> -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94358 1.25L10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02502 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10L1.25 9.94358C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94358 1.25ZM18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25L14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10583 22.75 9.94359V10C22.75 10.4142 22.4142 10.75 22 10.75C21.5858 10.75 21.25 10.4142 21.25 10C21.25 8.09318 21.2484 6.73851 21.1102 5.71085C20.975 4.70476 20.7213 4.12511 20.2981 3.7019C19.8749 3.27869 19.2952 3.02502 18.2892 2.88976ZM2 13.25C2.41421 13.25 2.75 13.5858 2.75 14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25C10.4142 21.25 10.75 21.5858 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564L1.25 14C1.25 13.5858 1.58579 13.25 2 13.25ZM22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 13.5858 21.5858 13.25 22 13.25Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            
          </div>
        </div>

        <div class="loading" v-if="isLoading">
            <ion-spinner color="light"></ion-spinner>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
  import { ref, computed, reactive, onMounted, onBeforeUnmount } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { onIonViewWillEnter, onIonViewWillLeave, IonContent, IonPage, IonIcon, IonSpinner, IonLabel } from '@ionic/vue';
  import { chevronBack } from 'ionicons/icons';
  import axios from 'axios';
  
  const router = useRouter();
  const video : any = ref<HTMLVideoElement | null>(null);
  const source = ref<HTMLSourceElement | null>(null); // Ref for source element
  const isPlaying = ref(false);
  const isControlsVisible = ref(false);
  const currentTime = ref('0:00');
  const duration = ref('0:00');
  const videoProgress = ref(0); // Track the video playback progress
  const loadedProgress = ref(0); // Track the loaded video progress
  const isLoading = ref(false);
  const isFullscreen = ref(false);


  const route = useRoute()
  const title : any  = reactive({ data: {}})

  const sourceUrl = ref("");

  async  function fetchTitle() {
    isLoading.value = true
    const options = {
        method: 'GET',
        url: 'https://1vfc2rfcll.execute-api.eu-west-2.amazonaws.com/production/titles_search',
        params: { id: route.params.content_uid },
        headers: { 'Content-Type': 'application/json', action: 'find_title_by_id' },
    };

    try {
        const response = await axios.request(options);
        title.data = response.data.items[0];

        if (title.data.video) {
            sourceUrl.value = response.data.items[0].video.source_url
            video.value.load();
            isLoading.value = false
            isPlaying.value = true

        } else {
            console.error("Video URL is missing in the title data.");
        }
    } catch (error) {
        isLoading.value = false
        console.error("Error fetching title:", error);
    }
 }

  
  let controlsTimeout: any;
  
  function formatTime(seconds: number): string {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  function togglePlay() {
      if (video.value) {
          if (video.value.paused) {
              video.value.play();
              isPlaying.value = true;
              hideControlsAfterDelay();
          } else {
              video.value.pause();
              isPlaying.value = false;
          }
      }
  }
  
  function updateTime() {
      if (video.value) {
          currentTime.value = formatTime(video.value.currentTime);
          duration.value = formatTime(video.value.duration || 0);
          videoProgress.value = video.value.currentTime / (video.value.duration || 1); // Update playback progress
          loadedProgress.value = video.value.buffered.length > 0 
              ? video.value.buffered.end(video.value.buffered.length - 1) / (video.value.duration || 1) 
              : 0; // Update loaded progress
      }
  }
  
  function rewindVideo() {
      if (video.value) video.value.currentTime = Math.max(0, video.value.currentTime - 10);
  }
  
  function skipVideo() {
      if (video.value) video.value.currentTime = Math.min(video.value.duration, video.value.currentTime + 10);
  }

  const callFullscreenMethod = (element: HTMLElement | Document, methodNames: string[]) => {
  for (const methodName of methodNames) {
    if (methodName in element) {
      (element as any)[methodName]();
      break;
    }
  }
};

// Function to toggle fullscreen
const toggleFullscreen = () => {
  const videoElement = video.value;
  if (!videoElement) return;

  if (!isFullscreen.value) {
    // Enter fullscreen
    callFullscreenMethod(videoElement, [
      'requestFullscreen',
      'webkitRequestFullscreen',
      'mozRequestFullScreen',
      'msRequestFullscreen',
    ]);
  } else {
    // Exit fullscreen
    callFullscreenMethod(document, [
      'exitFullscreen',
      'webkitExitFullscreen',
      'mozCancelFullScreen',
      'msExitFullscreen',
    ]);
  }
  isFullscreen.value = !isFullscreen.value;
};
  
  function backBtn() {
      router.go(-1);
  }
  
  function closePlayer() {
    //   router.push('/');
    alert("Exiting the video... lol")
  }
  
  function showControls() {
      isControlsVisible.value = true;
      hideControlsAfterDelay();
  }
  
  function hideControlsAfterDelay() {
      clearTimeout(controlsTimeout);
      controlsTimeout = setTimeout(() => {
          isControlsVisible.value = false;
      }, 3000);
  }
  
  // Seek to a specific time when clicking on the seek bar
  function seekVideo(event: MouseEvent) {
      if (video.value) {
          const seekBar = event.currentTarget as HTMLElement;
          const clickPosition = event.offsetX;
          const newTime = (clickPosition / seekBar.offsetWidth) * (video.value.duration || 0);
          video.value.currentTime = newTime;
          videoProgress.value = newTime / (video.value.duration || 1); // Update video progress after seeking
      }
  }
  
  // Lock and unlock orientation when the view enters and leaves
  function lockLandscapeOrientation() {
        const _screen: any = screen;
        if (_screen.orientation) {
            _screen.orientation.lock('landscape')
                .then(() => {
                    console.log('Orientation locked to landscape');
                })
                .catch((err: any) => {
                    console.warn('Failed to lock orientation to landscape:', err);
                    // alert("Unable to lock orientation to landscape on this device."); // Simple alert for user notification
                });
        } else {
            console.warn('Screen orientation lock is not supported on this device.');
            // alert("Screen orientation lock is not supported on this device."); // Notify the user
        }
    }
  
  function unlockOrientation() {
      if (screen.orientation) {
          screen.orientation.unlock();
      }
  }
  
  // Lifecycle hooks
  onIonViewWillEnter(async() => {
      lockLandscapeOrientation();
      fetchTitle()
  });
  
  onIonViewWillLeave(() => {
      unlockOrientation();
      if (video.value) {
          video.value.pause(); // Pause video when leaving
          isPlaying.value = false; // Update playing state
      }
  });
  
  onMounted(() => {
    fetchTitle()
      if (video.value) {
        isLoading.value = false
          video.value.onloadedmetadata = () => {
              duration.value = formatTime(video.value.duration || 0);
          };
          video.value.addEventListener('timeupdate', updateTime); // Listen for time updates
      }

  });
  
  // Clean up the event listener on unmount
  onBeforeUnmount(() => {
      if (video.value) {
            video.value.pause()
            video.value.removeEventListener('timeupdate', updateTime);
      }

    if (sourceUrl.value) {
        URL.revokeObjectURL(sourceUrl.value);
    }
  });
</script>
  
  

<style scoped>

.loading {
    background:  #00000029;
    width: 60px;
    height: 50px;
    position: fixed;
    bottom: 70px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
}
  .videoPlayer {
      height: 100%;
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: black;
  }
  
  .videoPlayer video {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
  }
  
  .videoPlayer .videotitle  {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 97%);
      padding-bottom: 100px;
      color:  white;
  }
  
  .videoPlayer .videotitle h4 {
      font-weight: 300;
      font-size: 1.2rem;
  }

  .videoPlayer .videotitle .backBtn {
    cursor: pointer;
    padding: 12px;
  }
  
  .mainHeader {
      width: 100%;
      padding-left: 20px;
  }
  
  .subheader {
      width: 100%;
  }
  
  .controls {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    font-size: 12pt;
}

.controls .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.controls .buttons button {
    background: none;
    padding: 5px;
    color: white;
}

.controls .seekBar {
    background: rgba(255, 255, 255, 0.21);
    width: 100%;
    height: 10px;
    margin-top: -20px;
    margin-bottom: 10px;
    border-radius: 50px;
    overflow: hidden;
    position: relative; /* Position relative for absolute children */
}

.controls .seekBar .progressBar {
    background: #54a0ff;
    height: 100%;
    border-radius: 50px;
    position: relative; /* Position relative for absolute children */
}

  
  /* bigBtns styles with fade transition */
  .bigBtns {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 60px;
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.5s ease-in-out; /* For fade effect */
    color: white;
}

.bigBtns .rewind {
    background: rgba(0, 0, 0, 0.183);
    padding: 12px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.bigBtns .bigPlay {
    background: rgba(0, 0, 0, 0.183);
    padding: 12px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.bigBtns .skip {
    background: rgba(0, 0, 0, 0.183);
    padding: 12px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
  
  .fadeOut {
      opacity: 0; /* Fade out by changing opacity */
      pointer-events: none; /* Prevent interaction while faded out */
  }
</style>
  