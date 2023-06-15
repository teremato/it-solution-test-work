<template>
    <main class="home-view">
        <section class="home-view__add-car">
            <div class="home-view__add-car-wrapper">
                <add-car-form />
            </div>
        </section>
        <section class="home-view__variants">
            <header class=" flex justify-end mr-[79px] mb-[17px]">
                <div>
                    <img class="m-auto" src="@icons/i__logo-big.svg" alt="logo">
                    <p class="text-center">
                        Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно?<br/>
                        Доверь нам все проблемы, связанные с продажей машины!
                    </p>
                </div>
            </header>
            <div class="flex justify-end">
                <div class="flex items-center mr-[66px]">
                    <article class="variants-block disabled">
                        <img class="w-min" src="@icons/i__clock.svg" alt="Быстро">
                        <h3>Быстро</h3>
                        <p>
                            Наша цель помочь вам продать машину как 
                            можно быстрее, оформив все необходимые 
                            докуметы в ускоренном порядке, и мы 
                            сделаем для этого всё от себя зависящее.
                        </p>
                    </article>
                    <article class="variants-block active">
                        <img class="w-min" src="@icons/i__toggle.svg" alt="Просто">
                        <h3>Просто</h3>
                        <p>
                            Мы купим вашу машину при любом условии! 
                            Не важно есть ли на ней техосмотр, нуждается
                            ли она в ремонте или имеет неисправности; 
                            Мы приобритём вашу машину без лишних 
                            задержек и вопросов.
                        </p>
                    </article>
                    <article class="variants-block disabled">
                        <img class="w-min" src="@icons/i__euro.svg" alt="Дешево">
                        <h3>Прибыльно</h3>
                        <p>
                            Разумеется вы хотели бы продать свою 
                            машину с максимальной выгодой. Мы 
                            способны предложить вам за ваш автомобиль 
                            самую высокую цену на рынке.
                        </p>
                    </article>
                </div>
            </div>
        </section>
        <section class="home-view__about">

        </section>
        <section class="home-view__company">

        </section>
    </main>
</template>

<script setup lang="ts">
import { AddCarForm } from '@/widgets';
</script>

<style lang="css" src="./index.css">
</style>