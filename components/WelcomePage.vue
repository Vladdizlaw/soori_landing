<script setup lang="ts">
const slider1 = Object.values(import.meta.glob('~/assets/photo/slider1/*', {
  eager: true,
  import: 'default',
}))

const slider2 = Object.values(import.meta.glob('~/assets/photo/slider2/*', {
  eager: true,
  import: 'default',
}))
const slider3 = Object.values(import.meta.glob('~/assets/photo/slider3/*', {
  eager: true,
  import: 'default',
}))



</script>
<template>
  <div class="w-full h-full p-6 flex flex-col gap-8">
    <div class="w-full flex flex-col text">
      <h1 class="text-[max(3.2vw,1.6rem)] text-white font-bold drop-shadow-xl"> Сделано в России с любовью</h1>
      <p class="text-[max(2vw,1.4rem)] text-white drop-shadow-xl">Одежда SOORI сделает акцент на Ваших внешних достоинствах и покажет Вашу индивидуальность. Выбирайте “SOORI” и будьте уверены в своей красоте! Качество по доступной цене</p>
    </div>
   
      <div class="flex flex-row flex-wrap w-full h-full min-h-[20rem] p-4 gap-4 relative justify-center">

        <div class="md:w-[19%] w-full h-full  hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
          <Swiper  class="scale-90 h-full hover:shadow-xl duration-300 rounded-md  "
            :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperVirtual]" :slides-per-view="1" :virtual="true" :loop="true"
             :effect="'creative'" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="value,index in slider1" :key="index">
              <div class="rounded-xl overflow-hidden max-h-full">
                <img :src="value" alt="photo" loading="lazy"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="md:w-[19%] w-full h-full flex flex-row justify-start items-center rounded-xl select-none">
          <Swiper  class=" h-full hover:shadow-xl duration-300 rounded-md  "
            :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperVirtual]" :slides-per-view="1" :loop="true"
             :effect="'creative'" :virtual="true" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="value,index in slider2" :key="index">
              <div class="rounded-xl overflow-hidden max-h-full">
                <img :src="value" alt="photo" loading="lazy" />
                <div class="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="w-[19%] h-full hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
          <Swiper  class="scale-90 h-full hover:shadow-xl duration-300 rounded-md  "
            :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperVirtual]" :slides-per-view="1" :loop="true"
            :virtual="true"
            :effect="'creative'" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
       <SwiperSlide v-for="value,index in slider3" :key="index">
              <div class="rounded-xl overflow-hidden max-h-full">
                <img  :src="value" alt="photo" loading="lazy"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

    
      </div>

    </div>



  
</template>
<style scoped >
.text {
  font-family: "AmaticSC-Bold";
  color: #000000;
}


</style>