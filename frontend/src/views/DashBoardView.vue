<template>
    <div class="grid grid-cols-2 h-full gap-10 p-10">
        <TasksMinimalComponent class="w-full h-full" />
        <ScheduleMinimalComponent class="w-full h-full" />
        <TimerComponent class="w-full h-full" />
        <StatsMinimalComponent class="w-full h-full" />
    </div>
</template>

<script setup>
import ScheduleMinimalComponent from '@/components/dashboard/ScheduleMinimalComponent.vue';
import StatsMinimalComponent from '@/components/dashboard/StatsMinimalComponent.vue';
import TasksMinimalComponent from '@/components/dashboard/TasksMinimalComponent.vue';
import TimerComponent from '@/components/dashboard/TimerComponent.vue';

</script>

<style scoped>
</style>