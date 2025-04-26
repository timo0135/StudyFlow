<template>
    <div class="flex gap-6 p-6 overflow-x-auto">
        <div
            v-for="(tasks, category) in groupedTasks"
            :key="category"
            class="bg-white rounded-lg p-6 min-w-[30vh] shadow-lg max-h-[70vh] border border-gray-200"
            @dragover.prevent
            @drop="onDrop(category)"
        >
            <div class="sticky top-0 bg-white z-10">
                <h3 class="mb-4 text-xl font-bold text-gray-900 border-b pb-2 border-gray-300">
                    {{ category }}
                </h3>
            </div>
            <div class="overflow-y-auto bg-white min-w-[10vh] max-h-[40vh]">
                <div
                class="bg-gray-100 border border-gray-300 rounded-lg p-3 mb-3 text-sm text-gray-800 shadow-sm hover:bg-gray-200 transition-colors cursor-pointer"
                v-for="task in tasks"
                :key="task.name"
                draggable="true"
                @dragstart="onDragStart(task)"
            >
                {{ task.name }}
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

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

const draggedTask = reactive({});

const groupedTasks = computed(() => {
    return tasks.reduce((groups, task) => {
        if (!groups[task.category]) {
            groups[task.category] = [];
        }
        groups[task.category].push(task);
        return groups;
    }, {});
});

function onDragStart(task) {
    draggedTask.value = task;
}

function onDrop(newCategory) {
    if (draggedTask.value) {
        draggedTask.value.category = newCategory;
    }
}
</script>

<style scoped>
/* No additional styles needed since Tailwind handles styling */
</style>
