<script setup>
import ActiveEvents from '@mainswiper/ActiveEvents.vue'
import NewsEvents from '@mainswiper/NewsEvents.vue'
import CoursesEvents from '@mainswiper/CoursesEvents.vue'
import SitePartnersItems from './HomeComponents/SitePartnersItems.vue'

import BackgroundCircle from '@background/BackgroundCircle.vue'
import BackgroundVertical from '@background/BackgroundVertical.vue'
import BackgroundLogo from '@background/BackgroundLogo.vue'
import BackgroundActiveCircle from '@background/BackgroundActiveCircle.vue'
</script>
<template>
  <main class="relative">
    <section
      class="pt-[22px] pb-[31px] md:pt-[42px] md:pb-[41px] 2xl:pt-[131px] 2xl:pb-16 relative"
    >
      <BackgroundActiveCircle class="hidden md:block absolute inset-x-[65%] top-[-150%] z-50" />
      <BackgroundCircle
        class="absolute inset-x-[20%] inset-y-[50%] md:inset-x-[38%] md:inset-y-[38%]"
      />

      <BackgroundLogo
        class="absolute inset-x-[50%] inset-y-[-10%] md:inset-x-[44%] md:inset-y-[5%] opacity-20 w-full"
      />
      <div class="container relative">
        <svg
          preserveAspectRatio="none"
          class="absolute left-[16px] inset-y-[0%] -z-10 w-[90%] lg:w-full max-w-[990px] h-full xl:max-h-[480px]"
          viewBox="0 0 990 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1H989V399.586L909.586 479H1V1Z" stroke="white" stroke-width="2" />
        </svg>

        <div class="p-[30px] md:p-10 xl:p-14 h-full max-w-[990px] background__main">
          <p
            class="text-white font-bebas font-bold text-[24px] md:text-[32px] xl:text-[36px] leading-[36px]"
          >
            ФОСАГРО
          </p>
          <h1
            class="text-[38px] leading-[38px] md:text-[66px] md:leading-[66px] xl:leading-[88px] xl:text-[88px] bg-gradient-to-r from-gradient_start to-gradient_end text-transparent bg-clip-text pt-[10px] xl:pt-3 font-bebas"
          >
            ИНФОРМАЦИОННАЯ СИСТЕМА «ЛАБОРАТОРИЯ БЕЗОПАСНОСТИ»
          </h1>
          <p
            class="font-roboto text-white text-base font-light leading-relaxed pt-[12px] mb-[36px]"
          >
            Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют
            определения и уточнения модели развития.
          </p>

          <a
            class="mt-1 max-h-[61px] gradient__border font-bebas text-white text-2xl leading-[28px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            href=""
            >подробнее</a
          >
        </div>
      </div>
    </section>
    <section class="pb-[44px] xl:pt-16 xl:pb-16 relative">
      <div class="container">
        <BackgroundVertical class="hidden md:block absolute right-[58%] inset-y-[6%]" />
        <BackgroundVertical class="hidden md:block absolute inset-x-[80%] inset-y-[76%]" />
        <div class="flex justify-between items-center">
          <h2 class="font-bebas text-[32px] md:text-5xl xl:text-[54px] text-white">
            АКТИВНЫЕ СОБЫТИЯ
          </h2>
          <router-link
            to="/events"
            class="gradient__border font-bebas text-white text-2xl uppercase font-normal py-[10px] px-4 sm:px-16 sm:py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            ><span class="hidden sm:block">все события</span>
            <span class="block sm:hidden"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="25"
                viewBox="0 0 13 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.933371 25L-1.46312e-06 24.0094L11.1333 12.5L5.49246e-07 0.990614L0.933373 4.35218e-07L13 12.5L0.933371 25Z"
                  fill="white"
                /></svg
            ></span>
          </router-link>
        </div>
        <ActiveEvents />
      </div>
    </section>
    <section class="pb-[44px] xl:pt-16 xl:pb-16 relative">
      <BackgroundActiveCircle class="absolute right-[75%] top-[50%]" />
      <div class="container flex flex-col gap-40">
        <div class="flex justify-between items-center">
          <h2 class="font-bebas text-[32px] md:text-5xl xl:text-[54px] text-white">НОВОСТИ</h2>
          <router-link
            to="/news"
            class="gradient__border font-bebas text-white text-2xl uppercase font-normal py-[10px] px-4 sm:px-16 sm:py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            ><span class="hidden sm:block">все новости</span>
            <span class="block sm:hidden"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="25"
                viewBox="0 0 13 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.933371 25L-1.46312e-06 24.0094L11.1333 12.5L5.49246e-07 0.990614L0.933373 4.35218e-07L13 12.5L0.933371 25Z"
                  fill="white"
                /></svg
            ></span>
          </router-link>
        </div>
      </div>
      <div
        class="relative w-full h-[500px] md:h-[683px] xl:h-[713px] bg-[url('/main/bg_news.png')] bg-no-repeat bg-center bg-cover flex items-end mt-[30px] md:mt-[66px] xl:mt-20"
      >
        <div class="container cursor-pointer">
          <p
            class="border-2 border-white font-bebas text-xl text-center text-white max-w-[109px] px-2 py-1"
          >
            1 февраля
          </p>
          <div class="flex pt-[18px] xl:gap-8 flex-col gap-[10px] md:flex-row">
            <h2
              class="w-full max-w-[564px] font-bebas text-white text-[28px] leading-[33.60px] md:text-[38px] md:leading-[45px] xl:text-[54px] xl:leading-[54px]"
            >
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </h2>
            <p
              class="w-max-[582px] w-full font-roboto text-[14px] md:text-[16px] xl:text-[20px] text-white font-light"
            >
              Краткое описание события. Очень важный элемент, который кратко описывает суть события.
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-[44px] xl:pt-16 xl:pb-16">
      <div class="container">
        <NewsEvents />
      </div>
      <BackgroundCircle class="hidden md:block absolute inset-x-[35%] inset-y-[58%]" />
    </section>
    <section class="pb-[69px] sm:pb-[94px] xl:pt-16 xl:pb-16 relative">
      <div class="container">
        <div class="flex justify-between items-center">
          <h2 class="font-bebas text-white text-[32px] md:text-5xl xl:text-[54px]">Курсы</h2>
          <router-link
            to="/courses"
            class="gradient__border font-bebas text-white text-2xl uppercase font-normal py-[10px] px-4 sm:px-16 sm:py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
            ><span class="hidden sm:block">все курсы</span>
            <span class="block sm:hidden"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="25"
                viewBox="0 0 13 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.933371 25L-1.46312e-06 24.0094L11.1333 12.5L5.49246e-07 0.990614L0.933373 4.35218e-07L13 12.5L0.933371 25Z"
                  fill="white"
                /></svg
            ></span>
          </router-link>
        </div>
        <CoursesEvents />
        <BackgroundVertical class="hidden md:block absolute right-[70%] inset-y-[55%]" />

        <BackgroundVertical class="hidden md:block absolute left-[80%] inset-y-[35%]" />
        <BackgroundCircle class="absolute inset-x-[30%] inset-y-[-10%]" />
      </div>
    </section>
    <section class="pt-10 md:pt-16 p pb-16 relative">
      <div class="container">
        <SitePartnersItems />
      </div>
    </section>
  </main>
</template>
<style scoped></style>
