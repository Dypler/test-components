<script setup>
import HeaderLogo from './headerComponents/HeaderLogo.vue'
import BackgroundHalfCircle from '../background/BackgroundHalfCircle.vue'
import HeaderBurger from './headerComponents/HeaderBurger.vue'
import { ref } from 'vue'
const isOpenLearning = ref(false)
const isOpenHelp = ref(false)
</script>
<template>
  <div class="header__background">
    <header class="header__container">
      <div class="flex justify-between py-5 2xl:pt-[31px] 2xl:pb-[40px] items-center relative">
        <BackgroundHalfCircle class="absolute inset-x-[-20%] rotate-[-180deg]" />
        <BackgroundHalfCircle class="absolute inset-x-[70%] w-[35%] rotate-[-180deg]" />
        <HeaderBurger />
        <HeaderLogo />
        <nav class="hidden xl:block m-auto">
          <ul
            class="hidden xl:flex font-roboto text-white gap-4 2xl:justify-center 2xl:gap-16 xl:text-xl"
          >
            <li class="cursor-pointer hover:text-hover transition active:text-active">
              <router-link to="/news"> Новости </router-link>
            </li>
            <li class="cursor-pointer hover:text-hover transition active:text-active">
              <router-link to="/events"> События </router-link>
            </li>
            <li
              class="dropdown cursor-pointer hover:text-hover transition active:text-active"
              @mouseover="isOpenLearning = true"
              @mouseleave="isOpenLearning = false"
            >
              <router-link to="/courses" class="dropbtn">Обучающие материалы</router-link>
              <div class="dropdown-content" v-show="isOpenLearning">
                <router-link to="/courses/basic">Курсы</router-link>
                <router-link to="/courses/advanced">Видео</router-link>
                <router-link to="/courses/special">Ещё раздел</router-link>
              </div>
            </li>
            <li
              class="dropdown cursor-pointer hover:text-hover transition active:text-active"
              @mouseover="isOpenHelp = true"
              @mouseleave="isOpenHelp = false"
            >
              <router-link to="/help" class="dropbtn">Помощь</router-link>
              <div class="dropdown-content" v-show="isOpenHelp">
                <router-link to="/help/faq">Мои обращения</router-link>
                <router-link to="/help/contact">ЧаВо</router-link>
              </div>
            </li>
            <li class="cursor-pointer hover:text-hover transition active:text-active">
              <router-link to="/contacts">Контакты</router-link>
            </li>
          </ul>
        </nav>
        <a
          class="text-base text-white md:text-xl font-normal hover:text-hover transition active:text-active flex justify-end ml-auto"
          href="#"
          >Войти</a
        >
        <!-- <HeaderLogin /> -->
      </div>
    </header>
  </div>
</template>
<style scoped lang="scss">
.header__background {
  background: url(/main/Vector_20.svg) no-repeat center;
  margin: 0 40px;
  background-position: 0 100%;
  background-size: contain;
}
@media (max-width: 1700px) {
  .header__background {
    background: none;
    margin: 0;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #000;
  min-width: 258px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid #3e4d59;
}

.dropdown-content a {
  color: white;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    color: #e33b47;
    background-color: #3e4d59;
  }
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
