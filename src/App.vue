<script setup>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>
<template>
  <Header />
  <div class="border-x border-opacity-60 border-white mx-10 relative">
    <router-view></router-view>
  </div>
  <Footer />
</template>
