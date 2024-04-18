<script setup>
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import CopyIcon from './SlidersComponents/CopyIcon.vue'
import ShareIcon from './SlidersComponents/ShareIcon.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
      <swiper-slide class="active-slide background__slide">
        <router-link to="/news/id">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]"
          >
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
            <p
              class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
            >
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </p>
            <p class="font-roboto text-white text-base leading-relaxed font-light">
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <router-link to="/news/id">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]"
          >
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
            <p
              class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
            >
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </p>
            <p class="font-roboto text-white text-base leading-relaxed font-light">
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <router-link to="/news/id">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]"
          >
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
            <p
              class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
            >
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </p>
            <p class="font-roboto text-white text-base leading-relaxed font-light">
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <router-link to="/news/id">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]"
          >
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
            <p
              class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
            >
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </p>
            <p class="font-roboto text-white text-base leading-relaxed font-light">
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="active-slide background__slide">
        <router-link to="/news/id">
          <div
            class="flex flex-col gap-[15px] md:gap-4 max-w-[227px] xl:max-w-[270px] group cursor-pointer md:mx-[15px] mr-[20px]"
          >
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
            <p
              class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
            >
              Заголовок события, которое может называться длинно. При клике ведет на карточку
            </p>
            <p class="font-roboto text-white text-base leading-relaxed font-light">
              Не следует, однако забывать, что реализация намеченных плановых заданий требуют
              определения и уточнения направлений прогрессивного развития.
            </p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
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

@media (min-width: 1280px) {
  .background__slide:hover {
    background: url('/main/backgroundSliderLong.svg') center no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
  }
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
  padding-top: 10px;
  padding-bottom: 30px;
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
@media (min-width: 1280px) {
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
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  color: #3e4d59;
  cursor: auto;
  pointer-events: none;
}

@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .swiper-pagination {
    display: block !important;
  }
}
.swiper-pagination {
  display: none;
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination-bullet {
  width: 28px;
  height: 4px;
  display: inline-block;
  border-radius: 0;
  background: white;
  opacity: 0.4;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: white;
}
/* Дополнительные стили для кнопок/иконок могут быть добавлены здесь */
</style>
