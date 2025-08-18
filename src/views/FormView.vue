<script setup lang="ts">
import InputComponent from '@/components/base/InputComponent.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import { ref } from 'vue'

type FormKeys = 'name' | 'email' | 'password'
const formData = ref<Record<FormKeys, string>>({
  name: '',
  email: '',
  password: '',
})
const inputs: { label: string; key: FormKeys; type: string; placeholder?: string; required?: boolean; }[] = [
  { label: 'Name', key: 'name', type: 'text', required: true },
  { label: 'Email', key: 'email', placeholder: 'example@example.com', type: 'email', required: true },
  { label: 'Password', key: 'password', type: 'password' },
]
</script>

<template>
  <form class="flex flex-col gap-3 mt-10 justify-center w-100">
    <InputComponent v-for="(input, i) in inputs" :key="i" :label="input.label" v-model:value="formData[input.key]"
      :placeholder="input.placeholder" :type="input.type" :required="input.required" />
    <ButtonComponent :action="() => console.log('Format error:', JSON.parse(JSON.stringify(formData)))" name="Submit" />
  </form>
</template>
