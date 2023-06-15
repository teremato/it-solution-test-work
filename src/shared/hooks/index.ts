import { onMounted, onUnmounted, ref } from "vue"


export const useWindowResize = () => {
    
    const isMobile = ref<boolean>();

    const resize = () => {
        isMobile.value = (window.innerWidth >= 731) ? true : false;
    }

    onMounted(() => {
        isMobile.value = (window.innerWidth >= 731) ? true : false;
        window.addEventListener('resize', resize);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', resize);
    })

    return {
        isMobile
    }
}