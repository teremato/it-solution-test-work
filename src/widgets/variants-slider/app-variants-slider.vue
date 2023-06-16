<template>
    <div class="relative">
        <swiper :slides-per-view="3"
            :width="347"
            :height="273"
            centered-slides
            effect="coverflow"
            :coverflow-effect="{
                rotate: 50,
                depth: 100,
                modifier: 1,
                stretch: 0,
                slideShadows: false
            }" 
            direction="horizontal">

                <swiper-slide v-for="(item, index) in slides" :key="index"
                    v-slot="{isActive}
                    ">
                    <article :class="[
                        'slider-item',
                        (isActive) ? 'slider-active' : 'slider-disabled'
                    ]">
                    </article>
                </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

withDefaults(defineProps<{active?: boolean}>(), {
    active: false
});


type Slide = {  icon: string, title: string, description: string }

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

const middle = computed<number>(() => {
    return Math.floor((slides.value.length - 1) / 2);
})

const setIcon = (slide: Slide) => {
    return new URL(
        `/src/shared/assets/icons/${slide.icon}.svg`,
        import.meta.url
    ).href
}
</script>

<style lang="css" scoped src="./index.css">
</style>