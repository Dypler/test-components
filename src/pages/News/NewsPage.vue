<script setup>
import { ref, onMounted } from 'vue'
import CopyIcon from '../Home/sliders/SlidersComponents/CopyIcon.vue'
import ShareIcon from '../Home/sliders/SlidersComponents/ShareIcon.vue'
import 'ant-design-vue/lib/breadcrumb/style/index.css'
import 'ant-design-vue/lib/select/style/index.css'

const newsItems = ref([])
const pageSize = ref(8) // Количество новостей, отображаемых на странице
const totalNewsCount = ref(36) // Предполагаем, что всего у нас 50 новостей
const currentCount = ref(8) // Сколько новостей уже отображено

// Функция для загрузки новостей
async function fetchNews() {
  newsItems.value = Array.from({ length: currentCount.value }, (_, i) => ({
    date: `01 февраля`,
    title: 'Заголовок события, которое может называться длинно. При клике ведет на карточку',
    description:
      'Не следует, однако забывать, что реализация намеченных плановых заданий требует определения и уточнения направлений прогрессивного развития.',
    imageUrl: `/main/news1.png` // Допустим, API возвращает разные URL для каждой новости
  }))
}

// Вызываем загрузку начального списка новостей
onMounted(() => {
  fetchNews()
})

// Обработчик изменения количества новостей на странице
function handleChange(newSize) {
  currentCount.value = newSize
  fetchNews()
}

// Функция для загрузки дополнительных новостей
function loadMoreNews() {
  let additionalNews = Math.min(totalNewsCount.value, currentCount.value + 4)
  if (currentCount.value < totalNewsCount.value) {
    currentCount.value = additionalNews
    fetchNews()
  }
}
</script>
<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item> Новости </a-breadcrumb-item>
    </a-breadcrumb>
    <h1 class="font-bebas text-[36px] text-white text-left pt-[46px]">новости</h1>
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
          Краткое описание события. Очень важный элемент, который кратко описывает суть события. Не
          следует, однако забывать, что реализация намеченных плановых заданий требуют определения и
          уточнения направлений прогрессивного развития.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="flex justify-between pt-[73px]">
      <a-space>
        <a-select
          ref="select"
          v-model:value="value1"
          placeholder="Город"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="cherepovets">Череповец</a-select-option>
          <a-select-option value="kirovsk">Кировск</a-select-option>
          <a-select-option value="volkhov">Волхов</a-select-option>
          <a-select-option value="balakovo">Балаково</a-select-option>
        </a-select>
      </a-space>
      <div class="flex flex-row items-center gap-5">
        <p class="text-slate-500 text-base font-normal font-roboto leading-tight max-w-[93px]">
          Показать на странице
        </p>
        <a-space>
          <a-select v-model:value="pageSize" @change="handleChange" style="width: 83px">
            <a-select-option value="4">4</a-select-option>
            <a-select-option value="8">8</a-select-option>
            <a-select-option value="16">16</a-select-option>
          </a-select>
        </a-space>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-[40px] pt-[40px]"
      v-auto-animate
    >
      <div
        class="flex flex-col gap-[15px] md:gap-4 w-full group cursor-pointer"
        v-for="news in newsItems"
        :key="news.title"
      >
        <div class="relative">
          <div class="scale">
            <img
              class="block transition ease-out duration-700 group-hover:scale-[1.1]"
              :src="news.imageUrl"
              alt="News Image"
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
          {{ news.date }}
        </p>
        <p
          class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
        >
          {{ news.title }}
        </p>
        <p class="font-roboto text-white text-base leading-relaxed font-light">
          {{ news.description }}
        </p>
      </div>
    </div>

    <div class="text-center">
      <button
        @click="loadMoreNews"
        class="mt-10 max-h-[61px] mx-auto gradient__border font-bebas text-white text-2xl leading-[28px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
      >
        еще события
      </button>
    </div>
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
</style>
