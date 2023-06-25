// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],
  image: {
    quality: 80,
    format: ['jpeg']
  },
  swiper: {
    modules: ['navigation', 'pagination', 'virtual','effect-creative','autoplay'] // all modules are imported by default
  },
 

 
})
