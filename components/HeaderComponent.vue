<template >
    <div
        class="w-full h-full  bg-white flex md:flex-row flex-col md:justify-between justify-center items-center px-12 pt-10 pb-6 hover:shadow-md shadow-[#ea7777] duration-500 relative">
        <div class="logo md:w-[23vw] w-full">
            <img loading="lazy" src="~/assets/logo.svg" alt="logo" />
        </div>
      
        <div class="md:flex hidden flex-col items-end gap-2 justify-center">
            <div class="waviy">
                <span style="--i:1">+</span>
                <span style="--i:2">7</span>
                <span style="--i:3">-</span>
                <span style="--i:4">(</span>
                <span style="--i:5">9</span>
                <span style="--i:6">8</span>
                <span style="--i:7">9</span>
                <span style="--i:8">)</span>
                <span style="--i:9">-</span>
                <span style="--i:10">8</span>
                <span style="--i:11">5</span>
                <span style="--i:12">1</span>
                <span style="--i:13">-</span>
                <span style="--i:14">1</span>
                <span style="--i:15">5</span>
                <span style="--i:16">-</span>
                <span style="--i:17">3</span>
                <span style="--i:18">6</span>
            </div>
            <!-- <p class="custom ">+7-(918)-888-88-88</p> -->

            <div class="flex  items-center  justify-start gap-2 mb-2 hover:drop-shadow-md duration-200">
                <img class=" ozone w-[2.5rem]" src="~assets/ozon.svg" alt="OZON" />
                <a class="decoration-none text-[max(2vw,1.5rem)] " target="_blank"
                    href="https://www.ozon.ru/brand/soori-100866453/">OZON</a>
            </div>
            <div class="flex items-center gap-2 hover:animate-pulse pb-2 justify-start">

                <a class="decoration-none text-2xl" target="_blank"
                    href="https://www.wildberries.ru/catalog/0/search.aspx?search=soori"> <img class="w-[12rem] rounded-md"
                        src="~assets/wildberries.svg" alt="wildberries" /></a>
            </div>
        </div>
        <div class="absolute md:flex hidden top-[19%] right-[22rem] container rotate-[270deg]">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
        </div>
    </div>
</template>
<style>
.container {
  width:10rem;
  height:10rem;  
 justify-content: center;
 align-items: center;
 
}

.chevron {
  position: absolute;
  width: calc(1.5rem * 3.5);
  height: calc(1.5rem * 0.8);
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
 content: '';
 position: absolute;
 top: 0;
 height: 100%;
 width: 50%;
 background: #eb7b6d;
}

.chevron:before {
 left: 0;
 transform: skewY(30deg);
}

.chevron:after {
 right: 0;
 width: 50%;
 transform: skewY(-30deg);
}

@keyframes move-chevron {
 25% {
  opacity: 1;
	}
 33.3% {
  opacity: 1;
  transform: translateY(calc(1.5rem * 3.8));
 }
 66.6% {
  opacity: 1;
  transform: translateY(calc(1.5rem * 5.2));
 }
 100% {
  opacity: 0;
  transform: translateY(calc(1.5rem * 8)) scale(0.5);
 }
}
.waviy {
    position: relative;
}

.waviy span {

    position: relative;
    display: inline-block;
    font-size: max(1.2rem, 1.7vw);
    color: #f20f0f;
    animation: flip 5.4s infinite;
    text-transform: uppercase;
    animation-delay: calc(.1s * var(--i))
}

.ozone {
    transition: all 0.2s;
    animation: flip 3.5s infinite;
}

@keyframes flip {

    0%,
    80% {
        transform: rotateY(360deg);
        /* color:black; */
    }
}
</style>