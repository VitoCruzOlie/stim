<script setup lang="ts">
//Libraries Imports
import { PhBookmark } from "@phosphor-icons/vue";

//Store imports
import {useLibraryListStore} from "@/stores/libraryListSlice";

</script>
<template>
  <div class="gap-1 p-1 flex flx-row bg-secondary-800 rounded-lg">
    <div class="gap-2 px-0.5 py-1">
      <PhBookmark class="text-white" />
    </div>
    <div>
      <span class="text-white text-base font-bold">Libraries</span>
      <ul class="py-1 flex flex-col text-xs text-white ">
        <li v-for="game in useLibraryListStore().$state.libraryList ">
            {{ game.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
