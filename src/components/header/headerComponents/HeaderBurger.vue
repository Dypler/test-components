<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isActive = ref(false)
const burgerRef = ref(null)

function toggleClass() {
  isActive.value = !isActive.value
}

function handleClickOutside(event) {
  if (burgerRef.value && !burgerRef.value.contains(event.target)) {
    isActive.value = false
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
  <a-dropdown :trigger="['click']">
    <a
      ref="burgerRef"
      class="ant-dropdown-link burger cursor-pointer mr-[45px] md:mr-[34px] flex xl:hidden"
      :class="{ active: isActive }"
      @click.prevent="toggleClass"
    >
      <span></span>
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<style scoped lang="scss">
.burger {
  position: relative;
  z-index: 50;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  width: 26px;
  height: 15px;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-dropdown .ant-dropdown-menu {
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
:where(.css-dev-only-do-not-override-1hsjdkk).ant-dropdown
  .ant-dropdown-menu
  .ant-dropdown-menu-item {
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgb(255 255 255 / 88%);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5714285714285714;
  cursor: pointer;
  transition: all 0.2s;
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
</style>
