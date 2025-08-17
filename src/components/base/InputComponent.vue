<script setup lang="ts">

const props = defineProps<
  {
    label: string;
    value: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
  }
>()

const emit = defineEmits(['update:value'],)
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:value', target.value)
}
</script>

<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.label }}</label>
    <input @input="onInput" :value="props.value" :type="props.type" :placeholder="props.placeholder"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :required="props.required" />
  </div>
</template>
