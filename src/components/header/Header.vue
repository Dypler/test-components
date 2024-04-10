<script setup>
import HeaderLogo from './headerComponents/HeaderLogo.vue'
import BackgroundHalfCircle from '../background/BackgroundHalfCircle.vue'
import HeaderBurger from './headerComponents/HeaderBurger.vue'
import { Menu, Dropdown } from 'ant-design-vue'
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
            <a-style-provider hash-priority="high">
              <Dropdown>
                <template #overlay>
                  <Menu class="w-[258px] text-white">
                    <Menu.Item>
                      <router-link to="/courses/basic">Курсы</router-link>
                    </Menu.Item>
                    <Menu.Item class="text-white">
                      <router-link to="/courses/advanced">Видео</router-link>
                    </Menu.Item>
                    <Menu.Item class="text-white">
                      <router-link to="/courses/advanced">Еще раздел</router-link>
                    </Menu.Item>
                    <!-- Добавьте дополнительные пункты меню здесь -->
                  </Menu>
                </template>
                <li
                  class="ant-dropdown-link cursor-pointer hover:text-hover transition active:text-active"
                >
                  <router-link to="/courses"> Обучающие материалы </router-link>
                </li>
              </Dropdown>
            </a-style-provider>

            <Dropdown>
              <template #overlay>
                <Menu class="w-[258px]">
                  <Menu.Item>
                    <router-link class="custom" cto="/courses/basic">Курсы</router-link>
                  </Menu.Item>
                  <Menu.Item class="text-white">
                    <router-link class="text-white" to="/courses/advanced">Видео</router-link>
                  </Menu.Item>
                </Menu>
              </template>
              <li class="cursor-pointer hover:text-hover transition active:text-active">
                <router-link to="/help"> Помощь</router-link>
              </li>
            </Dropdown>

            <li class="cursor-pointer hover:text-hover transition active:text-active">
              <router-link to="/contacts"> Контакты</router-link>
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
<style scoped>
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
.css-dev-only-do-not-override-1hsjdkk.ant-dropdown .ant-dropdown-menu,
.css-dev-only-do-not-override-1hsjdkk.ant-dropdown-menu-submenu .ant-dropdown-menu {
  padding: 4px;
  width: 500px;
  list-style-type: none;
  background: rgba(10, 18, 25, 0.95);
  box-shadow: 4px 7px 35.1px 0px rgba(44, 54, 68, 0.2);
  background-clip: padding-box;
  border: 1px solid #3e4d59;
  border-radius: 0px;
  outline: none;
}
:deep(ant-dropdown-menu-item ant-dropdown-menu-item-only-child) {
  color: white;
}
</style>
