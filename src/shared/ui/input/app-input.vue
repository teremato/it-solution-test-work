<template>
    <fieldset :class="[
        'app__input-field',
        `app__input-${size}`,
    ]">
        <legend class="app__input-label">
            {{ label }}
            <span v-if="requried" class="app__input-required"></span>
        </legend>
        <input class="app__input"
            :placeholder="placeholder"
            :name="name"
            type="text">
    </fieldset>
</template>

<script setup lang="ts">

interface IProps {
    label?: string,
    placeholder?: string,
    name?: string,
    requried?: boolean,
    size?: 'sm' | 'md' | 'lg' | 'block',
}

withDefaults(defineProps<IProps>(), {
    label: '',
    placeholder: '',
    requried: false,
    block: false,
    size: 'block'
})

</script>

<style lang="css" scoped src="./index.css">
</style>