<script setup>
import SiteActiveEvents from './SiteActiveEvents.vue'
import SiteNewsEvents from './SiteNewsEvents.vue'
import SiteCoursesEvents from './SiteCoursesEvents.vue'
import SitePartnersItems from './SitePartnersItems.vue'
import SiteFooter from './SiteFooter.vue'
</script>
<template>
  <main class="border border-red-500">
    <h2 class="font-bebas text-4xl text-white">SiteMain.vue</h2>
    <div class="ml-10 mr-10 h-max">
      <section class="pt-16 pb-16 relative">
        <div class="container">
          <div class="border border-white p-14 max-w-[990px]">
            <p class="text-white font-bebas font-bold text-2xl">ФОСАГРО</p>
            <h1
              class="font-bebas text-5xl bg-gradient-to-r from-gradient_start to-gradient_end text-transparent bg-clip-text pt-[12px] font-bebas"
            >
              ИНФОРМАЦИОННАЯ СИСТЕМА «ЛАБОРАТОРИЯ БЕЗОПАСНОСТИ» INFORMATION SYSTEM "SAFETY
              LABORATORY"
            </h1>
            <p class="font-roboto text-[16px] text-white max-w-[600px] pt-[12px] mb-[24px]">
              Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют
              определения и уточнения модели развития.
            </p>
            <a
              class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-8 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
              href=""
              >подробнее</a
            >
          </div>
        </div>
      </section>
      <section class="pt-16 pb-16">
        <div class="container">
          <div class="flex justify-between items-center">
            <h2 class="font-bebas text-4xl text-white">АКТИВНЫЕ СОБЫТИЯ</h2>
            <a
              class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-8 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
              href=""
              >все события</a
            >
          </div>
          <SiteActiveEvents />
        </div>
      </section>
      <section class="pt-16 pb-16">
        <div class="container">
          <div class="flex justify-between items-center">
            <h2 class="font-bebas text-white text-4xl">НОВОСТИ</h2>
            <a
              class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-8 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
              href=""
              >все новости</a
            >
          </div>
          <div class="flex flex-col">
            <p></p>
            <div class="flex justify-between">
              <h2 class="font-bebas text-white uppercase text-5xl">
                Заголовок события, которое может называться длинно. При клике ведет на карточку
              </h2>
              <p class="font-roboto text-[20px] text-white">
                Краткое описание события. Очень важный элемент, который кратко описывает суть
                события. Не следует, однако забывать, что реализация намеченных плановых заданий
                требуют определения и уточнения направлений прогрессивного развития.
              </p>
            </div>
          </div>
          <SiteNewsEvents />
        </div>
      </section>
      <section class="pt-16 pb-16">
        <div class="container">
          <div class="flex justify-between items-center">
            <h2 class="font-bebas text-white text-4xl">Курсы</h2>
            <a
              class="gradient__border font-bebas text-white text-[22px] uppercase font-normal px-8 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
              href=""
              >все курсы</a
            >
          </div>
          <SiteCoursesEvents />
        </div>
      </section>
      <section class="pt-16 pb-16">
        <div class="container">
          <SitePartnersItems />
        </div>
      </section>
    </div>
  </main>
  <footer>
    <SiteFooter />
  </footer>
</template>
<style scoped>
.gradient__border {
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, #f19945, #da0048) 1;
  &:active {
    border: 1px solid white;
  }
}
</style>
