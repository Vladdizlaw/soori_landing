<template >
    <div class="w-full h-full  bg-white flex md:flex-row flex-col md:justify-between justify-center items-center px-12 pt-10 pb-6 hover:shadow-md shadow-[#ea7777] duration-500">
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

            <div class="flex items-center gap-2 mb-2 hover:drop-shadow-md duration-200">
                <img class=" ozone w-[2rem]" src="~assets/ozon.svg" alt="OZON" />
                <a class="decoration-none text-2xl " target="_blank"
                    href="https://www.ozon.ru/brand/soori-100866453/">OZON</a>
            </div>
            <div class="flex items-center gap-2 hover:animate-pulse pb-2">
              
                <a class="decoration-none text-2xl" target="_blank"
                    href="https://www.wildberries.ru/catalog/0/search.aspx?search=soori">  <img class="w-[10rem] rounded-md" src="~assets/wildberries.svg" alt="wildberries" /></a>
            </div>
        </div>
    </div>
</template>
<style>


.waviy {
    position: relative;
}

.waviy span {

    position: relative;
    display: inline-block;
    font-size: max(1.2rem, 2.5vw);
    color: #f20f0f;
    animation: flip 5.4s infinite;
    text-transform: uppercase;
    animation-delay: calc(.1s * var(--i))
}

 .ozone {
    transition :all 0.2s;
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