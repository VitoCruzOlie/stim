<script setup lang="ts">
//Libraries Imports
import { PhList } from "@phosphor-icons/vue";


//Components Imports
import UserSectionComponent from "@/components/UserSectionComponent.vue";
import LikedGameSection from "@/components/LikedGameSection.vue";
import LibraryGameSection from "@/components/LibraryGameSection.vue";

//Hook imports
import {useSideBarStore} from "@/stores/sideBarSlice";

const sideBarStore = useSideBarStore();
</script>

<template>
  <div
    class="w-80 h-full min-h-screen bg-secondary-200 p-2 gap-4 flex flex-col absolute left-0 top-0 z-10"
  >

    <UserSectionComponent />

    <div class="absolute -right-8 rounded-r-lg pl-1 bg-secondary-200">
      <button class="p-2">
        <PhList class="text-base text-black"/>
    </button>
    </div>
    
    <div class="flex flex-col gap-2">
      <LikedGameSection />
      <LibraryGameSection />
    </div>
  </div>
</template>
