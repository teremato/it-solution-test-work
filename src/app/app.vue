<template>
    <div class="min-h-screen sm:overflow-x-hidden">
        <app-header :links="paths" @sidebar-change="handleChange"/>
        <app-mobile-sidebar v-if="!isMobile"
            :links="paths"
            :is-open="sideOpen"
            @sidebar-change="handleChange" />
        <home-view/>
        <app-footer/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
    AppHeader, 
    AppFooter, 
    AppMobileSidebar 
} from '@/widgets';
import { HomeView } from '@/views';
import { useWindowResize } from '@/shared/hooks';


const { isMobile } = useWindowResize();
const sideOpen = ref<boolean>(false); 

const paths: { label:string, path: string, icon: string }[] = [
    { label: 'главная ', path: '/', icon: 'i__home-outline-sm' },
    { label: 'о нас', path: '/about', icon: 'i__peaple-outline-sm' },
    { label: 'отправьте нам предложение', path: '/feedback', icon: 'i__message-sm' },
    { label: 'чзв', path: '/chzf', icon: 'i__help-sm' },
    { label: 'блог', path: '/blog', icon: 'i__chat-sm' },
    { label: 'контакты', path: 'contacts', icon: 'i__location-sm' },
]

const handleChange = () => {
    sideOpen.value = !sideOpen.value;
}

</script>

<style scoped></style>