<script setup>
import axios from 'axios'

import { ref, onMounted, computed } from 'vue'
import CopyIcon from '@common/CopyIcon.vue'
import ShareIcon from '@common/ShareIcon.vue'
import 'ant-design-vue/lib/breadcrumb/style/index.css'
import 'ant-design-vue/lib/select/style/index.css'
import { COMPONENTS, getDate } from '@/components/components'

import './NewsPage.scss'

const newsItems = ref([])
const pageSize = ref(4) // Начальное количество отображаемых курсов
const pageNum = ref(1) // Текущее количество загружаемых элементов

// Функция для загрузки новостей
async function fetchNews() {
  try {
    const url = `${COMPONENTS.API}/feeds/?page=${pageNum.value}&counts=${pageSize.value}`
    const response = await axios.get(url)
    let feeds = response.data.data.feeds

    newsItems.value.push(
      ...feeds
        .map((course) => {
          const dateDisplay = getDate(course?.date_start, course?.date_end)
          return {
            id: course.id,
            title: course.name,
            date: dateDisplay,
            imageUrl: course.preview_picture,
            description: course.preview_text,
            important: course.important
          }
        })
        .filter(Boolean)
    )
    console.log(newsItems.value[0]?.date)
  } catch (error) {
    console.error('Ошибка при загрузке курсов: ', error)
  }
}

// Вызываем загрузку начального списка новостей
onMounted(() => {
  fetchNews()
})

// Обработчик изменения количества новостей на странице
function handleChange(newSize) {
  pageSize.value = newSize
  newsItems.value = []
  pageNum.value = 1
  fetchNews()
}

// Функция для загрузки дополнительных новостей
function loadMoreNews() {
  pageNum.value++
  fetchNews()
}
</script>
<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item> Новости </a-breadcrumb-item>
    </a-breadcrumb>
    <h1
      class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] text-white text-left pt-[27px] md:pt-[30px] xl:pt-[46px]"
    >
      новости
    </h1>
  </div>
  <router-link :to="`/news/${newsItems[0]?.id}`">
    <div class="relative w-full h-[500px] md:h-[683px] xl:h-[713px] flex items-end">
      <div
        class="absolute inset-0 bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: 'url(' + newsItems[0]?.imageUrl + ')', opacity: 0.3 }"
      ></div>
      <div class="container cursor-pointer z-10 pb-3 group">
        <p
          class="border-2 border-white font-bebas text-xl text-center text-white max-w-[109px] px-2 py-1"
        >
          {{ newsItems[0]?.date }}
        </p>
        <div class="flex pt-[18px] xl:gap-8 flex-col gap-[10px] md:flex-row">
          <h2
            class="w-full text-gradient-hover max-w-[564px] font-bebas text-white text-[28px] leading-[33.60px] md:text-[38px] md:leading-[45px] xl:text-[54px] xl:leading-[54px]"
          >
            {{ newsItems[0]?.title }}
          </h2>
          <p
            class="w-max-[582px] w-full font-roboto text-[14px] md:text-[16px] xl:text-[20px] text-white font-light"
            v-html="newsItems[0]?.description"
          ></p>
        </div>
      </div>
    </div>
  </router-link>
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
          Показать <br />
          на странице
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
      <router-link
        class="flex flex-col gap-[15px] md:gap-4 group cursor-pointer"
        v-for="news in newsItems.slice(1)"
        :key="news.title"
        :to="`/news/${news.id}`"
      >
        <div class="relative">
          <div class="scale">
            <img
              class="block transition ease-out duration-700 group-hover:scale-[1.1] w-full md:h-[200px]"
              :src="news.imageUrl"
              alt="News Image"
            />
          </div>
          <div class="absolute right-3 top-3 z-10 flex gap-2">
            <CopyIcon />
            <ShareIcon />
          </div>
        </div>
        <div class="flex">
          <p
            class="border-2 border-white font-bebas text-xl flex text-white justify-center py-1 px-4"
          >
            {{ news?.date }}
          </p>
        </div>
        <p
          class="font-bebas text-white font-bold text-[20px] xl:text-2xl text-gradient-hover tracking-wider"
        >
          {{ news?.title }}
        </p>
        <p
          class="font-roboto text-white text-base leading-relaxed font-light"
          v-html="news?.description"
        ></p>
      </router-link>
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
<style scoped></style>
