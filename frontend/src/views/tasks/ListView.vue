<template>
    <div class="overflow-y-auto max-h-140">
        <div v-for="(task, index) in tasks" :key="index" class="flex items-center mb-2 last:mb-0 flex-grow">
        <div 
            class="relative h-7 w-7 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
            @click="task.completed = !task.completed"
        >
            <svg 
                v-if="task.completed" 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="#7c94d5" 
                stroke-width="2"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <span :class="{ 'line-through text-gray-500': task.completed }" class="ml-4 text-gray-700 text-lg">
            {{ task.name }}
        </span>
    </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const tasks = reactive([
    { name: 'Préparer la présentation', completed: false },
    { name: 'Étudier pour l\'examen', completed: false },
    { name: 'Travailler sur le projet Vue.js', completed: false },
    { name: 'Réviser le code', completed: false },
    { name: 'Faire des tests', completed: false },
    { name: 'Déployer l\'application', completed: false },
    { name: 'Écrire la documentation', completed: false },
    { name: 'Préparer la réunion', completed: false },
    { name: 'Envoyer les emails', completed: false },
    { name: 'Mettre à jour le calendrier', completed: false },
    { name: 'Organiser le code', completed: false },
    { name: 'Corriger les bugs', completed: false },
    { name: 'Optimiser les performances', completed: false },
    { name: 'Ajouter des fonctionnalités', completed: false },
    { name: 'Faire une pause', completed: false },
    { name: 'Prendre un café', completed: false },
    { name: 'Discuter avec l\'équipe', completed: false },
    { name: 'Répondre aux messages', completed: false },
    { name: 'Faire le point sur le projet', completed: false },
    { name: 'Planifier la semaine', completed: false },
    { name: 'Faire du brainstorming', completed: false },
    { name: 'Évaluer les progrès', completed: false },
]);
</script>
