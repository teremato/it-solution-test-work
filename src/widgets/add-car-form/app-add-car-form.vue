<template>
    <form class="add-car__form translate-x-[112px]">
        <h3 class="sub-title mb-[38px] translate-x-[128px] ">
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
            <app-input label="Желаемая цена" requried/>
            <button type="button" class="btn col-span-3 h-[29px]">
                Добавить фото
            </button>
        </div>
        <div class="w-min">
            <h3 class="sub-title mb-[25px] mt-[25px] text-center">
                Другие данные
            </h3>
            <div class="add-car__form-bottom">
                <app-input label="Имя" size="md"/>
                <app-input label="Почта" size="lg"/>
                <app-input label="Телефон" size="md" requried/>
                <app-input label="Город" size="lg"/>
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
                    <button type="submit" class="btn mt-[15px] w-[190px] h-[22px]">
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

</script>

<style lang="css" scoped src="./index.css">
</style>