<script setup lang="ts">
//Libraries Imports
import { PhHeart } from "@phosphor-icons/vue";

//Store imports
import { useWishListGameStore } from "@/stores/wishListSlice";
</script>
<template>
  <div class="gap-1 p-1 flex flx-row bg-secondary-800 rounded-lg">
    <div class="gap-2 px-0.5 py-1">
      <PhHeart class="text-white" />
    </div>
    <div>
      <span class="text-white text-base font-bold">Favorites</span>
      <ul class="py-1 flex flex-col text-xs text-secondary-950">
        <li 
          v-for="game in useWishListGameStore().$state.wishListGames"
         class="text-white">{{ game.name }}</li>
      </ul>
    </div>
  </div>
</template>
