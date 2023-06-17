<template>
    <div v-if="sliderActive" class="ml-[20px] mr-[20px] pl-[2px] h-[273px] overflow-hidden">
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
                    { 'opacity-0': index === 0 && idx === 2 },
                    { 'opacity-0': index === 2 && idx === 0 },
                    { 'relative left-[-14.5%]': index === 1 && idx === 2 },
                    { 'relative right-[14%]': index === 0 && idx === 1 }
                ]">
                    <img :src="setIcon(item.icon)" :alt="item.title">
                    <h3>{{ item.title }}</h3>
                    <p v-html="item.description"></p>
                </article>
            </SwiperSlide>
        </Swiper>
    </div>
    <div v-else class="flex items-center justify-end">
        <article v-for="(item, index) in slides" :key="index" 
            :class="[
                'slider-item',
                (index === 1) ? 'static-active' : 'static-disabled'
            ]">
            <img :src="setIcon(item.icon)" :alt="item.title" :class="[
                (index === 1) ? 'mt-[37px] mb-[22px]' : 'mt-[14px] mb-[12px]'
            ]">
            <h3 class="font-bold text-[18px] leading-[21px] text-primary mb-[7px]">
                {{ item.title }}
            </h3>
            <p v-html="item.description" class="text-center text-[12px] leading-[14px] text-primary">
            </p>
        </article>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import type { Swiper as ISwiper } from 'swiper/types';
import { setIcon } from '@/shared/helpers'

type Slide = {
    icon: string,
    title: string,
    description: string 
}


withDefaults(
    defineProps<{ sliderActive: boolean, slides: Slide[] }>(), {
        sliderActive: false,
        slides: () => []
})

const index = ref<number>(1);

const onSlideChange = (swiper: ISwiper) => {
    index.value = swiper.activeIndex;
}
</script>

<style lang="css" scoped src="./index.css">
</style>