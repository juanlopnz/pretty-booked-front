<script setup lang="ts">

const props = defineProps<
  {
    action: () => void;
    name: string;
  }
>()

</script>

<template>
  <div>
    <button @click="props.action" class="text-white bg-pink-600 rounded-full w-full h-10   hover:bg-pink-700 transition duration-50">{{props.name}}</button>
  </div>
</template>
