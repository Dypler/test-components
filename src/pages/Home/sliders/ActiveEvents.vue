<script setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import CopyIcon from './SlidersComponents/CopyIcon.vue'
import ShareIcon from './SlidersComponents/ShareIcon.vue'
import PartnersIcon from './SlidersComponents/PartnersIcon.vue'
import 'swiper/css'

import 'swiper/css/navigation'

const modules = [Navigation]

const prev = ref(null)
const next = ref(null)
</script>
<template>
  <div class="pt-[61px] relative z-50">
    <!-- Кнопки навигации -->
    <div ref="next" class="swiper-button-next transition"></div>
    <div ref="prev" class="swiper-button-prev transition"></div>
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :loop="false"
      :spaceBetween="10"
      :slidesPerView="4"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="active-slide">
        <div
          class="group relative flex flex-col gap-4 bg-no-repeat transition bg-center background__hover w-[580px] h-[429px] justify-end bg-[url('/main/news1.png')] cursor-pointer mx-[10px]"
        >
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
          <div class="flex flex-col gap-4 p-8">
            <div class="flex items-center gap-3">
              <p
                class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
              >
                01 февраля
              </p>
              <PartnersIcon />
            </div>

            <p class="font-bebas text-gradient-hover text-white font-bold text-4xl tracking-wider">
              Строительная компания успешно завершает крупный проект жилищного строительства
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <div class="flex flex-col gap-4 max-w-[270px] h-[429px] group cursor-pointer mx-[10px]">
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
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              24 января
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-2xl font-bold font-bebas leading-[28.80px] text-gradient-hover tracking-wider"
          >
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <div class="flex flex-col gap-4 max-w-[270px] h-[429px] group cursor-pointer mx-[10px]">
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
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              01 января
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-2xl font-bold font-bebas leading-[28.80px] text-gradient-hover tracking-wider"
          >
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <div class="flex flex-col gap-4 max-w-[270px] h-[429px] group cursor-pointer mx-[10px]">
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
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              01 января
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-2xl font-bold font-bebas leading-[28.80px] text-gradient-hover tracking-wider"
          >
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <div class="flex flex-col gap-4 max-w-[270px] h-[429px] group cursor-pointer mx-[10px]">
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
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              01 января
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-2xl font-bold font-bebas leading-[28.80px] text-gradient-hover tracking-wider"
          >
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <div class="flex flex-col gap-4 max-w-[270px] h-[429px] group cursor-pointer mx-[10px]">
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
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              01 января
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-2xl font-bold font-bebas leading-[28.80px] text-gradient-hover tracking-wider"
          >
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <div class="flex flex-col gap-4 max-w-[270px] h-[429px] group cursor-pointer mx-[10px]">
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
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              01 января
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-2xl font-bold font-bebas leading-[28.80px] text-gradient-hover tracking-wider"
          >
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.text-gradient-hover {
  transition: background-image 0.7s ease; /* Явно указываем, что переход применяется к background-size */
}
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
.scale {
  clip-path: polygon(0% 0%, 100% 0, 100% 80%, 85% 100%, 0% 100%);

  display: inline-block;
  overflow: hidden;
}

.background__hover {
  clip-path: polygon(0% 0%, 100% 0, 100% 75%, 82% 100%, 0% 100%);
  background-size: 100%;
  transition: background-size 0.7s ease;
}
.background__hover:hover {
  background-size: 110%;
}

.background__slide:hover {
  background: url('/main/backgroundSlider.svg') center no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0 0;
  z-index: 1;
  display: block;
}
.swiper-wrapper {
  height: max-content;
}
.active-slide {
  width: fit-content !important;
  padding-top: 30px;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  color: white;
  &:hover {
    background-image: linear-gradient(to right, #f19945, #da0048);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, -40px);
  left: auto;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, -40px);
  right: auto;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  color: #3e4d59;
  cursor: auto;
  pointer-events: none;
}

/* Дополнительные стили для кнопок/иконок могут быть добавлены здесь */
</style>
