<script setup lang="ts">
useHead({ title: "Storefront" })
const config = useRuntimeConfig()
</script>

<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Terra Commerce</p>
      <h1>Storefront scaffold</h1>
      <p>Hybrid-rendered catalog, cart, checkout, customer account, and order tracking.</p>
      <p class="endpoint">Gateway: {{ config.public.apiBase }}</p>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.hero {
  width: min(48rem, 100%);
  padding: clamp(2rem, 8vw, 5rem);
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 1.5rem;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 8%);
}

.eyebrow {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  max-width: 12ch;
  margin: 0.5rem 0 1rem;
  font-size: clamp(2.5rem, 9vw, 5.5rem);
  line-height: 0.95;
}

.endpoint {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e4e4e7;
  overflow-wrap: anywhere;
}
</style>
