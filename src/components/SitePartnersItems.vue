<template>
  <div class="border border-red-500">
    <h2 class="font-bebas text-white text-4xl">SitePartnersItems.vue</h2>

    <div class="flex justify-between items-center">
      <div
        class="cursor-pointer"
        v-for="(image, index) in images"
        :key="index"
        @mouseover="setImage(index, true)"
        @mouseleave="setImage(index, false)"
      >
        <img :src="image.current" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          default: 'main/agro.svg',
          hover: 'main/agro-active.svg',
          current: 'main/agro.svg'
        },
        {
          default: 'main/umvd.svg',
          hover: 'main/umvd-active.svg',
          current: 'main/umvd.svg'
        },
        {
          default: 'main/national-guard.svg',
          hover: 'main/national-guard-active.svg',
          current: 'main/national-guard.svg'
        },
        {
          default: 'main/drozd.svg',
          hover: 'main/drozd-active.svg',
          current: 'main/drozd.svg'
        },
        {
          default: 'main/umvd-1.svg',
          hover: 'main/umvd-1-active.svg',
          current: 'main/umvd-1.svg'
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
