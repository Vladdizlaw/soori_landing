<script setup lang="ts">
const photosUrl = import.meta.glob('~/assets/photo/*', {
  eager: true,
  import: 'default',
})

</script>
<template>
  <div class="w-full h-full p-6 flex flex-col gap-8">
    <div class="w-full flex flex-col text">
      <h1 class="text-4xl"> Text about SOORI</h1>
      <p class="text-2xl">Our collection</p>
    </div>
    <div class="flex w-full h-full">
    <div class="flex flex-row flex-wrap w-[70%] h-full p-4 gap-4 relative ">
      
      <div class="w-[27.8%] h-full    flex flex-col justify-start items-center rounded-xl ">
        <!-- <div> -->
        <Swiper class="w-full h-full"
          :modules="[SwiperAutoplay, SwiperEffectCreative,  SwiperParallax]"
          :slides-per-view="1" loop="false" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
          :autoplay="{
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
          <SwiperSlide v-for="key, value in photosUrl" :key="key">
            <div class="rounded-xl overflow-hidden max-h-full">
            <img class="" loading="lazy" :src="value" alt="photo" />
          </div>
          </SwiperSlide>
        </Swiper>

      </div>
      <div class="w-[61.5%] h-full    flex flex-col justify-start items-start  gap-4 ">

        <div class="w-[100%] h-max-[33%]    flex flex-row justify-start items-center gap-2 rounded-xl oferflow-hidden">
          <Swiper class="w-full h-full " :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
            :loop="true" :effect="'creative'" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div>
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>

            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div class="rounded-xl oferflow-hidden w-full h-full">
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full " :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
            :loop="true" :effect="'creative'" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div>
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>

            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div class="rounded-xl oferflow-hidden w-full h-full">
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full " :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
            :loop="true" :effect="'creative'" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div>
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>

            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div class="rounded-xl oferflow-hidden w-full h-full">
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full " :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
            :loop="true" :effect="'creative'" :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div>
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>

            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div class="rounded-xl oferflow-hidden w-full h-full">
                <img loading="lazy" :src="value" alt="photo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- <div> -->
        <div class="w-[100%] h-[63%]   flex flex-row justify-start items-center gap-2 ">
          <Swiper class="w-full h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div class="min-h-full rounded-xl overflow-hidden">
              <img loading="lazy" :src="value" alt="photo" />
            </div> 
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <div class="min-h-full rounded-xl overflow-hidden">
              <img loading="lazy" :src="value" alt="photo" />
            </div> 
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide  v-for="key, value in photosUrl" :key="key">
              <div class="min-h-full rounded-xl overflow-hidden">
              <img loading="lazy" :src="value" alt="photo" />
            </div> 
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <img loading="lazy" :src="value" alt="photo" />
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-full h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <img loading="lazy" :src="value" alt="photo" />
            </SwiperSlide>
          </Swiper>

        
        </div>
        <!-- <div class="w-[100%] h-max-[33%]   flex flex-row justify-start items-center gap-2 ">
          <Swiper class="w-1/2 h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <img loading="lazy" :src="value" alt="photo" />
            </SwiperSlide>
          </Swiper>
          <Swiper class="w-1/2 h-full "
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
            :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
            <SwiperSlide v-for="key, value in photosUrl" :key="key">
              <img loading="lazy" :src="value" alt="photo" />
            </SwiperSlide>
          </Swiper>

         
        </div> -->
        <!-- <div class="w-[100%] h-max-[33%]    flex flex-raw justify-start items-center gap-2 ">
            <Swiper class="w-full h-full "
              :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperParallax]"
              :slides-per-view="1" :loop="true" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
              :autoplay="{
                delay: 1000,
                disableOnInteraction: true,
              }" :creative-effect="{
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
              <SwiperSlide v-for="key, value in photosUrl" :key="key">
                <img loading="lazy" :src="value" alt="photo" />
              </SwiperSlide>
            </Swiper>
        </div> -->

      </div>
    </div>
    <div class="w-[25%] translate-y-[-20%]">
      <Swiper class="w-full h-full"
          :modules="[SwiperAutoplay, SwiperEffectCreative,  SwiperParallax]"
          :slides-per-view="1" :loop="false" :navigation="true" :pagination="true" :paralax="true" :effect="'creative'"
         
          :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
          <SwiperSlide v-for="key, value in photosUrl" :key="key">
            <div class="rounded-xl overflow-hidden max-h-full relative">
            <img class="" loading="lazy" :src="value" alt="photo" />
            <div class="absolute bottom-10 left-50 right-50"><p>Описаник</p>  </div> 
          </div>
          </SwiperSlide>
        </Swiper>
    </div>
  </div> 



  </div>
</template>
<style scoped >
.text {
  font-family: "DynaPuff", sans-serif;
  color: #000000;
}

.swiper-wrapper {
  border-radius: 10px;
}
</style>