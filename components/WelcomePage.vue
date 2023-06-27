<script setup lang="ts">
const dress_1 = Object.values(import.meta.glob('~/assets/photo/dress-1/*', {
  eager: true,
  import: 'default',
}))
const dress_2 = Object.values(import.meta.glob('~/assets/photo/dress-2/*', {
  eager: true,
  import: 'default',
}))
const dress_3 = Object.values(import.meta.glob('~/assets/photo/dress-3/*', {
  eager: true,
  import: 'default',
}))
const dress_4 = Object.values(import.meta.glob('~/assets/photo/dress-4/*', {
  eager: true,
  import: 'default',
}))
const dress_5 = Object.values(import.meta.glob('~/assets/photo/dress-5/*', {
  eager: true,
  import: 'default',
}))
const dress_6 = Object.values(import.meta.glob('~/assets/photo/dress-6/*', {
  eager: true,
  import: 'default',
}))
const dress_7 = Object.values(import.meta.glob('~/assets/photo/dress-7/*', {
  eager: true,
  import: 'default',
}))
const dress_8 = Object.values(import.meta.glob('~/assets/photo/dress-8/*', {
  eager: true,
  import: 'default',
}))
const dress_9 = Object.values(import.meta.glob('~/assets/photo/dress-9/*', {
  eager: true,
  import: 'default',
}))
const dress_10 = Object.values(import.meta.glob('~/assets/photo/dress-10/*', {
  eager: true,
  import: 'default',
}))
const dress_11 = Object.values(import.meta.glob('~/assets/photo/dress-11/*', {
  eager: true,
  import: 'default',
}))
const dress_12 = Object.values(import.meta.glob('~/assets/photo/dress-12/*', {
  eager: true,
  import: 'default',
}))
const dress_13 = Object.values(import.meta.glob('~/assets/photo/dress-13/*', {
  eager: true,
  import: 'default',
}))
const dress_14 = Object.values(import.meta.glob('~/assets/photo/dress-14/*', {
  eager: true,
  import: 'default',
}))
const dress_15 = Object.values(import.meta.glob('~/assets/photo/dress-15/*', {
  eager: true,
  import: 'default',
}))
const slider_1 = [...dress_1, ...dress_3, ...dress_2, ...dress_6, ...dress_5]
const slider_2 = [...dress_10, ...dress_8, ...dress_7, ...dress_4, ...dress_9]
const slider_3 = [...dress_14, ...dress_11, ...dress_15, ...dress_12, ...dress_13]

const slider_mob = [...slider_2, ...slider_3, ...slider_1]

</script>
<template>
  <div class="w-full h-full p-6 flex flex-col gap-8">
    <div class="w-full flex flex-col text">
      <h1 class="text-[max(2.5vw,1.6rem)] text-red-500 font-bold drop-shadow-xl  shadow-custom"> Сделано в России с
        любовью
      </h1>
      <p class="text-[max(1.5vw,1.4rem)] text-red-500 drop-shadow-xl shadow-custom">Одежда SOORI сделает акцент на Ваших
        внешних
        достоинствах и покажет Вашу индивидуальность. Выбирайте SOORI и будьте уверены в своей красоте! Качество по
        доступной цене.</p>
    </div>

    <div
      class="flex scale-90 flex-row flex-wrap w-full h-fit  min-h-[22rem] p-4 gap-4 relative justify-center md:mt-0 mt-[-3rem]">

      <div class="md:w-[19%] w-full h-full  hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="scale-90 h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition: false,
            stopOnLastSlide: false,

          }">
          <SwiperSlide v-for="value, index in slider_1" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="md:w-[19%] w-full h-full hidden md:flex  flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition: false,
            stopOnLastSlide: false,

          }">
          <SwiperSlide v-for="value, index in slider_2" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
      <div class="md:w-[19%] w-full h-full md:hidden sm:flex  flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition: false,
            stopOnLastSlide: false,

          }">
          <SwiperSlide v-for="value, index in slider_mob" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="w-[19%] h-full hidden md:flex flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="scale-90 h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition: false,
            stopOnLastSlide: false,

          }">
          <SwiperSlide v-for="value, index in slider_3" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" link="preload" loading="lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


    </div>

    <div class="w-full flex items-center justify-center pb-4 md:mt-[-2rem] mt-[-3rem]">
      <p class="text-[max(1.6vw,1.2rem)]">Купить нашу продукцию можно здесь <a target="_blank"
          href="https://www.ozon.ru/brand/soori-100866453/"
          class="text-blue-500 underline drop-shadow-xl cursor-pointer">OZONE</a> <a target="_blank"
          href="https://www.wildberries.ru/catalog/0/search.aspx?search=soori"
          class="cursor-pointer text-blue-500 underline drop-shadow-xl">WILDBERRIES</a></p>
    </div>


  </div>
</template>
<style scoped >
.shadow-custom {
  text-shadow: 1px 0 1px #fff4f4,
    0 1px 1px #720303,
    -1px 0 1px #f02525,
    0 -1px 1px #c75757;
}

.text {
  font-family: "AmaticSC-Bold";
  color: #000000;
}
</style>