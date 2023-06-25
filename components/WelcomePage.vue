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
      <h1 class="text-[max(2.5vw,1.6rem)] text-red-500 font-bold drop-shadow-xl  shadow-custom"> Сделано в России с любовью
      </h1>
      <p class="text-[max(1.5vw,1.4rem)] text-red-500 drop-shadow-xl shadow-custom">Одежда SOORI сделает акцент на Ваших
        внешних
        достоинствах и покажет Вашу индивидуальность. Выбирайте SOORI и будьте уверены в своей красоте! Качество по
        доступной цене.</p>
    </div>

    <div class="flex scale-90 flex-row flex-wrap w-full h-fit  min-h-[22rem] p-4 gap-4 relative justify-center md:mt-0 mt-[-3rem]" >

      <div class="md:w-[19%] w-full h-full  hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="scale-90 h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :effect="'creative'" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition:false,
            stopOnLastSlide: false,

          }" 
          :creative-effect="{
  prev: {
    shadow:true,
    translate: ['-15%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
          <SwiperSlide v-for="value, index in slider1" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="md:w-[19%] w-full h-full flex flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :effect="'creative'" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition:false,
            stopOnLastSlide: false,

          }" 
          :creative-effect="{
  prev: {
    shadow:true,
    translate: ['-15%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
          <SwiperSlide v-for="value, index in slider2" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="w-[19%] h-full hidden  md:flex flex-row justify-start items-center rounded-xl select-none">
        <Swiper class="scale-90 h-full hover:shadow-xl duration-300 rounded-md  "
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperVirtual]" :slides-per-view="1" :virtual="true"
          :loop="true" :effect="'creative'" :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition:false,
            stopOnLastSlide: false,

          }" 
          :creative-effect="{
  prev: {
    shadow:true,
    translate: ['-15%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
          <SwiperSlide v-for="value, index in slider3" :key="index">
            <div class="rounded-xl overflow-hidden max-h-full">
              <img :src="value" alt="photo" link="preload" loading="lazy"/>
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
}</style>