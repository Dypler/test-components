<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Grid } from 'swiper/modules'
import { ref } from 'vue'
import ShareIcon from './SlidersComponents/ShareIcon.vue'
import CopyIcon from './SlidersComponents/CopyIcon.vue'
// Import Swiper styles

import 'swiper/css'
import 'swiper/css/grid'

import 'swiper/css/navigation'

// import required modules

const modules = [Navigation, Grid]

const prev = ref(null)
const next = ref(null)
</script>

<template>
  <div class="relative pt-20">
    <div ref="next" class="swiper-button-next transition"></div>
    <div ref="prev" class="swiper-button-prev transition"></div>
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :loop="false"
      :spaceBetween="40"
      :slidesPerView="2"
      :grid="{
        rows: 2,
        fill: 'rows'
      }"
      :modules="modules"
      class="mySwiper swiper-grid"
    >
      <swiper-slide class="first__slide">
        <div
          class="cursor-pointer group background__hover relative flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[640px] justify-end bg-[url('/main/courses1.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[299px] justify-end bg-[url('/main/courses2.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[299px] justify-end bg-[url('/main/courses3.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[299px] justify-end bg-[url('/main/courses3.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[299px] justify-end bg-[url('/main/courses3.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[299px] justify-end bg-[url('/main/courses3.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[299px] justify-end bg-[url('/main/courses3.png')]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              10-16 февраля
            </p>
            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.background__hover {
  clip-path: polygon(0% 0%, 100% 0, 100% 85%, 85% 100%, 0% 100%);
  background-size: 100%; /* Указываем начальный размер фона */
  transition: background-size 0.7s ease; /* Явно указываем, что переход применяется к background-size */
}
.background__hover:hover {
  background-size: 110%;
}
.swiper-slide {
  width: fit-content !important;
  margin-top: 0 !important;
}
:deep(.swiper-wrapper) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 40px;
}
:deep(.swiper) {
  padding: 0;
}
.first__slide {
  grid-area: 1 / 1 / 3 / 2;
}
/* .swiper-slide:nth-child(2) {
  grid-area: 1 / 2 / 2 / 3;
}
.swiper-slide:nth-child(3) {
  grid-area: 2 / 2 / 3 / 3;
} */
</style>
