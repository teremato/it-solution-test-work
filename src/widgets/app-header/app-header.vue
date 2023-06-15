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
                            <li v-for="(path, idx) in paths" :key="path.path"
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
                <button v-else class="self-center">
                    <img src="@icons/i__burger.svg" alt="Боковое меню">
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useWindowResize } from '@/shared/hooks';

const { isMobile } = useWindowResize();


const paths: { label:string, path: string }[] = [
    { label: 'главная ', path: '/' },
    { label: 'о нас', path: '/about' },
    { label: 'отправьте нам предложение', path: '/feedback' },
    { label: 'чзв', path: '/chzf' },
    { label: 'блог', path: '/blog' },
    { label: 'контакты', path: 'contacts' },
]

</script>

<style lang="css" src="./index.css">
</style>