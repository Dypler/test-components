<template>
  <svg
    class="circles"
    width="100%"
    height="100%"
    viewBox="0 0 1400 1400"
    fill="white"
    opacity="0.2"
  >
    <defs>
      <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
      <path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
      <path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
      <path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
    </defs>
    <text class="circles__text font-bebas text-[128px] font-normal">
      <textPath
        xlink:href="#circle-1"
        startOffset="0%"
        method="stretch"
        spacing="auto"
        textLength="2830"
      >
        Информационная система «Лаборатория безопасности»&nbsp;
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
@keyframes rotateText {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.circles {
  pointer-events: none;
  width: 1400px;
  height: 1400px;
}
.circles__text {
  animation: rotateText 50s linear infinite;
  transform-origin: 700px 700px;
}
</style>
