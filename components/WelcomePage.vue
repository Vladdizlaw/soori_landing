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
const dress_16 = Object.values(import.meta.glob('~/assets/photo/dress-16/*', {
  eager: true,
  import: 'default',
}))
const dress_17 = Object.values(import.meta.glob('~/assets/photo/dress-17/*', {
  eager: true,
  import: 'default',
}))
const dress_18 = Object.values(import.meta.glob('~/assets/photo/dress-18/*', {
  eager: true,
  import: 'default',
}))
const dress_19 = Object.values(import.meta.glob('~/assets/photo/dress-19/*', {
  eager: true,
  import: 'default',
}))
const dress_20 = Object.values(import.meta.glob('~/assets/photo/dress-20/*', {
  eager: true,
  import: 'default',
}))
const dress_21 = Object.values(import.meta.glob('~/assets/photo/dress-21/*', {
  eager: true,
  import: 'default',
}))
const dress_22 = Object.values(import.meta.glob('~/assets/photo/dress-22/*', {
  eager: true,
  import: 'default',
}))
const dress_23 = Object.values(import.meta.glob('~/assets/photo/dress-23/*', {
  eager: true,
  import: 'default',
}))
const dress_24 = Object.values(import.meta.glob('~/assets/photo/dress-24/*', {
  eager: true,
  import: 'default',
}))
const dress_25 = Object.values(import.meta.glob('~/assets/photo/dress-25/*', {
  eager: true,
  import: 'default',
}))


const slider_1 = [...dress_1, ...dress_3, ...dress_2, ...dress_16, ...dress_15, ...dress_23,...dress_20,...dress_6,]
const slider_2 = [...dress_5, ...dress_25, ...dress_7, ...dress_4, ...dress_9, ...dress_17, ...dress_24, ...dress_19, ...dress_22]
const slider_3 = [...dress_14, ...dress_11, ...dress_18, ...dress_10, ...dress_13,...dress_14, ...dress_12, ...dress_21, ...dress_8]

const slider_mob = [...slider_2, ...slider_3, ...slider_1]
const orientation = ref('landscape-primary')
const onOrientationChange =()=>{
orientation.value = window.screen.orientation.type 
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

    <div class="w-full flex items-center justify-center pb-4 md:mt-[-2rem] mt-[-3rem] ">
      <p class="text-[max(1.6vw,1.2rem)] flex gap-4 items-center ">Купить нашу продукцию можно здесь <a target="_blank"
          href="https://www.ozon.ru/brand/soori-100866453/"
          class=" hover:animate-none  text-blue-500 underline drop-shadow-xl cursor-pointer link">OZONE</a> <a target="_blank"
          href="https://www.wildberries.ru/catalog/0/search.aspx?search=soori"
          class="animate-pulse hover:animate-none font-[600] cursor-pointer text-blue-500 underline drop-shadow-xl link">WILDBERRIES</a></p>
    </div>


  </div>
</template>
<style scoped >
.shadow-custom {
             color: hsl(0, 80%, 54%);
text-shadow: 0 2px 0 0px hsl(330, 100%, 25%),
             0 3px 2px 0px hsla(330, 100%, 15%, 0.5),
             /* next */
             0 3px 0 3px hsl(350, 100%, 50%),
             0 5px 0 3px hsl(350, 100%, 25%),
             0 6px 2px 3px hsla(350, 100%, 15%, 0.5),
             /* next */
             0 6px 0 9px hsl(20, 100%, 50%),
             0 8px 0 9px hsl(20, 100%, 25%),
             0 9px 2px 9px hsla(20, 100%, 15%, 0.5),
             /* next */
             0 9px 0 18px hsl(0, 0%, 7%)
             0 11px 0 18px hsl(50, 100%, 25%),
             0 12px 2px 18px hsla(50, 100%, 15%, 0.5),
             /* next */
             0 12px 0 30px hsl(70, 100%, 50%),
             0 14px 0 30px hsl(70, 100%, 25%),
             0 15px 2px 30px hsla(70, 100%, 15%, 0.5),
             /* next */
             0 15px 0 45px hsl(7, 84%, 88%),
             0 17px 0 45px hsl(90, 100%, 25%),
             0 17px 2px 45px hsla(90, 100%, 15%, 0.5);
}
@keyframes pulsate{50%{color:#fff;text-shadow:0 -1px rgba(0,0,0,.3),0 0 5px #f03000,0 0 8px #f80000;}
}

.text {
  font-family: "AmaticSC-Bold";
  color: #000000;
}
.link{
  animation: pulsate 1.3s linear infinite;

}
</style>