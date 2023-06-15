<template>
    <div class="flex items-center">
        <div class="flex items-center">
            <article v-for="(item, index) in slides" :key="index" 
                :class="[
                    'variants-block',
                    (middle === index) ? 'active' : 'disabled'
                ]">
                <img class="w-min mb-[7px]" :src="setIcon(item)" alt="Быстро">
                <h3>{{ item.title }}</h3>
                <p v-html="item.description" class="font-normal"></p>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

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