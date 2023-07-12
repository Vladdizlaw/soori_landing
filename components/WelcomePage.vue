<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

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


const slider_1 = [...dress_1, ...dress_3, ...dress_2, ...dress_16, ...dress_15, ...dress_23, ...dress_20, ...dress_6,]
const slider_2 = [...dress_5, ...dress_25, ...dress_7, ...dress_4, ...dress_9, ...dress_17, ...dress_24, ...dress_19, ...dress_22]
const slider_3 = [...dress_14, ...dress_11, ...dress_18, ...dress_10, ...dress_13, ...dress_14, ...dress_12, ...dress_21, ...dress_8]

const slider_mob = [...slider_2, ...slider_3, ...slider_1]
const orientation = ref('landscape-primary')
const onOrientationChange = () => {
  orientation.value = window.screen.orientation.type
}

onMounted(() => {
  orientation.value = window.screen.orientation.type
  window.addEventListener('orientationchange', onOrientationChange)
})
onBeforeUnmount(() => {
  window.removeEventListener('orientationchange', onOrientationChange)
})

</script>
<template>
  <div class="w-full h-full p-6 flex flex-col gap-8">
    <div class="w-full flex flex-col text">
      <h1 class="text-[max(2.5vw,2rem)] text-red-500 font-bold drop-shadow-xl  shadow-custom_title"> Сделано в России с
        любовью
      </h1>
      <p class="text-[max(1.7vw,1.4rem)] text-red-500 drop-shadow-xl shadow-custom">Одежда SOORI сделает акцент на Ваших
        внешних
        достоинствах и покажет Вашу индивидуальность. Выбирайте SOORI и будьте уверены в своей красоте! Качество по
        доступной цене</p>
    </div>

    <div
      class="flex scale-90 flex-row flex-wrap w-full h-fit  min-h-[22rem] p-4 gap-4 relative justify-center md:mt-0 mt-[-3rem]">

      <div v-if="orientation == 'landscape-primary'"
        class="md:w-[19%] w-full h-full  hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
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
      <div v-if="orientation == 'landscape-primary'"
        class="md:w-[19%] w-full h-full hidden md:flex  flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition: false,
            stopOnLastSlide: false,

          }">
          <SwiperSlide v-for="value, index in slider_2" :key="index">
            <div class="rounded-xl overflow-hidden ">
              <img :src="value" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
      <div v-if="orientation == 'portrait-primary'"
        class=" w-full h-full flex  flex-row justify-start items-center rounded-xl select-none">
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
      <div v-if="orientation == 'landscape-primary'"
        class="w-[19%] h-full hidden md:flex flex-row justify-start items-center rounded-xl select-none">
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
              <img :src="value" alt="photo" loading="lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


    </div>

    <div class="w-full flex items-center justify-center pb-4 md:mt-[-2rem] mt-[-3rem] ">
      <p class="text-[max(1.6vw,1.2rem)] ">Купить нашу продукцию можно здесь <a target="_blank"
          href="https://www.ozon.ru/brand/soori-100866453/"
          class=" hover:animate-none  text-blue-500 underline drop-shadow-xl cursor-pointer link ml-4">OZONE</a> <a
          target="_blank" href="https://www.wildberries.ru/catalog/0/search.aspx?search=soori"
          class="animate-pulse hover:animate-none font-[600] cursor-pointer text-blue-500 underline drop-shadow-xl ml-2 link">WILDBERRIES</a>
      </p>
    </div>


  </div>
</template>
<style scoped >
.shadow-custom {

  color: hsl(0, 80%, 54%);

  -webkit-text-shadow: -1px 8px 14px rgba(166, 38, 102, 0.76);
  -moz-text-shadow: -1px 8px 14px rgba(166, 38, 102, 0.76);
  text-shadow: -1px 8px 14px rgba(166, 38, 102, 0.76);

}

.shadow-custom_title {
  color: hsl(0, 86%, 58%);
  animation: pulsateTitle 1.4s linear infinite;

}

@keyframes pulsate {
  50% {
    color: #1915ec;
    text-shadow: 0 -1px rgba(14, 62, 133, 0.3), 0 0 5px #1c84da, 0 0 8px #25a7ac;
  }
}

@keyframes pulsateTitle {
  0% {
    -webkit-text-shadow: 1px 1px 1px rgba(166,  38,  102, 0.46);
-moz-text-shadow: 1px 1px 2px rgba(166,  38,  102, 0.46);
text-shadow: 1px 1px 2px rgba(166,  38,  102, 0.46);
 
  }
  50% {
    -webkit-text-shadow: 4px 3px 6px rgba(166,  38,  102, 0.46);
-moz-text-shadow: 4px 3px 6px rgba(166,  38,  102, 0.46);
text-shadow: 4px 3px 6px rgba(166,  38,  102, 0.46);
  }
  100% {
    -webkit-text-shadow: 2px 1px 2px rgba(166,  38,  102, 0.46);
-moz-text-shadow: 2px 1px 3px rgba(166,  38,  102, 0.46);
text-shadow: 2px 1px 3px rgba(166,  38,  102, 0.46);
 
  }
}


.link {
  animation: pulsate 2s linear infinite;

}
</style>