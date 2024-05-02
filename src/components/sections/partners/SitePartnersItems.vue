<script>
export default {
  data() {
    return {
      images: [
        {
          default: 'main/agro.png',
          hover: 'main/agro-active.png',
          current: 'main/agro.png'
        },
        {
          default: 'main/umvd.png',
          hover: 'main/umvd-active.png',
          current: 'main/umvd.png'
        },
        {
          default: 'main/national-guard.png',
          hover: 'main/national-guard-active.png',
          current: 'main/national-guard.png'
        },
        {
          default: 'main/drozd.png',
          hover: 'main/drozd-active.png',
          current: 'main/drozd.png'
        },
        {
          default: 'main/umvd-1.png',
          hover: 'main/umvd-1-active.png',
          current: 'main/umvd-1.png'
        }
      ]
    }
  },
  methods: {
    setImage(index, isHover) {
      this.images[index].current = isHover ? this.images[index].hover : this.images[index].default
    }
  }
}
</script>

<template>
  <div class="flex justify-between items-center gap-5">
    <div class="cursor-pointer z-40" v-for="(image, index) in images" :key="index" @mouseover="setImage(index, true)"
      @mouseleave="setImage(index, false)">
      <img class="w-full h-full h-max-[60px] md:h-[100px]" :src="image.current" />
    </div>
  </div>
</template>
