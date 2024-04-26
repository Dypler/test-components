<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CopyIcon from '../../components/common/CopyIcon.vue'
import ShareIcon from '../../components/common/ShareIcon.vue'
import { parse, isValid } from 'date-fns'

const pageSize = ref(4) // Начальное количество отображаемых курсов
const pageNum = ref(1) // Текущее количество загружаемых элементов
const courseItems = ref([]) // Список курсов
const selectedAge = ref('') // Выбранный возраст

// Парсинг даты из строки
function parseDate(dateStr) {
  if (!dateStr) return null
  dateStr = dateStr.indexOf(':') >= 0 ? dateStr : dateStr + ' 00:00:00';
  const parsedDate = parse(dateStr, 'dd.MM.yyyy HH:mm:ss', new Date())
  return isValid(parsedDate) ? parsedDate : null
}

// Загрузка курсов с учетом возраста и количества
async function fetchCourses() {
  try {
    const url = `http://tanin.phosagro.picom.su/api/courses/?page=${pageNum.value}&counts=${pageSize.value}`;
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
          const startDate = parseDate(course.date_start)
          const endDate = parseDate(course.date_end)

          if (!startDate) {
            console.error('Некорректная дата начала для курса:', course)
            return null
          }

          const formatter = new Intl.DateTimeFormat('ru-RU', { month: 'long', day: 'numeric' })
          let dateDisplay = formatter.format(startDate)
          if (endDate) {
            const endFormatted = formatter.format(endDate)
            const sameMonth =
              startDate.getMonth() === endDate.getMonth() &&
              startDate.getFullYear() === endDate.getFullYear()
            dateDisplay = sameMonth
              ? `${startDate.getDate()} - ${endDate.getDate()} ${formatter.formatToParts(endDate).find((part) => part.type === 'month').value}`
              : `${dateDisplay} - ${endFormatted}`
          }

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
  pageSize.value = Number(newSize)
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
<style scoped lang="scss">
// @media (min-width: 1280px) {
//   .large-grid-item {
//     grid-area: 1 / 1 / 3 / 2;
//   }
// }

.text-gradient-hover {
  transition: background-image 0.7s ease;
  /* Явно указываем, что переход применяется к background-size */
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
