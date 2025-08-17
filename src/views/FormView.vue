<script setup lang="ts">
import InputComponent from '@/components/base/InputComponent.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  password: '',
})
const displayFormData = () => { console.log(formData.value) }

</script>


<template>
  <div class="flex flex-col gap-3 mt-10 justify-center w-100">
    <InputComponent label="Name" v-model:value="formData.name" type="text" />
    <InputComponent label="Email" v-model:value="formData.email" type="email" placeholder="example@example.com"/>
    <InputComponent label="Password" v-model:value="formData.password" type="password" />
    <ButtonComponent :action="displayFormData" name="Submit" />
  </div>

</template>
