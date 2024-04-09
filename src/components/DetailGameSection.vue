<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  gameId: number | undefined;
  gameTitle: string | undefined;
  gameImage: string | undefined;
  shortScreenshots: {
    id: number;
    image: string;
  }[] | undefined;

}>();
</script>
<template>
  <div class="rounded-lg max-w-7xl bg-red-600 p-4">
    <div class="w-full text-white">
      <h1 class="font-bold text-xl">{{ gameTitle }}</h1>
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
    </div>
  </div>
</template>
