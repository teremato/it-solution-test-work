<template>
    <aside :class="[
            'app__sidebar',
            { 'translate-x-[100%]': isOpen },
            { 'translate-x-[-100%]': isOpen }
        ]">
        <header class="flex justify-between mt-[27px] mb-[95px]">
            <h1 class="text-[48px] leading-[55px]">LOGO</h1>
            <button @click="emit('sidebar-change')" class="self-start ">
                <img src="@icons/i__burger.svg" alt="button">
            </button>
        </header>
        <ul>
            <li v-for="link in links" :key="link.path"
                class="flex items-center gap-x-[18px]
                    text-[18px] leading-[21px] font-black mb-[55px] uppercase">
                <img :src="setIcon(link.icon)" :alt="link.label">
                <a :href="link.label">{{ link.label }}</a>
            </li>
            <li class="flex items-center gap-x-[10px] mb-[50px]">
                <img class="w-[33px] h-[22px]" src="@icons/i__ru-flag.svg" alt="Русский язык">
                <span class="text-[18px] leading-[21px] font-black uppercase">
                    Русский
                </span>
            </li>
            <div class="flex items-center gap-x-[30px]">
                <li>
                    <a href="#">
                        <img class="w-[33px] h-[33px]" src="@icons/i__facebook.svg" alt="facebook">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="w-[33px] h-[33px]" src="@icons/i__vk.svg" alt="vk">
                    </a>
                </li>
            </div>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import { setIcon } from '@/shared/helpers';


withDefaults(
    defineProps<{ 
        isOpen: boolean,
        links: { label:string, path: string, icon: string }[] 
    }>(), {
        isOpen: false,
        links: () =>[]
    }
)
const emit = defineEmits<{
    (e: 'sidebar-change'): void
}>();

</script>

<style lang="css" scoped src="./index.css">
</style>