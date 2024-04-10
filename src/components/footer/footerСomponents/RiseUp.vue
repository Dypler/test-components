<template>
  <div class="cursor-pointer" @click="scrollToTop">
    <svg
      class="w-full max-w-[50px] md:max-w-[60px]"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          class="cursor-pointer hover:fill-[#898C94] active:fill-[#898C94] transition"
          id="Vector"
          d="M29.9997 0C13.4316 0 0 13.4317 0 29.9997C0 46.5671 13.4314 60 29.9993 60C46.5672 60 60 46.5671 60 29.9997C60 13.4317 46.568 0 29.9997 0ZM43.5367 37.9584C42.4427 39.0518 40.6691 39.0524 39.5747 37.9584L29.9227 28.3045L20.2183 38.0076C19.1249 39.101 17.3507 39.1016 16.2563 38.0076C15.7101 37.4598 15.4367 36.7434 15.4367 36.0266C15.4367 35.3098 15.7101 34.5935 16.2573 34.0473L27.5157 22.788C27.6235 22.6204 27.7471 22.4606 27.8933 22.3144C28.4525 21.7552 29.1885 21.486 29.9225 21.499C30.6549 21.4866 31.3921 21.7552 31.9507 22.315C32.0975 22.4608 32.2205 22.6206 32.3279 22.788L43.5365 33.9965C44.6301 35.0905 44.6308 36.864 43.5367 37.9584Z"
          fill="#484C59"
        />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
