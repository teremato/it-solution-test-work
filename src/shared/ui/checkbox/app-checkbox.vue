<template>
    <label :class="[
            'app__checkbox',
            {'app__checkbox-checked': checked}
        ]" 
        :for="id">
        <input @input="toggle"
            :checked="checked"
            :value="checked"
            class="app__checkbox-input" 
            type="checkbox" :id="id" >
    </label>
</template>

<script setup lang="ts">
import { getRandomInt } from '@/shared/helpers';
import { onMounted, ref } from 'vue';

withDefaults(
    defineProps<{ checked: boolean}>(), {
        checked: true
});
const emit = defineEmits<{
    (e: 'update:checked', val: boolean): boolean
}>()

const id = ref<string>();
const isToggle = ref<boolean>();

onMounted(() => {
    id.value = getRandomInt(1, 100).toString();
})

const toggle = (event: Event) => {
    const el = event.target as HTMLInputElement;
    console.log(el.checked)
    emit('update:checked', el.checked);
}

</script>

<style lang="css" scoped src="./index.css">
</style>