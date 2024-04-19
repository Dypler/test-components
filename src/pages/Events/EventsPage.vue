<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import CopyIcon from '@common/CopyIcon.vue'
import ShareIcon from '@common/ShareIcon.vue'
import FilterIcon from '@common/FilterIcon.vue'
import 'ant-design-vue/lib/breadcrumb/style/index.css'
import 'ant-design-vue/lib/select/style/index.css'

const eventsItems = ref([])
const pageSize = ref(8) // Количество новостей, отображаемых на странице
const totalEventsCount = ref(36) // Предполагаем, что всего у нас 50 новостей
const currentCount = ref(8) // Сколько новостей уже отображено
const windowWidth = ref(window.innerWidth)
const displayMode = ref('плиткой')
async function fetchEvents() {
  eventsItems.value = Array.from({ length: currentCount.value }, (_, i) => ({
    id: i + 1,
    date: '01 февраля', // Пример даты, можете установить свою логику для дат
    title:
      i % 10 === 0
        ? 'Важное событие: Строительная компания успешно завершает крупный проект'
        : 'Обычное событие: Оптимизация процессов и повышение эффективности строительства',
    isImportant: windowWidth.value >= 768 && i % 10 === 0,
    backgroundImage: i % 10 === 0 ? '/main/news1.png' : '/main/news1.png'
  }))
}
function handleResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  fetchEvents()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Следим за изменением ширины окна, чтобы обновить isImportant
watch(windowWidth, () => {
  fetchEvents() // Перезагрузка событий для обновления isImportant
})
// Вызываем загрузку начального списка новостей
onMounted(() => {
  fetchEvents()
})

// Обработчик изменения количества новостей на странице
function handleChange(newSize) {
  currentCount.value = newSize
  fetchEvents()
}

// Функция для загрузки дополнительных новостей
function loadMoreNews() {
  let additionalNews = Math.min(totalEventsCount.value, currentCount.value + 4)
  if (currentCount.value < totalEventsCount.value) {
    currentCount.value = additionalNews
    fetchEvents()
  }
}
//фильтр
const isFilterVisible = ref(true)
const filterText = ref('Скрыть фильтр')

const toggleFilter = () => {
  isFilterVisible.value = !isFilterVisible.value
  filterText.value = isFilterVisible.value ? 'Фильтр' : 'Скрыть фильтр'
}
</script>
<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item> События </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="flex justify-between items-center pt-[27px] md:pt-[30px] xl:pt-[46px]">
      <h1 class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] text-white text-left">
        события
      </h1>
      <div @click="toggleFilter" class="flex md:hidden cursor-pointer gap-[15px] items-center">
        <p class="text-slate-500 text-sm font-normal font-roboto">{{ filterText }}</p>
        <FilterIcon :isActive="isFilterVisible" />
      </div>
    </div>
  </div>
  <div class="container">
    <div
      v-if="isFilterVisible"
      class="flex flex-col md:flex-row justify-between pt-[17px] md:pt-[37px] xl:pt-[43px] gap-[10px]"
    >
      <div class="flex flex-col xl:flex-row gap-[10px]">
        <div class="flex xl:flex-row gap-[10px]" v-auto-animate>
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
        </div>
        <div class="flex gap-[10px]">
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
      </div>

      <div
        class="flex flex-row md:flex-col xl:flex-row items-start md:items-end xl:items-center gap-[10px]"
      >
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
            v-model="displayMode"
            placeholder="Плиткой"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="Плиткой">
              <img src="/main/plitka.svg" alt="" />
              Плиткой
            </a-select-option>
            <a-select-option value="Списком">Списком</a-select-option>
            <a-select-option value="archive">Календарь</a-select-option>
          </a-select>
        </a-space>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-[40px] pt-[40px]">
      <router-link
        v-for="event in eventsItems"
        :key="event.id"
        :to="'/events/id'"
        class="group cursor-pointer"
        :class="{ important__event: event.isImportant }"
      >
        <div
          v-if="event.isImportant"
          class="relative flex flex-col gap-4 bg-no-repeat transition bg-center background__hover md:h-[350px] xl:h-[429px] justify-between"
          :style="{ backgroundImage: `url('${event.backgroundImage}')` }"
        >
          <div class="relative">
            <div class="scale">
              <img
                class="block md:hidden transition ease-out duration-700 group-hover:scale-[1.1] w-full object-cover"
                :src="event.backgroundImage"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <div class="flex flex-col gap-4 md:p-8">
            <div class="flex items-center gap-3">
              <p
                class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
              >
                {{ event.date }}
              </p>
              <PartnersIcon />
            </div>
            <p
              class="font-bebas text-gradient-hover text-white font-bold text-[20px] md:text-[30px] leading-[30px] xl:text-4xl tracking-wider"
            >
              {{ event.title }}
            </p>
          </div>
        </div>
        <div v-else class="flex flex-col gap-4">
          <div class="relative">
            <div class="scale">
              <img
                class="block transition ease-out duration-700 group-hover:scale-[1.1]"
                :src="event.backgroundImage"
                alt=""
              />
            </div>
            <div class="absolute right-3 top-3 z-10 flex gap-2">
              <CopyIcon />
              <ShareIcon />
            </div>
          </div>
          <div class="flex items-center gap-3">
            <p
              class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
            >
              {{ event.date }}
            </p>
            <PartnersIcon />
          </div>
          <p
            class="text-white text-[20px] leading-[30px] xl:text-2xl font-bold font-bebas xl:leading-[28.80px] text-gradient-hover tracking-wider"
          >
            {{ event.title }}
          </p>
        </div>
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
.important__event {
  grid-area: 1 / 1 / 2 / 3;
}
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
