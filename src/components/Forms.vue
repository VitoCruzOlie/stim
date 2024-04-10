<script setup lang="ts">
import FormInput from "./FormInput.vue";
</script>
<template>
  <form class="p-10 gap-2 flex flex-col rounded-lg bg-white">
    <div class="flex items-start justify-start bg-blue-700 pl-2">
      <h2 class="text-lg text-black font-bold">Buy a game</h2>
      <p></p>
    </div>

    <div class="w-full justify-center items-center flex flex-col gap-2">
      <FormInput />
      <FormInput label="R$50,00"/>
      <FormInput label="username@gmail.com" />
      <button type="submit">Submit</button>
    </div>
  </form>
</template>
