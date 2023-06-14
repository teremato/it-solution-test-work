<template>
    <form class="add-car__form translate-x-[112px]">
        <h3 class="sub-title mb-[28px] translate-x-[128px] ">
            Данные автомобиля
        </h3>
        <div class="add-car__form-top">
            <app-input label="Марка " />
            <app-input label="Модель" />
            <app-input label="Мотор" />
            <app-input label="Год" />
            <app-input label="Топливо" />
            <app-input label="КПП" />
            <app-input label="Пробег" />
            <app-input label="Техосмотр" />
            <app-input label="Желаемая цена" />
            <button class="btn col-span-3 h-[29px]">
                Добавить фото
            </button>
        </div>
        <h3 class="sub-title mb-[25px] mt-[25px] translate-x-[128px]">
            Другие данные
        </h3>
    </form>
</template>

<script setup lang="ts">
import { AppInput } from '@/shared/ui';

</script>

<style lang="css" scoped src="./index.css">
</style>