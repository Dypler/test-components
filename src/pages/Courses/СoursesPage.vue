<script setup>
import { ref, onMounted } from 'vue'
import CopyIcon from '../Home/sliders/SlidersComponents/CopyIcon.vue'
import ShareIcon from '../Home/sliders/SlidersComponents/ShareIcon.vue'

const pageSize = ref(8) // Количество курсов, отображаемых на странице
const totalCourseCount = ref(36) // Всего курсов
const currentCount = ref(pageSize.value) // Сколько курсов уже отображено

const courseItems = ref([])

// Функция для загрузки данных курсов
async function fetchCourses() {
  courseItems.value = Array.from({ length: currentCount.value }, () => ({
    date: `10-16 февраля`,
    title: 'Заголовок курса. При клике ведет на карточку',
    backgroundImage: `/main/courses1.png` // Предположим, что каждый курс имеет свое изображение
  }))
}

onMounted(() => {
  fetchCourses()
})

// Обработчик изменения количества курсов на странице
function handleChange(newSize) {
  currentCount.value = Number(newSize)
  fetchCourses()
}

// Функция для загрузки дополнительных курсов
function loadMoreCourses() {
  let additionalCourses = Math.min(totalCourseCount.value, currentCount.value + 4)
  if (currentCount.value < totalCourseCount.value) {
    currentCount.value = additionalCourses
    fetchCourses()
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
    <div class="flex justify-between pt-[73px] items-center">
      <a-space>
        <a-select
          style="height: 46px"
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
      <div class="flex flex-row items-center gap-5">
        <p class="text-slate-500 text-base font-normal font-roboto leading-tight max-w-[93px]">
          Показать <br />
          на странице
        </p>
        <a-space>
          <a-select
            v-model:value="pageSize"
            @change="handleChange"
            style="width: 83px; height: 46px"
          >
            <a-select-option value="4">4</a-select-option>
            <a-select-option value="8">8</a-select-option>
            <a-select-option value="16">16</a-select-option>
          </a-select>
        </a-space>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[40px] pt-[40px]" v-auto-animate>
      <div
        v-for="(course, index) in courseItems"
        :key="course.title"
        :class="{ 'large-grid-item': index === 0 }"
        class="cards-list relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full md:max-w-full min-h-[230px] md:min-h-[300px] h-full justify-end"
        :style="{ backgroundImage: `url('${course.backgroundImage}')` }"
      >
        <div class="absolute right-3 top-3 z-10 flex gap-2">
          <CopyIcon />
          <ShareIcon />
        </div>
        <div class="flex flex-col gap-4 p-8">
          <p
            class="border-2 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
          >
            {{ course.date }}
          </p>
          <p
            class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider"
          >
            {{ course.title }}
          </p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
        @click="loadMoreCourses"
        class="mt-10 max-h-[61px] mx-auto gradient__border font-bebas text-white text-2xl leading-[28px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"
      >
        еще события
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 1280px) {
  .large-grid-item {
    grid-area: 1 / 1 / 3 / 2;
  }
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
