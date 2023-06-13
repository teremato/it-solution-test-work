<template>
    <header class="relative h-[94px]">
        <div class="flex flex-col justify-center 
            h-[70px] max-w-full 
            rounded-bl-[10px] bg-green-v1">
            <div class="ml-[84px]">
                <span class="flex gap-[17px] mb-[10px]
                    font-semibold text-[14px] text-white leading-[16.41px]">
                    <img src="@icons/i__phone.svg" alt="">
                    +372 43675 476
                </span>
                <span class="flex gap-[17px] 
                    font-semibold text-[14px] text-white leading-[16.41px]">
                    <img src="@icons/i__mail.svg" alt="">
                    info@example.ee
                </span>
            </div>
        </div>
        <div class="flex flex-col justify-between absolute top-0 right-0 h-full w-[740px]
            rounded-bl-[270px] bg-primary-v1">
            <div class="flex mt-[12px]">
                <span class="flex justify-center w-full">
                    <img class="self-end" src="@images/logo.png" alt="logo">
                </span>
                <div class="flex gap-[14px] mr-[25px]">
                    <img src="@icons/i__facebook.svg" alt="facebook">
                    <img src="@icons/i__vk.svg" alt="vk">
                </div>
            </div>
            <nav>
                <ul class="flex justify-end items-center gap-[23px] mb-[5px]">
                    <li v-for="path in paths" :key="path.path"
                        class="font-bold leading-[16px] text-white">
                        {{ path.label }}
                    </li>
                    <span class="mr-[25px]">
                        <img src="@icons/i__ru-flag.svg" alt="rus-lang">
                    </span>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">

const paths: { label:string, path: string }[] = [
    { label: 'Главная', path: '/' },
    { label: 'О нас', path: '/about' },
    { label: 'Отправьте нам предложение', path: '/feedback' },
    { label: 'ЧЗВ', path: '/chzf' },
    { label: 'Блог', path: '/blog' },
    { label: 'Контакты', path: 'contacts' },
]

</script>

<style scoped>

</style>