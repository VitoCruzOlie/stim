<script setup lang="ts">
//Libraries imports
import { defineProps } from "vue";
import { PhStar } from "@phosphor-icons/vue";

//Components imports
import AddToWishList from "@/components/AddToWishList.vue";
import Dialog from "./Dialog.vue";

defineProps<{
  gameId: number;
  gameTitle?: string;
  gameImage?: string;
  gameRating?: number;
  gameDescription?: string;
  shortScreenshots?: {
    id: number;
    image: string;
  }[];
}>();
</script>
<template>
  <div class="rounded-lg max-w-7xl bg-secondary-800 p-4">
    <div class="w-full text-white">
      <h1 class="font-bold text-2xl">{{ gameTitle }}</h1>
      <div class="flex flex-row w-full gap-2">
        <div class="w-full rounded-lg">
          <img class="rounded-lg" :src="gameImage" />
        </div>

        <div class="flex flex-col w-32">
          <div
            v-for="(screenshot, index) in shortScreenshots"
            :key="index"
            class="w-32 h-32"
          >
            <img
              class="rounded-lg"
              :src="screenshot.image"
              :alt="'game screenshot ' + index"
            />
          </div>
        </div>
      </div>
      <div class="flex  items-center pt-2 pb-3 gap-2">
        <div class="w-full flex flex-row gap-2">
          <PhStar weight="fill" class="text-2xl text-yellow-400" />
          <p class="text-white text-xl font-bold">{{ gameRating }}</p>
        </div>

        <AddToWishList :gameId="gameId" />
        <Dialog :gameId="gameId" />
      </div>
      <div class="w-full text-white flex flex-col gap-2 border-t border-t-neutral-400">
        <p class="text-white font-bold text-2xl pt-2">Game Description</p>
        <p>
          {{ gameDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
