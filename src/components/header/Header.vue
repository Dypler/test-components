<script setup>
import HeaderLogo from './headerComponents/HeaderLogo.vue'
// import HeaderLogin from './headerComponents/HeaderLogin.vue'
import BackgroundHalfCircle from '../background/BackgroundHalfCircle.vue'
</script>
<template>
  <!-- <div class="bg-[url('/main/Vector20.svg')] bg-no-repeat bg-center w-full"> -->
  <header class="flex justify-between header__container pt-10 pb-16 items-center relative">
    <BackgroundHalfCircle class="absolute inset-x-[-20%] rotate-[-180deg]" />
    <BackgroundHalfCircle class="absolute inset-x-[70%] w-[35%] rotate-[-180deg]" />

    <HeaderLogo />
    <nav class="flex-grow mr-10">
      <ul class="flex justify-center font-roboto text-white gap-16 text-xl">
        <li class="cursor-pointer hover:text-hover transition active:text-active">
          <router-link to="/news"> Новости </router-link>
        </li>
        <li class="cursor-pointer hover:text-hover transition active:text-active">
          <router-link to="/events"> События </router-link>
        </li>
        <li class="cursor-pointer hover:text-hover transition active:text-active">
          <router-link to="/courses"> Обучающие материалы </router-link>
        </li>
        <li class="cursor-pointer hover:text-hover transition active:text-active">
          <router-link to="/help"> Помощь</router-link>
        </li>
        <li class="cursor-pointer hover:text-hover transition active:text-active">
          <router-link to="/contacts"> Контакты</router-link>
        </li>
      </ul>
    </nav>
    <a
      class="text-white text-xl font-normal hover:text-hover transition active:text-active"
      href="#"
      >Войти</a
    >
    <!-- <HeaderLogin /> -->
  </header>
  <!-- </div> -->
</template>
<style scoped></style>
