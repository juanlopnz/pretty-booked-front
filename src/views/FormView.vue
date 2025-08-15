<script setup lang="ts">
import InputComponent from '@/components/base/InputComponent.vue'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  password: '',
})
const displayFormData = () => { console.log(formData.value)}

const inputs = [
  { label: 'Name', value: formData.value.name, placeholder:'', type: 'text'},
  { label: 'Email', value: formData.value.email, placeholder:'', type: 'email'},
  { label: 'Password', value: formData.value.password, placeholder:'', type: 'password'},
]

</script>


<template>
  <div>
    <InputComponent v-for="(input, i) in inputs" :key="i" :label="input.label" v-model:value="input.value" :placeholder="input.placeholder" :type="input.type" />
    <button @click="displayFormData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>
  </div>
</template>
