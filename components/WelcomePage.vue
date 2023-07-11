<script setup lang="ts">
import { onMounted , onBeforeUnmount, ref} from 'vue'

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
const dress_16 = Object.values(import.meta.glob('~/assets/photo/dress-6/*', {
  eager: true,
  import: 'default',
}))
const dress_17 = Object.values(import.meta.glob('~/assets/photo/dress-7/*', {
  eager: true,
  import: 'default',
}))
const dress_18 = Object.values(import.meta.glob('~/assets/photo/dress-8/*', {
  eager: true,
  import: 'default',
}))
const dress_19 = Object.values(import.meta.glob('~/assets/photo/dress-9/*', {
  eager: true,
  import: 'default',
}))
const dress_20 = Object.values(import.meta.glob('~/assets/photo/dress-10/*', {
  eager: true,
  import: 'default',
}))
const dress_21 = Object.values(import.meta.glob('~/assets/photo/dress-11/*', {
  eager: true,
  import: 'default',
}))
const dress_22 = Object.values(import.meta.glob('~/assets/photo/dress-12/*', {
  eager: true,
  import: 'default',
}))
const dress_23 = Object.values(import.meta.glob('~/assets/photo/dress-13/*', {
  eager: true,
  import: 'default',
}))
const dress_24 = Object.values(import.meta.glob('~/assets/photo/dress-14/*', {
  eager: true,
  import: 'default',
}))
const dress_25 = Object.values(import.meta.glob('~/assets/photo/dress-15/*', {
  eager: true,
  import: 'default',
}))


const slider_1 = [...dress_1, ...dress_3, ...dress_20, ...dress_6, ...dress_5, ...dress_2, ...dress_16, ...dress_15, ...dress_23]
const slider_2 = [...dress_5, ...dress_8, ...dress_7, ...dress_4, ...dress_9, ...dress_17, ...dress_24, ...dress_19, ...dress_22]
const slider_3 = [...dress_14, ...dress_11, ...dress_18, ...dress_10, ...dress_13,...dress_14, ...dress_12, ...dress_21,, ...dress_25]

const slider_mob = [...slider_2, ...slider_3, ...slider_1]
const orientation = ref()
const onOrientationChange =(ev:Event)=>{
orientation.value = window.screen.orientation.type 
console.log(orientation.value)
}

onMounted(()=>{
orientation.value = window.screen.orientation.type
window.addEventListener('orientationchange', onOrientationChange)
})
onBeforeUnmount(()=>{
window.removeEventListener('orientationchange', onOrientationChange)
})

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

      <div v-if="orientation=='landscape-primary'" class="md:w-[19%] w-full h-full  hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
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
      <div v-if="orientation=='landscape-primary'" class="md:w-[19%] w-full h-full hidden md:flex  flex-row justify-start items-center rounded-xl select-none">
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
      <div v-if="orientation=='portrait-primary'" class="md:w-[19%] w-full h-full md:hidden sm:flex  flex-row justify-start items-center rounded-xl select-none">
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
      <div v-if="orientation=='landscape-primary'"  class="w-[19%] h-full hidden md:flex flex-row justify-start items-center rounded-xl select-none">
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
  /* text-shadow: 1px 0 1px #fffffff5,
    0 1px 1px #0be929,
    -1px 0 1px #05e034,
    0 -1px 1px #0bbb37; */
    color: hsl(9, 92%, 48%);
text-shadow: 0 0 1px hsl(20, 100%, 18%),
             -1px 1px 0 hsl(20, 100%, 16%),                             
             -2px 2px 2px -1px hsl(20, 100%, 14%),                             
             -4px 4px 2px -2px hsl(20, 100%, 12%),
             -6px 6px 3px -3px hsl(20, 100%, 10%),
             -8px 8px 2px -4px hsl(20, 100%, 9%),
             -10px 10px 3px -5px hsl(20, 100%, 8%),
             -12px 12px 2px -6px hsl(20, 100%, 7%),
             -14px 14px 2px -7px hsl(20, 100%, 6%), 
             -15px 15px 2px -8px hsl(20, 100%, 5%),                             
             -15px 15px 0 -8px hsla(20, 50%, 10%, 0.25);
}

.text {
  font-family: "AmaticSC-Bold";
  color: #000000;
}
</style>