<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Grid, Pagination } from 'swiper/modules'
import { ref } from 'vue'
import ShareIcon from './SlidersComponents/ShareIcon.vue'
import CopyIcon from './SlidersComponents/CopyIcon.vue'
// Import Swiper styles

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import 'swiper/css/navigation'

// import required modules

const modules = [Navigation, Grid, Pagination]

const prev = ref(null)
const next = ref(null)
const pagination = ref(null)
const breakpoints = {
  320: {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    grid: {
      rows: 1,
      fill: 'row'
    }
  },
  768: {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 'auto'
  },
  1024: {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 2
  },
  1280: {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'row'
    }
  }
}
</script>

<template>
  <div class="relative pt-[40px] xl:pt-20">
    <div ref="next" class="swiper-button-next transition"></div>
    <div ref="prev" class="swiper-button-prev transition"></div>
    <div ref="pagination" class="swiper-pagination"></div>
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :pagination="{
        el: pagination,
        clickable: true
      }"
      :loop="false"
      :breakpoints="breakpoints"
      :modules="modules"
      class="mySwiper swiper-grid"
    >
      <swiper-slide class="first__slide">
        <div
          class="cursor-pointer group background__hover relative flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[638px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[28px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end bg-[url('/main/courses1.png')]"
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
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
            >
              Заголовок курса. При клике ведет на карточку
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.group:hover .text-gradient-hover {
  background-image: linear-gradient(to right, #f19945, #da0048);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-image 0.7s ease;
}
.group {
  transition:
    background-color 0.7s ease-linear,
    color 0.7s ease-linear;
}
.background__hover {
  clip-path: polygon(0% 0%, 100% 0, 100% 85%, 85% 100%, 0% 100%);
  background-size: 100%;
  transition: background-size 0.7s ease;
}
.background__hover:hover {
  background-size: 110%;
}
.swiper-slide {
  margin-top: 0 !important;
  width: auto !important;
}
.swiper-pagination {
  bottom: -30px;
  display: none;
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
@media (min-width: 1280px) {
  :deep(.swiper-wrapper) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 40px;
  }
  :deep(.swiper) {
    padding: 0;
  }
  .first__slide {
    grid-area: 1 / 1 / 3 / 2;
  }
}
@media (max-width: 1280px) {
  :deep(.swiper-wrapper) {
    display: flex;
    flex-wrap: nowrap;
    gap: 0;
  }
  .first__slide {
    grid-area: none;
  }
  .swiper-grid > .swiper-wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
  .swiper-slide {
    height: 100% !important;
  }
}
</style>
