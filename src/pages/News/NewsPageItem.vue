<script setup>
import CopyIcon from '@common/CopyIcon.vue'
import ShareIcon from '@common/ShareIcon.vue'
import NewsSliderItem from './NewsSliders/NewsSliderItem.vue'
import TelegramLink from '@social_link/TelegramLink.vue'
import VkLink from '@social_link/VkLink.vue'
import WhatsappLink from '@social_link/WhatsappLink.vue'
import OdnoklasnikiLink from '@social_link/OdnoklasnikiLink.vue'
import 'ant-design-vue/lib/breadcrumb/style/index.css'
import 'ant-design-vue/lib/select/style/index.css'

import axios from 'axios'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { COMPONENTS, getDate } from '@/components/components'

const route = useRoute();

onMounted(getFeedInfo);
const feed = ref({});

async function getFeedInfo() {
  try {
    const id = route.params.id;

    const url = `${COMPONENTS.API}/feeds/${id}/`;
    const response = await axios.get(url);

    let feedData = response?.data?.data?.feed;

    const dateDisplay = getDate(feedData?.date_start, feedData?.date_end);
    feedData.dateDisplay = dateDisplay;

    feed.value = feedData;
  } catch (e) {
    console.log(e);
  }
}
</script>
<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item><router-link to="/news">Новости</router-link> </a-breadcrumb-item>
      <template><span class="custom__separator"></span></template>
      <a-breadcrumb-item>{{feed?.name}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="flex justify-between pt-[27px] md:pt-[30px] xl:pt-[46px]">
      <h1
        class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] leading-8 md:leading-[48px] xl:leading-[54px] text-white text-left max-w-[887px]"
      >
        {{feed?.name}}
      </h1>
      <div class="flex gap-2">
        <CopyIcon />
        <ShareIcon />
      </div>
    </div>
    <div class="pt-6">
      <p
        class="border-2 px-3 border-white font-bebas text-xl flex text-white justify-center max-w-[109px]"
      >
        {{feed?.dateDisplay}}
      </p>
      <img
        class="pt-[22px] md:pt-6 w-full max-h-[600px] object-cover"
        :src="feed?.detail_picture"
        alt=""
      />
      <p
        class="font-roboto text-white font-light text-base leading-[24px] md:text-xl md:leading-loose pt-[37px] md:pt-12 text-left max-w-[888px]"
        v-html="feed?.detail_text ? feed?.detail_text : ''">
      </p>
      <NewsSliderItem class="pt-[30px] md:pt-[48px] xl:pt-[60px]" :photos="feed?.photos"/>
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
