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
</script>
<template>
  <div class="container">
    <a-breadcrumb>
      <a-breadcrumb-item> <router-link to="/">Главная</router-link></a-breadcrumb-item>
      <template #separator><span class="custom__separator"></span></template>
      <a-breadcrumb-item><router-link to="/news">Новости</router-link> </a-breadcrumb-item>
      <template><span class="custom__separator"></span></template>
      <a-breadcrumb-item>Название новости </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="flex justify-between pt-[27px] md:pt-[30px] xl:pt-[46px]">
      <h1
        class="font-bebas text-[32px] md:text-[48px] xl:text-[54px] leading-8 md:leading-[48px] xl:leading-[54px] text-white text-left max-w-[887px]"
      >
        Заголовок события, которое может называться длинно. При клике ведет на карточку
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
        01 февраля
      </p>
      <img
        class="pt-[22px] md:pt-6 w-full max-h-[600px] object-cover"
        src="/main/news1.png"
        alt=""
      />
      <p
        class="font-roboto text-white font-light text-base leading-[24px] md:text-xl md:leading-loose pt-[37px] md:pt-12 text-left max-w-[888px]"
      >
        Не следует, однако забывать, что дальнейшее развитие различных форм деятельности влечет за
        собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении
        поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие
        различных форм деятельности позволяет выполнять важные задания по разработке позиций,
        занимаемых участниками в отношении поставленных задач. Таким образом рамки и место обучения
        кадров представляет собой интересный эксперимент проверки форм развития. Разнообразный и
        богатый опыт начало повседневной работы по формированию позиции позволяет выполнять важные
        задания по разработке дальнейших направлений развития. Таким образом начало повседневной
        работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в
        формировании систем массового участия. Повседневная практика показывает, что постоянный
        количественный рост и сфера нашей активности играет важную роль в формировании существенных
        финансовых и административных условий.
        <br /><br />
        Товарищи! начало повседневной работы по формированию позиции обеспечивает широкому кругу
        (специалистов) участие в формировании соответствующий условий активизации. Значимость этих
        проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому
        кругу (специалистов) участие в формировании новых предложений. Задача организации, в
        особенности же консультация с широким активом играет важную роль в формировании существенных
        финансовых и административных условий.
        <br /><br />
        Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому
        кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным
        потребностям. Разнообразный и богатый опыт сложившаяся структура организации способствует
        подготовки и реализации систем массового участия. Повседневная практика показывает, что
        начало повседневной работы по формированию позиции в значительной степени обуславливает
        создание позиций, занимаемых участниками в отношении поставленных задач. Повседневная
        практика показывает, что укрепление и развитие структуры требуют от нас анализа позиций,
        занимаемых участниками в отношении поставленных задач.
      </p>
      <NewsSliderItem class="pt-[30px] md:pt-[48px] xl:pt-[60px]" />
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
