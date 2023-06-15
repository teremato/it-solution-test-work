<template>
    <label class="app__checkbox" :for="id">
        <input 
            class="app__checkbox-input" 
            type="checkbox" :id="id" >
    </label>
</template>

<script setup lang="ts">
import { getRandomInt } from '@/shared/helpers';
import { onMounted, ref } from 'vue';

const id = ref<string>();

onMounted(() => {
    id.value = getRandomInt(1, 100).toString();
})

</script>

<style lang="css" scoped src="./index.css">
</style>