<script setup>
import axios from 'axios'

import CopyIcon from '../../components/common/CopyIcon.vue'
import ShareIcon from '../../components/common/ShareIcon.vue'
import PhotoSlider from '../../components/sliders/photos/PhotoSlider.vue'
import TelegramLink from '@/components/socialLink/TelegramLink.vue'
import VkLink from '@/components/socialLink/VkLink.vue'
import WhatsappLink from '@/components/socialLink/WhatsappLink.vue'
import OdnoklasnikiLink from '@/components/socialLink/OdnoklasnikiLink.vue'
import 'ant-design-vue/lib/breadcrumb/style/index.css'
import 'ant-design-vue/lib/select/style/index.css'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDate, COMPONENTS } from '@/components/components'

const route = useRoute()

onMounted(getCourseInfo)
const course = ref({})

async function getCourseInfo() {
  try {
    const id = route.params.id

    const url = `${COMPONENTS.API}/courses/${id}/`
    const response = await axios.get(url)
    let courseData = response?.data?.data?.course

    const dateDisplay = getDate(courseData?.date_start, courseData?.date_end)
    courseData.dateDisplay = dateDisplay

    course.value = courseData
  } catch (e) {
    console.log(e)
  }
}
</script>
<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item
        ><router-link to="/courses">Обучающие материалы</router-link>
      </a-breadcrumb-item>
      <template><span class="custom__separator"></span></template>

      <a-breadcrumb-item>{{ course?.name ? course?.name : '' }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="flex justify-between pt-[27px] md:pt-[30px] xl:pt-[46px]">
      <h1
        class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] leading-8 md:leading-[48px] xl:leading-[54px] text-white text-left max-w-[887px]"
      >
        {{ course?.name ? course?.name : '' }}
      </h1>
      <div class="flex gap-2">
        <CopyIcon />
        <ShareIcon />
      </div>
    </div>
    <div class="pt-6">
      <div class="flex">
        <p
          class="border-2 border-white font-bebas text-xl flex text-white justify-center py-1 px-4"
        >
          {{ course?.dateDisplay ? course?.dateDisplay : '' }}
        </p>
      </div>

      <img
        class="pt-[22px] md:pt-6 w-full max-h-[600px] object-cover"
        :src="course?.detail_picture"
        alt=""
      />
      <p
        class="font-roboto text-white font-light text-base leading-[24px] md:text-xl md:leading-loose pt-[37px] md:pt-12 text-left max-w-[888px]"
        v-html="course?.detail_text ? course?.detail_text : ''"
      ></p>
      <PhotoSlider class="pt-[30px] md:pt-[48px] xl:pt-[60px]" :photos="course.photos" />
    </div>
    <div
      class="pt-[32px] md:pt-[50px] xl:pt-[60px] flex flex-col md:flex-row gap-2 md:gap-4 pb-[44px] md:pb-[65px]"
    >
      <p class="text-slate-500 text-xl font-light font-roboto leading-loose">Поделиться:</p>
      <div class="flex gap-[10px] md:gap-4">
        <TelegramLink />
        <VkLink />
        <OdnoklasnikiLink />
        <WhatsappLink />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
