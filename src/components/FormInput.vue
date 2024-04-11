<script setup lang="ts">
const props = defineProps({
  label: String,
  disable: Boolean,
  value: String,
});

</script>
<template>
  <input
    :value="props.value"
    :placeholder="label"
    :disabled="disable"
    class="bg-transparent focus:outline-none border focus:border-secondary-700 border-gray-300 rounded-md py-2 px-4 block w-full"
  />
</template>
