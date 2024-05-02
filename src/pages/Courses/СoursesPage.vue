<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CopyIcon from '../../components/common/CopyIcon.vue'
import ShareIcon from '../../components/common/ShareIcon.vue'

import { getDate, COMPONENTS } from '@/components/components';

import './СoursesPage.scss'


const pageSize = ref(4) // Начальное количество отображаемых курсов
const pageNum = ref(1) // Текущее количество загружаемых элементов
const courseItems = ref([]) // Список курсов
const selectedAge = ref('') // Выбранный возраст

// Парсинг даты из строки

// Загрузка курсов с учетом возраста и количества
async function fetchCourses() {
  try {
    const url = `${COMPONENTS.API}/courses/?page=${pageNum.value}&counts=${pageSize.value}`;
    const response = await axios.get(url)
    let courses = response.data.data.courses

    // Фильтрация курсов по возрасту, если выбран
    if (selectedAge.value) {
      courses = courses.filter((course) => {
        const courseAge = parseInt(course.age.match(/\d+/)[0], 10)
        const filterAge = parseInt(selectedAge.value.match(/\d+/)[0], 10)
        return courseAge >= filterAge
      })
    }

    // Маппинг курсов для вывода
    courseItems.value.push(
      ...courses
        .map((course) => {
          const dateDisplay = getDate(course?.date_start, course?.date_end);
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

// Обработчик изменения размера страницы
function handleChange(newSize) {
  pageSize.value = Number(newSize);
  pageNum.value = 1;
  courseItems.value = [];
  fetchCourses()
}

// Загрузка дополнительных курсов
function loadMoreCourses() {
  pageNum.value++;
  fetchCourses()
}
</script>

<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item> Обучающие материалы </a-breadcrumb-item>
    </a-breadcrumb>
    <h1
      class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] text-white text-left pt-[27px] md:pt-[30px] xl:pt-[46px]">
      Обучающие материалы
    </h1>
    <div class="flex justify-between pt-[73px] items-center">
      <a-space>
        <a-select style="height: 46px" v-model="selectedAge" @change="fetchCourses" placeholder="Возраст">
          <a-select-option value="10+">от 10 лет</a-select-option>
          <a-select-option value="16+">от 16 лет</a-select-option>
        </a-select>
      </a-space>
      <div class="flex flex-row items-center gap-5">
        <p class="text-slate-500 text-base font-normal font-roboto leading-tight max-w-[93px]">
          Показать <br />
          на странице
        </p>
        <a-space>
          <a-select v-model="pageSize" @change="handleChange" placeholder="4">
            <a-select-option value="4">4</a-select-option>
            <a-select-option value="8">8</a-select-option>
            <a-select-option value="16">16</a-select-option>
          </a-select>
        </a-space>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[40px] pt-[40px]" v-auto-animate>
      <router-link v-for="(course, index) in courseItems" :to="`/courses/${course.id}`" :key="course.id"
        :class="{ 'large-grid-item': course.important }"
        class="cards-list relative cursor-pointer group background__hover flex flex-col gap-4 bg-no-repeat w-full md:max-w-full min-h-[230px] md:min-h-[300px] h-full justify-end"
        :style="{ backgroundImage: `url('${course.backgroundImage}')` }">
        <div class="absolute right-3 top-3 z-10 flex gap-2">
          <CopyIcon />
          <ShareIcon />
        </div>
        <div class="flex flex-col gap-4 p-8">
          <div class="flex">
            <p class="border-2 border-white font-bebas text-xl flex text-white justify-center py-1 px-4">
              {{ course.date }}
            </p>
          </div>
          <p
            class="font-bebas text-gradient-hover text-white font-bold text-[28px] leading-[33.60px] xl:text-4xl tracking-wider">
            {{ course.title }}
          </p>
        </div>
      </router-link>
    </div>
    <div class="text-center">
      <button @click="loadMoreCourses"
        class="mt-10 max-h-[61px] mx-auto gradient__border font-bebas text-white text-2xl leading-[28px] uppercase font-normal px-16 py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white">
        Еще материалы
      </button>
    </div>
  </div>
</template>