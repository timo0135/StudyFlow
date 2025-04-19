<template>
    <nav class="w-64 h-[94vh] bg-white-500 text-gray-800 flex flex-col p-5 rounded-l-2xl border-r border-gray-300">
        <h1 class="text-3xl font-medium mb-6 p-3 text-gray-600">Timothée</h1>
        <ul class="space-y-4">
            <li v-for="item in navItems" :key="item.name">
                <router-link 
                    :to="item.path" 
                    class="block text-lg text-gray-600 hover:bg-blue-100 hover:text-[#7c94d5] transition-colors p-3 rounded-lg"
                >
                    <i :class="item.icon" class="mr-2"></i>
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavigationComponent",
    data() {
        return {
            navItems: [
                { name: "Dashboard", path: "/dashboard", icon: "fi fi-sr-house-window" },
                { name: "Taches", path: "/tasks", icon: "fi fi-sr-checkbox" },
                { name: "Emploi du temps", path: "/schedule", icon: "fi fi-sr-memo-pad" },
                { name: "Cartes", path: "/cards", icon: "fi fi-sr-wallet" },
                { name: "Statistiques", path: "/statistics", icon: "fi fi-br-stats" }
            ],
        };
    },
};
</script>

<style scoped>
/* Ajout d'un style actif pour les éléments sélectionnés */
.router-link-active {
    background-color: #bfdbfe; /* Couleur de fond pour l'élément actif */
    color: #7c94d5; /* Couleur du texte pour l'élément actif */
}
</style>