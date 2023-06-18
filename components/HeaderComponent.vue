<template >
    <div class="w-full h-full  bg-white flex flex-row justify-between items-start px-8 pt-10 pb-6">
        <div class="logo">
            <img  loading="lazy" src="~/assets/logo.svg" alt="logo" />
        </div>
        <!-- <div class="flex "> -->
            <div class="waviy">
   <span style="--i:1">+</span>
   <span style="--i:2">7</span>
   <span style="--i:3">-</span>
   <span style="--i:4">(</span>
   <span style="--i:5">9</span>
   <span style="--i:6">1</span>
   <span style="--i:7">8</span>
   <span style="--i:8">)</span>
   <span style="--i:9">-</span>
   <span style="--i:10">4</span>
   <span style="--i:11">5</span>
   <span style="--i:12">1</span>
   <span style="--i:13">-</span>
   <span style="--i:14">2</span>
   <span style="--i:15">3</span>
   <span style="--i:16">-</span>
   <span style="--i:17">15</span>
  </div>
            <!-- <p class="custom ">+7-(918)-888-88-88</p> -->
        <!-- </div> -->

    </div>
</template>
<style>


.logo {
     /* height: 5rem; */
    width: max(10rem,15vw);
}
.waviy {
  position: relative;
}
.waviy   span {
  position: relative;
  display: inline-block;
  font-size: max(1.2rem,2.1vw);
  color: #f20f0f;
  text-transform: uppercase;
  animation: flip 5.4s infinite;
  animation-delay: calc(.1s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg); 
    /* color:black; */
  }
}



    0% {
        transform: translate(0px, 0px);
    }

    40% {
        transform: translate(-12px, -12px);
    }

    50% {
        transform: translate(-12px, -12px);
    }

    60% {
        transform: translate(-12px, -12px);
    }

    100% {
        transform: translate(0px, 0px);
    }
</style>