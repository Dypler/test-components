<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const prev = ref(null)
    const next = ref(null)
    return {
      modules: [Navigation],
      prev,
      next
    }
  }
}
</script>
<template>
  <div class="pt-[150px] relative">
    <!-- Кнопки навигации -->
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
      <swiper-slide class="active-slide">
        <div
          class="relative flex flex-col gap-4 bg-no-repeat bg-center bg-cover w-[580px] h-[429px] justify-end bg-[url('/main/news1.png')]"
        >
          <a href="" class="cursor-pointer">
            <svg
              class="absolute right-3 top-3 z-10"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
              <path
                d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
                fill="white"
              />
            </svg>
          </a>
          <div class="flex flex-col gap-4 p-8">
            <p
              class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              01 февраля
            </p>
            <p class="font-bebas text-white font-bold text-4xl">
              Строительная компания успешно завершает крупный проект жилищного строительства
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="active-slide">
        <div class="flex flex-col gap-4 max-w-[270px]">
          <div class="relative">
            <img src="/main/news2.png" alt="" />
            <a href="" class="cursor-pointer">
              <svg
                class="absolute right-3 top-3 z-10"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
                <path
                  d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <p
            class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            24 января
          </p>
          <p class="text-white text-2xl font-bold font-bebas leading-[28.80px]">
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px] active-slide">
        <div class="flex flex-col gap-4 max-w-[270px]">
          <div class="relative">
            <img src="/main/news3.png" alt="" />
            <a href="" class="cursor-pointer">
              <svg
                class="absolute right-3 top-3 z-10"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
                <path
                  d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <p
            class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            24 января
          </p>
          <p class="text-white text-2xl font-bold font-bebas leading-[28.80px]">
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px] active-slide">
        <div class="flex flex-col gap-4 max-w-[270px]">
          <div class="relative">
            <img src="/main/news3.png" alt="" />
            <a href="" class="cursor-pointer">
              <svg
                class="absolute right-3 top-3 z-10"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
                <path
                  d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <p
            class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            24 января
          </p>
          <p class="text-white text-2xl font-bold font-bebas leading-[28.80px]">
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px] active-slide">
        <div class="flex flex-col gap-4 max-w-[270px]">
          <div class="relative">
            <img src="/main/news3.png" alt="" />
            <a href="" class="cursor-pointer">
              <svg
                class="absolute right-3 top-3 z-10"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
                <path
                  d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <p
            class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            24 января
          </p>
          <p class="text-white text-2xl font-bold font-bebas leading-[28.80px]">
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="w-[270px] active-slide">
        <div class="flex flex-col gap-4 max-w-[270px]">
          <div class="relative">
            <img src="/main/news3.png" alt="" />
            <a href="" class="cursor-pointer">
              <svg
                class="absolute right-3 top-3 z-10"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
                <path
                  d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <p
            class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            24 января
          </p>
          <p class="text-white text-2xl font-bold font-bebas leading-[28.80px]">
            Оптимизация процессов и повышение эффективности строительства: опыт строительной
            компании
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0 14px;
  z-index: 1;
  display: block;
}
.active-slide {
  width: fit-content !important;
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
