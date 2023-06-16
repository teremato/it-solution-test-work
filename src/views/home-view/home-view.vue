<template>
    <main class="home-view">
        <section class="home-view__add-car">
            <div class="sm:flex sm:flex-col sm:justify-center">
                <add-car-form />
                <div v-if="!isMobile" class="bg-[url('@images/ill_add-car.svg')] mt-[20px]">
                    <img class="opacity-0" src="@images/ill_add-car.svg" alt="Добавить авто">
                </div>
            </div>
        </section>

        <section class="home-view__variants">
            <div class="inline-block float-right sm:block sm:float-none">
                <header class="mb-[23px]">
                    <div class="">
                        <img class="m-auto sm:mb-[10px]" src="@icons/i__logo-big.svg" alt="logo">
                        <p class="text-[12px] leading-[14px] text-center font-bold">
                            Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно?<br/>
                            Доверь нам все проблемы, связанные с продажей машины!
                        </p>
                    </div>
                </header>
            </div>
        </section>

        <section class="home-view__about">
            <div class="home-view__about-wrapper">
                <header class="sm:mr-[20px] sm:ml-[20px]">
                    <h1 class="section-title after:w-[75px] mb-[21px]">
                        О нас
                    </h1>
                    <h3 class="text-[18px] font-bold leading-[21px] text-primary mb-[19px] block">
                        Мы действуем на рынке автомобилей уже много лет и<br class="sm:hidden"/>
                        знаем как оформить сделку быстро и без проблем.
                    </h3>
                    <p class="text-[12px] leading-[14px] text-primary mb-[39px]">
                        Первое, что следует сделать заинтересованному в продаже машины человеку –<br class="sm:hidden"/>
                        связаться с нами, заполнив контактную форму на сайте или позвонив по<br class="sm:hidden"/>
                        телефону. На основании полученного со слов описания машины мы назовем<br class="sm:hidden"/> 
                        предварительную стоимость. Точное ценовое предложение станет известно после<br class="sm:hidden"/> 
                        проведения оценки, которую выполнит наш специалист, выехав для этого в удобное<br class="sm:hidden"/> 
                        для клиента место.
                    </p>
                </header>
                <ul class="sm:flex sm:mr-[20px] sm:ml-[20px]">
                    <li class="flex items-center gap-[13px] mb-[47px] sm:mb-0 sm:flex-col">
                        <img src="@icons/i__premium.svg" alt="Высокие цены">
                        <span class="font-bold text-[17px] leading-[18px] sm:text-center">
                            Предлагаем самые высокие<br/> цены
                        </span>
                    </li>
                    <li class="flex items-center gap-[13px] mb-[43px] sm:mb-0 sm:flex-col">
                        <img src="@icons/i__edit-doc.svg" alt="Оформляем на месте">
                        <span class="font-bold text-[17px] leading-[18px] sm:text-center">
                            Оформляем документы прямо на<br/> месте
                        </span>
                    </li>
                    <li class="flex items-center gap-[13px] sm:flex-col">
                        <img v-if="isMobile" src="@icons/i__like.svg" alt="В любом состоянии">
                        <img v-else src="@icons/i__like-small.svg" alt="В любом состоянии">
                        <span class="font-bold text-[17px] leading-[18px] sm:text-center">
                            Выкупаем машины в любом<br/> состоянии
                        </span>
                    </li>
                </ul>
                <div v-if="!isMobile" class="bg-[url('@images/ill_about-small.png')] bg-no-repeat">
                    <img class="opacity-0" src="@images/ill_about-small.png" alt="О нас">
                </div>
            </div>
        </section>

        <section class="home-view__company">
            <div>
                <h1 class="section-title after:w-[110px] mb-[17px]">
                    COMPANY NAME
                </h1>
                <p class="text-[15px] leading-[17px] text-primary mb-[48px] sm:mb-[20px]">
                    Каждый автовладелец хотя бы раз сталкивался с <br/>
                    необходимостью продать машину. Конечно же, вы хотите <br/>
                    селать это быстрее и с максимальной выгодой. Наши <br/>
                    специалисты возьмут на себя все проблемы! Нам можно <br/>
                    полностью доверять. <br/>
                    Мы не являемся кредитной организацией или ломбардом.<br/>
                    Мы покупаем ваши машины, в любом виде и состоянии. Да, <br/>
                    так просто! <br/>
                    Наша цель - купить вашу машину максимально быстро, <br/>
                    просто и выгодно для вас. <br/>
                </p>
                <ul class="flex justify-between">
                    <li class="flex flex-col items-center justify-center w-[118px] h-[118px] 
                        rounded-[10px] shadow-[0px_4px_4px_#E5E5E5]">

                        <img class="mb-[20px]" src="@icons/i__clock.svg" alt="Быстро">
                        <span class="font-bold text-[16px] leading-[18px] text-primary">
                            Быстро
                        </span>
                    </li>
                    <li class="flex flex-col items-center justify-center w-[118px] h-[118px] 
                        rounded-[10px] shadow-[0px_4px_4px_#E5E5E5]">

                        <img  class="mb-[20px]" src="@icons/i__star.svg" alt="Качество">
                        <span class="font-bold text-[16px] leading-[18px] text-primary">
                            Качественно
                        </span>
                    </li>
                    <li class="flex flex-col items-center justify-center w-[118px] h-[118px] 
                        rounded-[10px] shadow-[0px_4px_4px_#E5E5E5]">

                        <img  class="mb-[20px]" src="@icons/i__protected.svg" alt="Надежно">
                        <span class="font-bold text-[16px] leading-[18px] text-primary">
                            Надежно
                        </span>
                    </li>
                </ul>
            </div>
            <ul class="self-end sm:self-start">
                <li class="flex items-align gap-[19px] mb-[23px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Машину не надо подготавливать <br class="sm:hidden"/>к продаже
                    </span>
                </li>
                <li class="flex items-align gap-[19px] mb-[23px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Покупаем машины любого года выпуска и в<br class="sm:hidden"/> любом состоянии
                    </span>
                </li>
                <li class="flex items-align gap-[19px] mb-[23px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Покупаем машины без техосмотра и<br class="sm:hidden"/>страховки
                    </span>
                </li>
                <li class="flex items-align gap-[19px] mb-[23px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Покупаем машины не работающие и<br class="sm:hidden"/> нуждающиеся в ремонте
                    </span>
                </li>
                <li class="flex items-align gap-[19px] mb-[23px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Предложим за вашу машину больше<br class="sm:hidden"/> остальных
                    </span>
                </li>
                <li class="flex items-align gap-[19px] mb-[23px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Сразу же выплачиваем<br class="sm:hidden" /> деньги
                    </span>
                </li>
                <li class="flex items-align gap-[19px]">
                    <img src="@icons/i__toggle-small.svg" alt="Почему нужно выбрать нас!">
                    <span class="text-[15px] font-bold text-primary leading-[17px]">
                        Работаем по всей Эстонии и сами<br class="sm:hidden" /> выезжаем на место
                    </span>
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
import { 
    AddCarForm,
    AppSlider
} from '@/widgets';
import { useWindowResize } from '@/shared/hooks';


const { isMobile } = useWindowResize();

</script>

<style lang="css" src="./index.css">
</style>