<script setup>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>
<template>
  <Header />
  <!-- <div class="border-x border-white mx-10"> -->
  <router-view></router-view>
  <!-- </div> -->
  <Footer />
</template>
