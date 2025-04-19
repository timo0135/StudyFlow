<template>
    <div class="w-52 p-6 rounded-2xl border border-gray-300 bg-white flex flex-col">
        <h3 class="text-xl font-medium mb-6 text-gray-700">Prochaines classes</h3>
        <div v-for="(course, index) in courses" :key="index" class="flex items-center mb-4 last:mb-0">
            <div 
                :style="{ backgroundColor: course.color }" 
                class="h-5 w-5 rounded-full flex-shrink-0"
            ></div>
            <div class="ml-4 flex gap-2 justify-between flex-grow">
                <p class="text-gray-700 text-lg">{{ course.name }}</p>
                <p class="text-gray-500 text-sm">{{ course.day }} à {{ course.time }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const courses = reactive([
    { name: 'Mathématiques', day: 'Lundi', time: '10:00', color: '#FF5733' },
    { name: 'Physique', day: 'Mardi', time: '14:00', color: '#33FF57' },
    { name: 'Informatique', day: 'Mercredi', time: '16:00', color: '#3357FF' },
]);
</script>
