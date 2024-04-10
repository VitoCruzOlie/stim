<script setup lang="ts">
defineProps({
  label: String,
});

</script>
<template>
  <input
    :placeholder="label"
    class="bg-transparent focus:outline-none border focus:border-secondary-700 border-gray-300 rounded-md py-2 px-4 block w-full"
  />
</template>
