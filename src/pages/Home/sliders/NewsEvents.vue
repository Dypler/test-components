<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'
import ShareIcon from './SlidersComponents/ShareIcon.vue'
import CopyIcon from './SlidersComponents/CopyIcon.vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules
const modules = [Navigation]

const prev = ref(null)
const next = ref(null)
</script>
<template>
  <div class="relative">
    <div ref="next" class="swiper-button-next transition"></div>
    <div ref="prev" class="swiper-button-prev transition"></div>
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :loop="true"
      :slidesPerView="4"
      :spaceBetween="30"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="w-[270px]">
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="relative">
            <div class="scale">
              <img
                class="block transition ease-out duration-700 group-hover:scale-[1.1]"
                src="/main/news1.png"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <p
            class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            01 февраля
          </p>
          <p class="font-bebas text-white font-bold text-2xl text-gradient-hover">
            Заголовок события, которое может называться длинно. При клике ведет на карточку
          </p>
          <p class="font-roboto text-white text-base leading-relaxed font-light">
            Не следует, однако забывать, что реализация намеченных плановых заданий требуют
            определения и уточнения направлений прогрессивного развития.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px]">
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="relative">
            <div class="scale">
              <img
                class="block transition ease-out duration-700 group-hover:scale-[1.1]"
                src="/main/news2.png"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <p
            class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            01 февраля
          </p>
          <p class="font-bebas text-white font-bold text-2xl text-gradient-hover">
            Заголовок события, которое может называться длинно. При клике ведет на карточку
          </p>
          <p class="font-roboto text-white text-base leading-relaxed font-light">
            Не следует, однако забывать, что реализация намеченных плановых заданий требуют
            определения и уточнения направлений прогрессивного развития.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px]">
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="relative">
            <div class="scale">
              <img
                class="block transition ease-out duration-700 group-hover:scale-[1.1]"
                src="/main/news3.png"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <p
            class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            01 февраля
          </p>
          <p class="font-bebas text-white font-bold text-2xl text-gradient-hover">
            Заголовок события, которое может называться длинно. При клике ведет на карточку
          </p>
          <p class="font-roboto text-white text-base leading-relaxed font-light">
            Не следует, однако забывать, что реализация намеченных плановых заданий требуют
            определения и уточнения направлений прогрессивного развития.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px]">
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="relative">
            <div class="scale">
              <img
                class="block transition ease-out duration-700 group-hover:scale-[1.1]"
                src="/main/news1.png"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <p
            class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            01 февраля
          </p>
          <p class="font-bebas text-white font-bold text-2xl text-gradient-hover">
            Заголовок события, которое может называться длинно. При клике ведет на карточку
          </p>
          <p class="font-roboto text-white text-base leading-relaxed font-light">
            Не следует, однако забывать, что реализация намеченных плановых заданий требуют
            определения и уточнения направлений прогрессивного развития.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px]">
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="relative">
            <div class="scale">
              <img
                class="block transition ease-out duration-700 group-hover:scale-[1.1]"
                src="/main/news1.png"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <p
            class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            01 февраля
          </p>
          <p class="font-bebas text-white font-bold text-2xl text-gradient-hover">
            Заголовок события, которое может называться длинно. При клике ведет на карточку
          </p>
          <p class="font-roboto text-white text-base leading-relaxed font-light">
            Не следует, однако забывать, что реализация намеченных плановых заданий требуют
            определения и уточнения направлений прогрессивного развития.
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
