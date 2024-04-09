<script setup lang="ts">
//Libraries Imports
import { PhHeart } from "@phosphor-icons/vue";
</script>
<template>
  <div class="gap-1 p-1 flex flx-row bg-secondary-800 rounded-lg">
    <div class="gap-2 px-0.5 py-1">
      <PhHeart class="text-white" />
    </div>
    <div>
      <span class="text-white text-base font-bold">Favorites</span>
      <ul class="py-1 flex flex-col text-xs text-secondary-950">
        <li class="text-white">Game Name</li>
        <li class="text-white">Game Name</li>
        <li class="text-white">Game Name</li>
        <li class="text-white">Game Name</li>
        <li class="text-white">Game Name</li>
        
      </ul>
    </div>
  </div>
</template>
