<template>
  <div class="flex justify-between items-center">
    <div
      class="cursor-pointer"
      v-for="(image, index) in images"
      :key="index"
      @mouseover="setImage(index, true)"
      @mouseleave="setImage(index, false)"
    >
      <img class="w-full h-[100px]" :src="image.current" />
    </div>
  </div>
</template>

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
