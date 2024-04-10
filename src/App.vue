<script setup>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>
<template>
  <Header />
  <div class="main__solid">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style scoped>
.main__solid {
  position: relative;
  border-left-width: 1px;
  border-right-width: 1px;
  --tw-border-opacity: 0.6;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
  margin-left: 2.5rem /* 40px */;
  margin-right: 2.5rem /* 40px */;
}
@media (max-width: 1700px) {
  .main__solid {
    border: none;
    margin: 0;
  }
}
</style>
