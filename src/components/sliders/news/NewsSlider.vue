<script setup>
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import CopyIcon from '@common/CopyIcon.vue';
import ShareIcon from '@common/ShareIcon.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './NewsSlider.scss';

const modules = [Navigation, Pagination];

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);

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

const props = defineProps(['newsItems']);
const newsItems = props.newsItems;
</script>
<template>
  <div class="relative">
    <div ref="next" class="swiper-button-next transition"></div>
    <div ref="prev" class="swiper-button-prev transition"></div>
    <div ref="pagination" class="swiper-pagination"></div>

    <swiper :navigation="{
      prevEl: prev,
      nextEl: next
    }" :pagination="{
      el: pagination,
      clickable: true
    }" :loop="false" :modules="modules" :breakpoints="breakpoints" class="mySwiper">
      <swiper-slide class="active-slide background__slide" v-for="news in newsItems.slice(1)" :key="news?.id">
        <router-link :to="`/news/${news?.id}`">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]">
            <div class="relative">
              <div class="scale">
                <img class="block transition ease-out duration-700 group-hover:scale-[1.1]" :src="news?.imageUrl"
                  alt="" />
              </div>
              <div class="absolute right-3 top-3 z-10 flex gap-2">
                <CopyIcon />
                <ShareIcon />
              </div>
            </div>
            <p class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]">
              {{ news?.date }}
            </p>
            <p class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider">
              {{ news?.title }}
            </p>
            <p class="font-roboto text-white text-base leading-relaxed font-light" v-html="news?.description">
            </p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>


/* Дополнительные стили для кнопок/иконок могут быть добавлены здесь */
</style>
