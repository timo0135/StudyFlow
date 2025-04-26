<template>
    <div class="overflow-y-auto max-h-140 p-4 ">
        <div v-for="(tasks, category) in groupedTasks" :key="category" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
                {{ category }}
            </h2>
            <div v-for="(task, index) in tasks" :key="index" class="flex items-center mb-3 last:mb-0">
                <div 
                    class="relative h-8 w-8 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-100 transition"
                    @click="task.completed = !task.completed"
                >
                    <svg 
                        v-if="task.completed" 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6 text-indigo-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span 
                    :class="{ 'line-through text-gray-400': task.completed, 'text-gray-700': !task.completed }" 
                    class="ml-4 text-lg font-medium transition"
                >
                    {{ task.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

// Ajout de la propriété 'category' à chaque tâche
const tasks = reactive([
    { name: 'Préparer la présentation', completed: false, category: 'Travail' },
    { name: 'Étudier pour l\'examen', completed: false, category: 'Études' },
    { name: 'Travailler sur le projet Vue.js', completed: false, category: 'Travail' },
    { name: 'Réviser le code', completed: false, category: 'Travail' },
    { name: 'Faire des tests', completed: false, category: 'Travail' },
    { name: 'Déployer l\'application', completed: false, category: 'Travail' },
    { name: 'Écrire la documentation', completed: false, category: 'Travail' },
    { name: 'Préparer la réunion', completed: false, category: 'Travail' },
    { name: 'Envoyer les emails', completed: false, category: 'Personnel' },
    { name: 'Mettre à jour le calendrier', completed: false, category: 'Personnel' },
    { name: 'Organiser le code', completed: false, category: 'Travail' },
    { name: 'Corriger les bugs', completed: false, category: 'Travail' },
    { name: 'Optimiser les performances', completed: false, category: 'Travail' },
    { name: 'Ajouter des fonctionnalités', completed: false, category: 'Travail' },
    { name: 'Faire une pause', completed: false, category: 'Personnel' },
    { name: 'Prendre un café', completed: false, category: 'Personnel' },
    { name: 'Discuter avec l\'équipe', completed: false, category: 'Travail' },
    { name: 'Répondre aux messages', completed: false, category: 'Personnel' },
    { name: 'Faire le point sur le projet', completed: false, category: 'Travail' },
    { name: 'Planifier la semaine', completed: false, category: 'Travail' },
    { name: 'Faire du brainstorming', completed: false, category: 'Travail' },
    { name: 'Évaluer les progrès', completed: false, category: 'Travail' },
]);

// Grouper les tâches par catégorie
const groupedTasks = computed(() => {
    return tasks.reduce((groups, task) => {
        if (!groups[task.category]) {
            groups[task.category] = [];
        }
        groups[task.category].push(task);
        return groups;
    }, {});
});
</script>