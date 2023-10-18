<template>
  <NuxtLayout name="default">
    <NuxtLoadingIndicator color="var(--secondary)" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

h1 {
  color: var(--primary);
}

code {
  background: var(--secondary);
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: var(--light);
}
</style>

<script setup lang="ts">
const route = useRoute()

const { status, data } = useSession();
console.log(data);
</script>