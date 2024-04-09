<script setup lang="ts">
//Library Imports
import { ref } from "vue";
import { useRoute } from "vue-router";

//Component Imports
import NavBar from "@/components/NavBar.vue";
import DetailGameSection from "@/components/DetailGameSection.vue";
import DetailCardGame from "@/components/DetailCardGame.vue";
import SideBar from "@/components/SideBar.vue";

//Hook Imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";

const route = useRoute();
const id = ref(route.params.id);

const game = useSearchGameById(id);
</script>
<template>
  <main class="min-h-svh max-h-svh overflow-hidden h-fit relative bg-slate-900">
    <img
      class="absolute left-0 top-0 w-full opacity-30 min-h-svh"
      src="/backgroundImg.jpg"
      alt=""
    />
    <div
      class="w-full flex items-center justify-center absolute left-0 top-0 z-10"
    >
      <NavBar />
      <SideBar/>
      
    </div>
    <div class="flex items-center justify-center w-full">
      <DetailGameSection
        :key="game.data.value?.id"
        :gameId="game.data.value?.id"
        :game-image="game.data.value?.background_image"
        :game-title="game.data.value?.name"
        :short-screenshots="game.data.value?.short_screenshots"
      />
    </div>
  </main>
</template>
