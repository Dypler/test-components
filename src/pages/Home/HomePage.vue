<script setup>
import ActiveEvents from './sliders/ActiveEvents.vue'
import NewsEvents from './sliders/NewsEvents.vue'
import CoursesEvents from './sliders/CoursesEvents.vue'
import SitePartnersItems from './HomeComponents/SitePartnersItems.vue'

import BackgroundCircle from '../../components/background/BackgroundCircle.vue'
import BackgroundVertical from '../../components/background/BackgroundVertical.vue'
import BackgroundLogo from '../../components/background/BackgroundLogo.vue'
import BackgroundActiveCircle from '../../components/background/BackgroundActiveCircle.vue'
</script>
<template>
  <main class="relative">
    <section class="pt-16 pb-16 relative">
      <BackgroundActiveCircle class="absolute inset-x-[65%] top-[-150%] z-50" />
      <BackgroundCircle class="absolute inset-x-[44%] inset-y-[60%]" />

      <!-- <BackgroundCircle class="absolute top-0 inset-y-[50px] z-50" /> -->
      <BackgroundLogo class="absolute inset-x-[44%] inset-y-[5%] opacity-20" />
      <div class="container relative">
        <svg
          class="absolute inset-x-[0%] inset-y-[0%] -z-10 w-full max-w-[990px] h-full max-h-[480px]"
          viewBox="0 0 990 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1H989V399.586L909.586 479H1V1Z" stroke="white" stroke-width="2" />
        </svg>

        <div class="p-14 max-w-[990px]">
          <p class="text-white font-bebas font-bold text-[36px] leading-[36px]">ФОСАГРО</p>
          <h1
            class="font-bebas leading-[88px] text-[88px] bg-gradient-to-r from-gradient_start to-gradient_end text-transparent bg-clip-text pt-[12px] font-bebas"
          >
            ИНФОРМАЦИОННАЯ СИСТЕМА «ЛАБОРАТОРИЯ БЕЗОПАСНОСТИ»
          </h1>
          <p
            class="font-roboto text-white text-base font-light leading-relaxed max-w-[600px] pt-[12px] mb-[36px]"
          >
            Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют
            определения и уточнения модели развития.
          </p>

          <a
            class="mt-1 max-h-[61px] gradient__border font-bebas text-white text-[24px] leading-[28px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            href=""
            >подробнее</a
          >
        </div>
      </div>
    </section>
    <section class="pt-16 pb-16 relative">
      <div class="container">
        <BackgroundVertical class="absolute right-[58%] inset-y-[6%]" />
        <BackgroundVertical class="absolute inset-x-[80%] inset-y-[76%]" />
        <div class="flex justify-between items-center">
          <h2 class="font-bebas text-4xl text-white">АКТИВНЫЕ СОБЫТИЯ</h2>
          <router-link
            to="/events"
            class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            >все события
          </router-link>
        </div>
        <ActiveEvents />
      </div>
    </section>
    <section class="pt-16 pb-16 relative">
      <BackgroundActiveCircle class="absolute right-[75%] top-[50%]" />

      <div class="container flex flex-col gap-40">
        <div class="flex justify-between items-center">
          <h2 class="font-bebas text-white text-4xl">НОВОСТИ</h2>
          <router-link
            to="/news"
            class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            >все новости</router-link
          >
        </div>
      </div>
      <div
        class="relative w-full h-[713px] bg-[url('/main/bg_news.png')] bg-no-repeat bg-center bg-cover flex items-end mt-20"
      >
        <div class="container">
          <p
            class="border border-white font-bebas text-xl text-center text-white max-w-[109px] px-2 py-1"
          >
            1 февраля
          </p>
          <div class="flex pt-[18px] gap-8">
            <h2 class="w-full max-w-[564px] font-bebas text-white uppercase text-5xl">
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </h2>
            <p class="w-[582px] font-roboto text-[20px] text-white leading-[32px] font-light">
              Краткое описание события. Очень важный элемент, который кратко описывает суть события.
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-16 pb-16">
      <div class="container">
        <NewsEvents />
      </div>

      <BackgroundCircle class="absolute inset-x-[40%] inset-y-[58%]" />
    </section>
    <section class="pt-16 pb-24 relative">
      <div class="container">
        <div class="flex justify-between items-center">
          <h2 class="font-bebas text-white text-4xl">Курсы</h2>
          <router-link
            to="/courses"
            class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            >все курсы</router-link
          >
        </div>
        <CoursesEvents />
        <BackgroundVertical class="absolute right-[70%] inset-y-[55%]" />

        <BackgroundVertical class="absolute left-[80%] inset-y-[35%]" />
      </div>
    </section>
    <section class="pt-16 pb-16">
      <div class="container">
        <SitePartnersItems />
      </div>
    </section>
  </main>
</template>
<style scoped>
.box {
  position: relative;
  z-index: 1000;
  border: 2px solid rgb(255, 255, 255);
  background-color: transparent; /* Задний фон вашего блока */
  /* Остальные стили для вашего блока */
}

.box--angled-border::before {
  content: '';
  position: absolute;
  bottom: -2px;
  right: -2px;
  border-top: 80px solid white;
  border-right: 80px solid #0a1219;
  z-index: -10;
}

.box--angled-border::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  border-top: 80px solid #0a1219;
  border-right: 80px solid transparent;
  z-index: -10;
}
.solid {
  z-index: 1000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    #fff 0%,
    #fff 1px,
    transparent 1px,
    transparent calc(100% - 1px),
    #fff calc(100% - 1px),
    #fff 100%
  );
  background-repeat: no-repeat;
}
</style>
