<script setup lang="ts">
//Library Imports
import { ref } from "vue";
import { useRoute } from "vue-router";

//Component Imports
import NavBar from "@/components/NavBar.vue";
import DetailGameSection from "@/components/DetailGameSection.vue";
import SideBar from "@/components/SideBar.vue";

//Hook Imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";

const route = useRoute();
const id = ref(route.params.id);

const game = useSearchGameById(id);
</script>
<template>
  <main
    class="min-h-svh max-h-svh pb-12 overflow-hidden h-fit relative bg-slate-900 flex flex-col"
  >
    <div
      class="w-full flex items-center justify-center sticky left-0 top-0 z-20"
    >
      <NavBar />
      <SideBar />
    </div>
    <div class="flex flex-col items-center justify-start w-full overflow-y-scroll z-10 h-full min-h-svh max-h-svh absolute top-0 left-0 pb-12">
      <div
        class="flex flex-col justify-start items-center w-full pt-20"
      >
        <DetailGameSection
          :key="game.data.value?.id"
          :gameId="game.data.value?.id"
          :game-image="game.data.value?.background_image"
          :game-title="game.data.value?.name"
          :game-rating="game.data.value?.rating"
          :game-platforms="game.data.value?.platforms"
          :short-screenshots="game.data.value?.short_screenshots"
          :game-description="game.data.value?.description_raw"
          :background_image_additional="game.data.value?.background_image_additional"
        />
      </div>
    </div>

    <img
      class="absolute left-0 top-0 w-full opacity-30 min-h-svh max-h-svh z-0"
      src="/backgroundImg.jpg"
      alt=""
    />
  </main>
</template>