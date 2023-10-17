<template>
  <NuxtLayout name="default">
    <router-view />
  </NuxtLayout>
</template>

<style>
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