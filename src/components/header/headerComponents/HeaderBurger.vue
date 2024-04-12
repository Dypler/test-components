<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isActive = ref(false)
const isLearningOpen = ref(false)
const isHelpOpen = ref(false)
const burgerRef = ref(null)

function toggleClass() {
  isActive.value = !isActive.value
}

function toggleLearning() {
  isLearningOpen.value = !isLearningOpen.value
}

function toggleHelp() {
  isHelpOpen.value = !isHelpOpen.value
}

function handleClickOutside(event) {
  if (burgerRef.value && !burgerRef.value.contains(event.target)) {
    isActive.value = false
    isLearningOpen.value = false
    isHelpOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
<template>
  <div
    ref="burgerRef"
    class="burger cursor-pointer ant-dropdown-link mr-[45px] md:mr-[34px] flex xl:hidden"
    :class="{ active: isActive }"
    @click.prevent="toggleClass"
  >
    <span></span>
  </div>
  <div v-show="isActive" class="dropdown-content">
    <router-link to="/news" class="dropdown-item">Новости</router-link>
    <router-link to="/events" class="dropdown-item">События</router-link>
    <router-link to="/courses"> Обучающие материалы </router-link>
    <router-link to="/help" class="dropdown-item"> Помощь </router-link>

    <router-link to="/contacts" class="dropdown-item">Контакты</router-link>
  </div>
</template>
<style scoped lang="scss">
.burger {
  position: relative;
  z-index: 50;
  align-items: center;
  gap: 3px;
  height: 15px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  top: 80px;
  display: flex;
  flex-direction: column;
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
span {
  display: block;
  height: 3px;
  width: 26px;
  transform: scale(1);
  background-color: #faf6f2;
}
:hover.burger span {
  background: linear-gradient(94deg, rgba(241, 153, 69, 1) 0%, rgba(218, 0, 72, 1) 50%);
}
.burger::before,
.burger::after {
  content: '';
  position: absolute;
  height: 3px;
  width: 26px;
  background-color: #faf6f2;
  transition: all 0.3s ease 0s;
}
:hover.burger::before,
:hover.burger::after {
  background: linear-gradient(94deg, rgba(241, 153, 69, 1) 0%, rgba(218, 0, 72, 1) 50%);
}
.burger::before {
  top: 0;
}

.burger::after {
  bottom: 0;
}
/* Добавляем класс active для анимации иконки бургера */
.burger.active span {
  transform: scale(0);
  background: linear-gradient(94deg, rgba(241, 153, 69, 1) 0%, rgba(218, 0, 72, 1) 50%);
}
.burger.active::before {
  top: 0%;
  width: 80%;
  height: 4px;

  transform: rotate(-45deg) translate(-50%, 50%);
  background: linear-gradient(94deg, rgba(241, 153, 69, 1) 0%, rgba(218, 0, 72, 1) 50%);
}

.burger.active::after {
  top: 0%;
  width: 80%;
  height: 4px;

  transform: rotate(45deg) translate(50%, 50%);
  background: linear-gradient(94deg, rgba(241, 153, 69, 1) 0%, rgba(218, 0, 72, 1) 50%);
}
.chevron {
  display: inline-block;
  margin-left: 5px;
  width: 15px;
  height: 6px;
  background-image: url('/main/arrow-down.svg'); /* Укажите правильный путь к вашей иконке */
  background-size: contain;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}
.rotate {
  transform: translateY(-1px) rotate(180deg);
}
.sub-menu {
  display: none;
  padding-left: 20px;
  a {
    display: block;
    padding: 5px 0;
  }
}
</style>
