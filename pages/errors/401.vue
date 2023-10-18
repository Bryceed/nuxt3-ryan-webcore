<template>
    <div class="error">
        <h1>401</h1>
        <p>Unauthorized</p>
        <code>{{ route.fullPath }}</code>
    </div>
</template>

<script setup>
const route = useRoute()
</script>

<style>
.error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 2rem;
    color: var(--primary);
}

.error h1 {
    font-size: 10rem;
    margin: 0;
}

.error p {
    margin: 0;
}
</style>