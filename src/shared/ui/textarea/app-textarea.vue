<template>
    <fieldset :class="[
        'app__textarea-field',
        customClass
    ]">
        <legend class="app__textarea-label">{{ label }}</legend>
        <textarea 
            :placeholder="placeholder"
            :name="name"
            class="app__textarea"></textarea>
    </fieldset>
</template>
<script setup lang="ts">

interface IProps {
    label?: string,
    customClass?: string,
    placeholder?: string,
    name?: string,
    requried?: boolean,
    block?: boolean
    size?: 'sm' | 'md' | 'lg',
}

withDefaults(defineProps<IProps>(), {
    label: '',
    placeholder: '',
    requried: false,
    block: false,
    size: 'sm',
    customClass: ''
})

</script>
<style lang="css" scoped src="./index.css"></style>
