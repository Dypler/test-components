<script setup>
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, computed } from 'vue'
import CopyIcon from '@common/CopyIcon.vue'
import ShareIcon from '@common/ShareIcon.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './NewsSlider.scss'

const modules = [Navigation, Pagination]

const prev = ref(null)
const next = ref(null)
const pagination = ref(null)

const breakpoints = {
  320: {
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1
  },
  768: {
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1
  },
  1024: {
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1
  }
}

const props = defineProps(['newsItems'])
const newsItems = props.newsItems

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    let trimmedText = text.substr(0, maxLength)

    if (trimmedText.lastIndexOf(' ') > 0) {
      // Проверка на наличие пробела
      trimmedText = trimmedText.substr(
        0,
        Math.min(trimmedText.length, trimmedText.lastIndexOf(' '))
      )
    }

    return trimmedText + '...'
  }
  return text
}

const truncatedNewsItems = computed(() => {
  return newsItems.map((news) => ({
    ...news,
    title: truncateText(news.title, 80), // Пример ограничения заголовка до 80 символов
    description: truncateText(news.description, 140) // Пример ограничения описания до 140 символов
  }))
})
</script>
<template>
  <div class="relative">
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
      :modules="modules"
      :breakpoints="breakpoints"
      class="mySwiper"
    >
      <swiper-slide
        class="active-slide background__slide"
        v-for="news in truncatedNewsItems"
        :key="news?.id"
      >
        <router-link :to="`/news/${news?.id}`">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]"
          >
            <div class="relative">
              <div class="scale">
                <img
                  class="block transition ease-out duration-700 group-hover:scale-[1.1] max-w-[227px] xl:max-w-[270px] h-[170px] md:h-[200px]"
                  :src="news?.imageUrl"
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
              {{ news?.date }}
            </p>
            <p
              class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
            >
              {{ news?.title }}
            </p>
            <p
              class="font-roboto text-white text-base leading-relaxed font-light"
              v-html="news?.description"
            ></p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
@media (min-width: 1280px) {
  .background__slide:hover {
    background: url('/main/backgroundSliderLong.svg') no-repeat;
    background-size: 100% 100%; /* Масштабирует изображение по ширине и высоте слайда */
    background-position: center;
  }
  .active-slide {
    height: auto !important;
  }
}
.active-slide {
  height: 600px !important;
  position: relative;
  width: fit-content !important;
}
</style>
