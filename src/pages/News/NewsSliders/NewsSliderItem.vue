<script setup>
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Navigation, Pagination]
const props = defineProps(['photos']);
const prev = ref(null)
const next = ref(null)
const pagination = ref(null)

const breakpoints = {
  320: {
    slidesPerView: '3',
    spaceBetween: 14,
    slidesPerGroup: 1
  },
  768: {
    slidesPerView: '5',
    spaceBetween: 24,
    slidesPerGroup: 1
  },
  1024: {
    slidesPerView: '5',
    spaceBetween: 24,
    slidesPerGroup: 1
  }
}
</script>

<template>
  <div class="pt-[20px] xl:pt-[61px] relative z-50 max-w-[888px]">
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
      :loop="true"
      :modules="modules"
      :breakpoints="breakpoints"
      class="mySwiper flex ml-0"
    >
    <swiper-slide v-for="photo in props.photos" key="">
      <img class="w-full object-cover max-w-[162px]" :src="photo" alt="" />
    </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  top: 64%;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, -30px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
</style>
