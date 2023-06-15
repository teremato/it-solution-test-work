<template>
    <div class="min-h-screen">
        <app-header/>
        <home-view/>
        <app-footer/>
    </div>
</template>

<script setup lang="ts">
import { AppHeader, AppFooter } from '@/widgets';
import { HomeView } from '@/views';


</script>

<style scoped></style>