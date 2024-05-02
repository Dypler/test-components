<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

import BackgroundCircle from '../../background/BackgroundCircle.vue';

import { COMPONENTS, getDate } from '@/components/components'
import NewsSlider from '../../sliders/news/NewsSlider.vue';

const newsItems = ref([])

async function fetchCourses() {
    try {
        const url = `${COMPONENTS.API}/feeds/?page=1&counts=7`;
        const response = await axios.get(url)
        let feeds = response.data.data.feeds

        newsItems.value.push(
            ...feeds
                .map((course) => {
                    const dateDisplay = getDate(course?.date_start, course?.date_end);
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
        );
        console.log(newsItems.value[0]?.date)
    } catch (error) {
        console.error('Ошибка при загрузке курсов: ', error)
    }
}

onMounted(fetchCourses)

</script>
<template>
    <section class="pb-[44px] xl:pt-16 xl:pb-16 relative">
        <BackgroundActiveCircle class="absolute right-[75%] top-[50%]" />
        <div class="container flex flex-col gap-40">
            <div class="flex justify-between items-center">
                <h2 class="font-bebas text-[32px] md:text-5xl xl:text-[54px] text-white">НОВОСТИ</h2>
                <router-link to="/news"
                    class="gradient__border font-bebas text-white text-2xl uppercase font-normal py-[10px] px-4 sm:px-16 sm:py-4 transition hover:bg-gradient-to-r hover:from-gradient_start hover:to-gradient_end hover:text-transparent hover:bg-clip-text active:text-white"><span
                        class="hidden sm:block">все новости</span>
                    <span class="block sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="25"
                            viewBox="0 0 13 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.933371 25L-1.46312e-06 24.0094L11.1333 12.5L5.49246e-07 0.990614L0.933373 4.35218e-07L13 12.5L0.933371 25Z"
                                fill="white" />
                        </svg></span>
                </router-link>
            </div>
        </div>
        <router-link :to="`/news/${newsItems[0]?.id}`">
            <div class="relative w-full h-[500px] md:h-[683px] xl:h-[713px] bg-[url('/main/bg_news.png')] bg-no-repeat bg-center bg-cover flex items-end mt-[30px] md:mt-[66px] xl:mt-20"
                :style="{ 'background-image': 'url(' + newsItems[0]?.imageUrl + ') ' }">
                <div class="container cursor-pointer">
                    <p class="border-2 border-white font-bebas text-xl text-center text-white max-w-[109px] px-2 py-1">
                        {{ newsItems[0]?.date }}
                    </p>
                    <div class="flex pt-[18px] xl:gap-8 flex-col gap-[10px] md:flex-row">
                        <h2
                            class="w-full max-w-[564px] font-bebas text-white text-[28px] leading-[33.60px] md:text-[38px] md:leading-[45px] xl:text-[54px] xl:leading-[54px]">
                            {{ newsItems[0]?.title }}
                        </h2>
                        <p class="w-max-[582px] w-full font-roboto text-[14px] md:text-[16px] xl:text-[20px] text-white font-light"
                            v-html="newsItems[0]?.description">
                        </p>
                    </div>
                </div>
            </div>
        </router-link>
    </section>

    <section class="pb-[44px] xl:pt-16 xl:pb-16">
        <div class="container">
            <NewsSlider :newsItems="newsItems" />
        </div>
        <BackgroundCircle class="hidden md:block absolute inset-x-[35%] inset-y-[58%]" />
    </section>
</template>