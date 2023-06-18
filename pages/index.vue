<script setup>
</script>
<template>
    <div class="w-full min-h-screen h-fit page-main flex flex-col justify-start items-center">
      <div class="h-[20%] mt-12 w-full flex items-center justify-center gap-12"> <HeaderComponent/></div>
     <div class="min-h-[50%] w-full">
       <WelcomePage />
     </div>
     
      <div class="min-h-[20%] w-full">  <FooterComponent/> </div>
    
    </div>
  </template>
  <style scoped >
.page-main{
  background-image: url('../assets/layer_pink.svg');
  background-size: cover;
  font-family: "DynaPuff", sans-serif;
  color: #000000;
}
</style>