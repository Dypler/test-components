<script setup>
import RiseUp from './footerСomponents/RiseUp.vue'
import ChatButton from './footerСomponents/ChatButton.vue'
import BackgroundVerticalBottom from '@background/BackgroundVerticalBottom.vue'
import BackgroundQuarterCircle from '@background/BackgroundQuarterCircle.vue'
</script>
<template>
  <div class="footer__background">
    <footer class="header__container relative">
      <BackgroundQuarterCircle
        class="hidden xl:block absolute bottom-0 inset-x-[-80%] -z-10 pointer-events-none"
      />
      <div
        class="flex flex-col gap-6 items-center md:flex-row 2xl:justify-between pt-[40px] pb-7 md:pt-40 md:pb-16"
      >
        <div
          class="flex text-center md:text-left items-center md:items-stretch flex-col gap-6 2xl:mr-[181px]"
        >
          <img class="w-[142px] h-[101px] relative" src="/main/footer__logo.svg" alt="" />
          <p class="text-white text-lg md:text-xl font-normal font-bebas leading-[25px]">
            © 2024 Группа «ФосАгро»
          </p>
          <div
            class="text-white md: text-base font-normal font-roboto leading-relaxed flex flex-col gap-3"
          >
            <a class="cursor-pointer hover:text-hover transition active:text-active" href=""
              >Политика конфиденциальности</a
            >
            <a class="cursor-pointer hover:text-hover transition active:text-active" href=""
              >Правила cookie</a
            >
          </div>
        </div>
        <div class="flex flex-col gap-6 md:gap-16 2xl:mr-[267px]">
          <div class="flex items-center md:items-stretch flex-col gap-5 justify-between">
            <p class="text-white text-lg md:text-xl font-normal font-bebas leading-[25px]">
              ссылки на организации «фосагро»
            </p>
            <a
              class="text-white text-base font-normal font-roboto leading-relaxed cursor-pointer hover:text-hover transition active:text-active"
              href="https://www.phosagro.ru/"
              target="_blank"
            >
              Официальный сайт Группы Компаний «ФосАгро»
            </a>
          </div>
          <div class="flex items-center md:items-stretch gap-6 flex-col">
            <p class="text-white text-lg md:text-xl font-normal font-bebas leading-[25px]">
              мы в социальных сетях:
            </p>
            <div class="flex gap-4">
              <a href="https://vk.com/phosagro_official" target="_blank">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="cursor-pointer hover:fill-[#016BC1] transition"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM21.6284 26.3135C21.4312 26.5214 21.0462 26.5634 21.0462 26.5634H19.7712C19.7712 26.5634 16.9581 26.7293 14.48 24.1975C11.7776 21.4352 9.39128 15.9546 9.39128 15.9546C9.39128 15.9546 9.25355 15.5951 9.40276 15.422C9.57075 15.2264 10.0288 15.2141 10.0288 15.2141L13.0766 15.1947C13.0766 15.1947 13.3636 15.2407 13.5691 15.3893C13.7392 15.5122 13.8341 15.7406 13.8341 15.7406C13.8341 15.7406 14.3266 16.9635 14.9788 18.0696C16.2528 20.2297 16.8454 20.7018 17.2774 20.4704C17.9076 20.1334 17.7188 17.4172 17.7188 17.4172C17.7188 17.4172 17.7302 16.4319 17.4016 15.9925C17.147 15.6525 16.667 15.5531 16.4552 15.5255C16.283 15.5029 16.5648 15.1117 16.93 14.9365C17.4788 14.6733 18.4471 14.658 19.5917 14.6692C20.4838 14.6784 20.7405 14.7327 21.089 14.8157C21.8978 15.0073 21.8726 15.6213 21.8181 16.9464C21.8018 17.3427 21.7829 17.8026 21.7829 18.3339C21.7829 18.4532 21.7793 18.5805 21.7757 18.7114C21.7568 19.3903 21.7351 20.1677 22.1908 20.4571C22.4246 20.6045 22.9953 20.4786 24.4237 18.0983C25.1009 16.9696 25.608 15.6433 25.608 15.6433C25.608 15.6433 25.7197 15.4067 25.8918 15.3053C26.0682 15.2018 26.3061 15.2336 26.3061 15.2336L29.5135 15.2141C29.5135 15.2141 30.4776 15.1004 30.6331 15.5285C30.7969 15.9761 30.2731 17.0229 28.9626 18.7374C27.7195 20.3642 27.1145 20.9632 27.17 21.4929C27.2106 21.88 27.6038 22.2301 28.3585 22.9172C29.9338 24.3529 30.3561 25.1082 30.4575 25.2897C30.4659 25.3048 30.4721 25.3159 30.4766 25.3231C31.183 26.4733 29.693 26.5634 29.693 26.5634L26.8434 26.6023C26.8434 26.6023 26.232 26.7211 25.4265 26.1783C25.0045 25.8942 24.5922 25.4302 24.1995 24.9882C23.5997 24.3132 23.0456 23.6896 22.5727 23.8369C21.7787 24.0848 21.8027 25.7635 21.8027 25.7635C21.8027 25.7635 21.809 26.123 21.6284 26.3135Z"
                    fill="#3E4D59"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/user/PhosAgro" target="_blank">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon/youtube">
                    <g id="Vector">
                      <path
                        class="cursor-pointer hover:fill-[#FF3341] transition active:fill-[#FF3341]"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 24V17.3333L23.3333 20.6668L18 24Z"
                        fill="#3E4D59"
                      />
                      <path
                        class="cursor-pointer hover:fill-[#FF3341] transition active:fill-[#FF3341]"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM28.3347 13.1244C29.2526 13.3763 29.9755 14.1185 30.2208 15.061C30.6667 16.7692 30.6667 20.3333 30.6667 20.3333C30.6667 20.3333 30.6667 23.8973 30.2208 25.6056C29.9755 26.5482 29.2526 27.2903 28.3347 27.5423C26.6712 28 20 28 20 28C20 28 13.3288 28 11.6652 27.5423C10.7473 27.2903 10.0244 26.5482 9.77903 25.6056C9.33333 23.8973 9.33333 20.3333 9.33333 20.3333C9.33333 20.3333 9.33333 16.7692 9.77903 15.061C10.0244 14.1185 10.7473 13.3763 11.6652 13.1244C13.3288 12.6667 20 12.6667 20 12.6667C20 12.6667 26.6712 12.6667 28.3347 13.1244ZM18 24V17.3333L23.3333 20.6668L18 24Z"
                        fill="#3E4D59"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block 2xl:mr-[220px]">
          <p class="text-white text-lg md:text-xl font-normal font-bebas leading-[25px]">меню</p>
          <nav class="pt-6">
            <ul class="flex flex-col gap-3 text-white w-full">
              <li class="text-base font-normal">
                <router-link
                  class="cursor-pointer hover:text-hover transition active:text-active"
                  to="/news"
                >
                  Новости
                </router-link>
              </li>
              <li class="text-base font-normal">
                <router-link
                  class="cursor-pointer hover:text-hover transition active:text-active"
                  to="/events"
                >
                  События
                </router-link>
              </li>
              <li class="text-base font-normal">
                <router-link
                  class="cursor-pointer hover:text-hover transition active:text-active"
                  to="/courses"
                >
                  Обучающие материалы
                </router-link>
              </li>
              <li class="text-base font-normal">
                <router-link
                  class="cursor-pointer hover:text-hover transition active:text-active"
                  to="/help"
                >
                  Помощь</router-link
                >
              </li>
              <li class="text-base font-normal">
                <router-link
                  class="cursor-pointer hover:text-hover transition active:text-active"
                  to="/contacts"
                >
                  Контакты</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="absolute right-[16px] top-0 md:static flex flex-col justify-center gap-[18px]">
          <ChatButton />
          <RiseUp />
        </div>
      </div>
      <BackgroundVerticalBottom class="hidden xl:block absolute inset-x-[55%] bottom-0" />
    </footer>
  </div>
</template>
<style>
.footer__background {
  background: url(/main/footer__vector.svg) no-repeat center;
  margin: 0 40px;
  background-position: 0 0;
  background-size: contain;
}
@media (max-width: 1700px) {
  .footer__background {
    background: none;
    margin: 0;
  }
}
</style>
