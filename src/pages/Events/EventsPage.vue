<script setup>
import { ref, onMounted } from 'vue'
import CopyIcon from '@mainswiper/SlidersComponents/CopyIcon.vue'
import ShareIcon from '@mainswiper/SlidersComponents/ShareIcon.vue'
import 'ant-design-vue/lib/breadcrumb/style/index.css'
import 'ant-design-vue/lib/select/style/index.css'

const newsItems = ref([])
const pageSize = ref(8) // Количество новостей, отображаемых на странице
const totalNewsCount = ref(36) // Предполагаем, что всего у нас 50 новостей
const currentCount = ref(8) // Сколько новостей уже отображено

// Функция для загрузки новостей
async function fetchNews() {
  newsItems.value = Array.from({ length: currentCount.value }, () => ({
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
      <a-breadcrumb-item> События </a-breadcrumb-item>
    </a-breadcrumb>
    <h1
      class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] text-white text-left pt-[27px] md:pt-[30px] xl:pt-[46px]"
    >
      события
    </h1>
  </div>
  <div class="container">
    <div class="flex justify-between pt-[73px]">
      <div class="flex gap-[10px]">
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            placeholder="Возраст"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="age_12">от 12 лет</a-select-option>
            <a-select-option value="age_16">от 16 лет</a-select-option>
            <a-select-option value="age_18">от 18 лет</a-select-option>
          </a-select>
        </a-space>
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
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            placeholder="События партнеров"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="cherepovets">Событие 1</a-select-option>
            <a-select-option value="kirovsk">Событие 2</a-select-option>
          </a-select>
        </a-space>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            placeholder="В архиве"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="сurrent">Актуальные</a-select-option>
            <a-select-option value="archive">В архиве</a-select-option>
          </a-select>
        </a-space>
      </div>

      <div class="flex flex-row items-center gap-[10px]">
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
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            placeholder="Плиткой"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="сurrent"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.25 7.33342C8.25 6.82715 7.83959 6.41675 7.33333 6.41675C6.82707 6.41675 6.41667 6.82715 6.41667 7.33341V9.16675C6.41667 9.67301 6.82707 10.0834 7.33333 10.0834C7.83959 10.0834 8.25 9.67301 8.25 9.16675V7.33342Z"
                  fill="#677F92"
                />
                <path
                  d="M8.25 12.8334C8.25 12.3272 7.83959 11.9167 7.33333 11.9167C6.82707 11.9167 6.41667 12.3272 6.41667 12.8334V14.6667C6.41667 15.173 6.82707 15.5834 7.33333 15.5834C7.83959 15.5834 8.25 15.173 8.25 14.6667V12.8334Z"
                  fill="#677F92"
                />
                <path
                  d="M11.9165 7.33342C11.9165 6.82715 11.5061 6.41675 10.9998 6.41675C10.4936 6.41675 10.0832 6.82715 10.0832 7.33342V9.16675C10.0832 9.67301 10.4936 10.0834 10.9998 10.0834C11.5061 10.0834 11.9165 9.67301 11.9165 9.16675V7.33342Z"
                  fill="#677F92"
                />
                <path
                  d="M11.9165 12.8334C11.9165 12.3272 11.5061 11.9167 10.9998 11.9167C10.4936 11.9167 10.0832 12.3272 10.0832 12.8334V14.6667C10.0832 15.173 10.4936 15.5834 10.9998 15.5834C11.5061 15.5834 11.9165 15.173 11.9165 14.6667V12.8334Z"
                  fill="#677F92"
                />
                <path
                  d="M15.5835 7.33342C15.5835 6.82715 15.1731 6.41675 14.6668 6.41675C14.1606 6.41675 13.7502 6.82715 13.7502 7.33341V9.16675C13.7502 9.67301 14.1606 10.0834 14.6668 10.0834C15.1731 10.0834 15.5835 9.67301 15.5835 9.16675V7.33342Z"
                  fill="#677F92"
                />
                <path
                  d="M15.5835 12.8334C15.5835 12.3272 15.1731 11.9167 14.6668 11.9167C14.1606 11.9167 13.7502 12.3272 13.7502 12.8334V14.6667C13.7502 15.173 14.1606 15.5834 14.6668 15.5834C15.1731 15.5834 15.5835 15.173 15.5835 14.6667V12.8334Z"
                  fill="#677F92"
                />
                <rect
                  x="2.6665"
                  y="2.66675"
                  width="16.6667"
                  height="16.6667"
                  rx="2"
                  stroke="#677F92"
                  stroke-width="2"
                /></svg
              >Плиткой</a-select-option
            >
            <a-select-option value="archive">Списком</a-select-option>
            <a-select-option value="archive">Календарь</a-select-option>
          </a-select>
        </a-space>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-[40px] pt-[40px]"
      v-auto-animate
    >
      <router-link
        to="/news/id"
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
