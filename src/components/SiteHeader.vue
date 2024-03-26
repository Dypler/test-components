<script setup>
import SiteHeaderLogo from './SiteHeaderLogo.vue'
import SiteHeaderLogin from './SiteHeaderLogin.vue'
</script>
<template>
  <div class="border border-500">
    <h2 class="font-bebas text-white text-4xl">SiteHeader.vue</h2>
    <header class="flex justify-between header__container pt-10 pb-16 items-center">
      <SiteHeaderLogo />
      <nav>
        <ul class="flex font-roboto text-white gap-16 text-xl">
          <li class="cursor-pointer hover:text-hover transition active:text-active">
            <a href="">Новости</a>
          </li>
          <li class="cursor-pointer hover:text-hover transition active:text-active">
            <a href="">События</a>
          </li>
          <li class="cursor-pointer hover:text-hover transition active:text-active">
            <a href="">Обучающие материалы</a>
          </li>
          <li class="cursor-pointer hover:text-hover transition active:text-active">
            <a href="">Помощь</a>
          </li>
          <li class="cursor-pointer hover:text-hover transition active:text-active">
            <a href="">Контакты</a>
          </li>
        </ul>
      </nav>
      <SiteHeaderLogin />
    </header>
  </div>
</template>
