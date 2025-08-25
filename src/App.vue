<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/form">form</RouterLink>
      </nav>
    </div>
  </header>

  <main class="flex justify-center items-center">
    <RouterView />
  </main>

</template>
