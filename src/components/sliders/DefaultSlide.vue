<script>
export default {
  props: {
    slide: Object
  }
}
</script>
<template>
  <div class="flex flex-col gap-4 max-w-[270px]">
    <div class="relative">
      <img :src="slide.image" alt="" />
      <a href="" class="cursor-pointer">
        <svg
          class="absolute right-3 top-3 z-10"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="30" height="30" stroke="white" stroke-width="2" />
          <path
            d="M21.3333 19.7229C20.6578 19.7229 20.0533 19.994 19.5911 20.4187L13.2533 16.6687C13.2978 16.4608 13.3333 16.253 13.3333 16.0361C13.3333 15.8193 13.2978 15.6114 13.2533 15.4036L19.52 11.6898C20 12.1416 20.6311 12.4217 21.3333 12.4217C22.8089 12.4217 24 11.2108 24 9.71084C24 8.21084 22.8089 7 21.3333 7C19.8578 7 18.6667 8.21084 18.6667 9.71084C18.6667 9.92771 18.7022 10.1355 18.7467 10.3434L12.48 14.0572C12 13.6054 11.3689 13.3253 10.6667 13.3253C9.19111 13.3253 8 14.5361 8 16.0361C8 17.5361 9.19111 18.747 10.6667 18.747C11.3689 18.747 12 18.4669 12.48 18.0151L18.8089 21.7741C18.7644 21.9639 18.7378 22.1627 18.7378 22.3614C18.7378 23.8163 19.9022 25 21.3333 25C22.7644 25 23.9289 23.8163 23.9289 22.3614C23.9289 20.9066 22.7644 19.7229 21.3333 19.7229Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
    <p class="border border-white font-bebas text-xl flex text-white justify-center max-w-[109px]">
      {{ slide.data }}
    </p>
    <p class="font-bebas text-white font-bold text-xl">
      {{ slide.content }}
    </p>
  </div>
</template>
