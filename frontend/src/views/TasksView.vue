<template>
    <header class="p-4 flex flex-start gap-6 items-center border-b-2 border-gray-200">
        <RouterLink to="/tasks/list" class="text-lg hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
            <i class="fi fi-rr-radio-button"></i> 
            Liste
        </RouterLink>
        <RouterLink to="/tasks/table" class="text-lg hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
            <i class="fi fi-ss-table"></i> 
            Tableau
        </RouterLink>
    </header>
    <RouterView />
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.router-link-active {
    border-bottom: 2px solid #3b82f6;
}

.router-link-active:hover {
    border-bottom: 2px solid white;
}
</style>