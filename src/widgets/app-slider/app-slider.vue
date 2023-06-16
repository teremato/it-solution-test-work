<template>
    <div class="ml-[20px] mr-[20px] pl-[2px] h-[273px] overflow-hidden">
        <Swiper effect="coverflow"
            class="overflow-visible"
            wrapper-class="!h-[273px] items-center"
            :slides-per-view="3"
            :initial-slide="1"
            :long-swipes="false"
            auto-height
            centeredSlides
            @slide-change="onSlideChange"
            :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }">
            <SwiperSlide v-for="(item, idx) in slides" :key="idx"
                :class="{ 'self-center': index !== idx }"
                v-slot="{ isActive }">
                <article class="slider-item" :class="[
                    { 'slider-active': isActive },
                    { 'slider-disabled': !isActive },
                    { 'left-[60%] translate-x-[-150%]': index === 0 && idx === 0 },
                    { 'left-[50%] translate-x-[-50%]': index === 1 && idx === 1 },
                    { 'translate-x-[-15%]': index === 2 && idx === 2 },
                    { '!hidden': index === 0 && idx === 2 },
                    { '!hidden': index === 2 && idx === 0 },
                    { 'relative left-[-14.5%]': index === 1 && idx === 2 },
                    { 'relative right-[14%]': index === 0 && idx === 1 }
                ]">
                    <img :src="setIcon(item.icon)" alt="">
                    <h3>{{ item.title }}</h3>
                    <p v-html="item.description"></p>
                </article>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import type { Swiper as ISwiper } from 'swiper/types';


type Slide = {
    icon: string,
    title: string,
    description: string 
}

const index = ref<number>(1);
const slides = ref<Slide[]>([
    { 
        title: 'Быстро', 
        description: `Наша цель помочь вам продать машину как<br/>
            можно быстрее, оформив все необходимые<br/> 
            докуметы в ускоренном порядке, и мы<br/> 
            сделаем для этого всё от себя зависящее.<br/>`,
        icon: 'i__clock'
    },
    { 
        title: 'Просто', 
        description: `Мы купим вашу машину при любом условии!<br/>
            Не важно есть ли на ней техосмотр, нуждается<br/>
            ли она в ремонте или имеет неисправности;<br/> 
            Мы приобритём вашу машину без лишних<br/> 
            задержек и вопросов.<br/>`,
        icon: 'i__toggle'
    },
    { 
        title: 'Прибыльно', 
        description: `Разумеется вы хотели бы продать свою<br/> 
            машину с максимальной выгодой. Мы<br/>
            способны предложить вам за ваш автомобиль<br/> 
            самую высокую цену на рынке.<br/>`,
        icon: 'i__euro'
    },
]);

const onSlideChange = (swiper: ISwiper) => {
    index.value = swiper.activeIndex;
}

const setIcon = (icon: string) => {
    return new URL(
        `/src/shared/assets/icons/${icon}.svg`,
        import.meta.url
    ).href
}
</script>

<style lang="css" scoped src="./index.css">
</style>