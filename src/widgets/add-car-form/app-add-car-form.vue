<template>
    <form class="add-car__form translate-x-[112px] sm:translate-x-0">
        <h3 class="sub-title mb-[38px] translate-x-[128px] sm:mb-[26px] sm:translate-x-0 sm:text-center">
            Данные автомобиля
        </h3>
        <div class="add-car__form-top">
            <app-input label="Марка" :block="!isMobile"/>
            <app-input label="Модель" :block="!isMobile"/>
            <app-input label="Мотор" :block="!isMobile"/>
            <app-input label="Год" :block="!isMobile"/>
            <app-input label="Топливо" :block="!isMobile"/>
            <app-input label="КПП" :block="!isMobile"/>
            <app-input label="Пробег" :block="!isMobile"/>
            <app-input label="Техосмотр" :block="!isMobile"/>
            <app-input label="Желаемая цена" requried :block="!isMobile"/>
            <button type="button" class="btn col-span-3 h-[29px]">
                Добавить фото
            </button>
        </div>
        <div class="w-min sm:w-full">
            <h3 class="sub-title mb-[25px] mt-[25px] text-center sm:mt-[30px]">
                Другие данные
            </h3>
            <div class="add-car__form-bottom">
                <app-input label="Имя" :size="(!isMobile)?'block':'md'"/>
                <app-input label="Почта" :size="(!isMobile)?'block':'lg'"/>
                <app-input label="Телефон" :size="(!isMobile)?'block':'md'" requried/>
                <app-input label="Город" :size="(!isMobile)?'block':'lg'"/>
                <app-textarea label="Сообщение" custom-class="col-span-2 h-[58px]"/>
            </div>
            <div class="add-car__form-confirm">
                <div class="grid grid-cols-[1fr_100%]">
                    <app-checkbox />
                    <p>
                        Я согласен(на), что фирма использует мои личные данные на основе<br/>
                        <span>Политики конфедициальности</span> 
                    </p>
                </div>
                <span class="flex justify-center">
                    <button type="submit" class="btn mt-[15px] w-[190px] h-[22px] sm:h-[30px]">
                        Отправить
                    </button>
                </span>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { 
    AppInput,
    AppTextarea,
    AppCheckbox
} from '@/shared/ui';
import { useWindowResize } from '@/shared/hooks';


const { isMobile } = useWindowResize();

</script>

<style lang="css" scoped src="./index.css">
</style>