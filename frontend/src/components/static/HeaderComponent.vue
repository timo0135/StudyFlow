<template>
    <header class="flex justify-between items-center p-8 bg-white-500 text-gray-800 rounded-tl-2xl">
        <div class="flex items-center ml-4">
            <h1 class="text-3xl font-medium text-gray-600">Dashboard</h1>
        </div>
        <div class="flex items-center gap-6">
            <i class="text-gray-600 text-2xl mr-4 fi fi-sr-settings"></i>
            <img class="w-13 h-13 rounded-full object-cover" :src="profilePicture" alt="Profile Picture" />
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            profilePicture: "path/to/profile-picture.jpg",
        };
    }
};
</script>

<style scoped>
</style>
