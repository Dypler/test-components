<script setup>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Grid, Pagination } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import ShareIcon from '@common/ShareIcon.vue'
import CopyIcon from '@common/CopyIcon.vue'
// Import Swiper styles

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import 'swiper/css/navigation'
import { COMPONENTS, getDate } from '@/components/components'

import './CoursesSlider.scss'

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

const courseItems = ref([])
async function fetchCourses() {
  try {
    const url = `${COMPONENTS.API}/courses/?page=1&counts=7`
    const response = await axios.get(url)
    let courses = response.data.data.courses

    // Фильтрация курсов по возрасту, если выбран

    // Маппинг курсов для вывода
    courseItems.value.push(
      ...courses
        .map((course) => {
          const dateDisplay = getDate(course?.date_start, course?.date_end)
          return {
            id: course.id,
            title: course.name,
            date: dateDisplay,
            backgroundImage: course.detail_picture,
            important: course.important
          }
        })
        .filter(Boolean)
    )
  } catch (error) {
    console.error('Ошибка при загрузке курсов: ', error)
  }
}

onMounted(fetchCourses)
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
      <!-- <swiper-slide class="first__slide">
        <router-link :to="`/courses/${courseItems[0]?.id}`">
          <div
            class="cursor-pointer group background__hover relative flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[640px] justify-end"
            :style="{ 'background-image': 'url(' + courseItems[0]?.backgroundImage + ')' }"
          >
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
            <div class="flex flex-col gap-4 p-8">
              <div class="flex">
                <p
                  class="border-2 border-white font-bebas text-xl flex text-white justify-center py-1 px-4"
                >
                  {{ courseItems[0]?.date }}
                </p>
              </div>

              <p
                class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[28px] xl:text-4xl tracking-wider"
              >
                {{ courseItems[0]?.title }}
              </p>
            </div>
          </div>
        </router-link>
      </swiper-slide> -->

      <swiper-slide
        v-for="(course, index) in courseItems"
        :key="course.id"
        :class="{ 'first-slide': index === 0 }"
      >
        <router-link :to="`/courses/${course?.id}`">
          <div
            class="relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full max-w-[350px] md:max-w-full h-[242px] xl:h-[300px] justify-end"
            :style="{ 'background-image': 'url(' + course?.backgroundImage + ')' }"
          >
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
            <div class="flex flex-col gap-4 p-8">
              <div class="flex">
                <p
                  class="border-2 border-white font-bebas text-xl flex text-white justify-center py-1 px-4"
                >
                  {{ course?.date }}
                </p>
              </div>
              <p
                class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
              >
                {{ course?.title }}
              </p>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 1280px) {
  :deep(.swiper-wrapper) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 40px;
  }

  :deep(.swiper) {
    padding: 0;
  }

  .first-slide {
    display: grid;
    grid-row: 1 / span 2;
    grid-column: 1 / span 1;
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
