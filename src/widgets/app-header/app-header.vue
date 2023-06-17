<template>
    <header class="app__header">
        <div class="app__header-left">
            <div class="app__header-contacts">
                <span v-if="!isMobile" class="font-bold text-[14px] leading-[16px]">
                    Покупка авто по одному звонку!
                </span>
                <span class="app__header-contacts-item">
                    <img src="@icons/i__phone.svg" alt="contact-phone">
                    <a href="tel:+372 43675 476">+372 43675 476</a>
                </span>
                <span v-if="isMobile" class="app__header-contacts-item">
                    <img src="@icons/i__mail.svg" alt="contact-phone">
                    info@example.ee
                </span>
            </div>
        </div>
        <div class="app__header-right">
            <div class="app__header-wrapper">
                <template v-if="isMobile">
                    <div class="app__header-top">
                        <span class="app__header-logo">
                            <img class="" src="@images/logo.png" alt="logo">
                        </span>
                        <div class="app__header-sociaty">
                            <img src="@icons/i__facebook.svg" alt="facebook">
                            <img src="@icons/i__vk.svg" alt="vk">
                        </div>
                    </div>
                    <nav class="app__header-nav">
                        <ul class="app__header-list">
                            <li v-for="(path, idx) in links" :key="path.path"
                                :class="[
                                    'app__header-list-item',
                                    { 'active':  idx === 0}
                                ]">
                                <a class="link" :href="path.path">{{ path.label }}</a>
                            </li>
                            <span>
                                <img src="@icons/i__ru-flag.svg" alt="rus-lang">
                            </span>
                        </ul>
                    </nav>
                </template>
                <button v-else @click="emit('sidebar-change')" class="self-center">
                    <img src="@icons/i__burger.svg" alt="Боковое меню">
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/shared/hooks';

withDefaults(
    defineProps<{ links: { label:string, path: string, icon: string}[] }>(), {
        links: () => []
    }
)

const emit = defineEmits<{
    (e: 'sidebar-change'): void
}>()


const { isMobile } = useWindowResize();

</script>

<style lang="css" src="./index.css">
</style>