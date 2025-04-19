<script setup>
import { RouterView } from 'vue-router'
import NavigationComponent from './components/static/NavigationComponent.vue'
import HeaderComponent from './components/static/HeaderComponent.vue'
</script>

<template>
  <div class="flex">
    <NavigationComponent />
    <div class="flex flex-col flex-1">
      <HeaderComponent />
      <div class="flex-1 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>