<script setup lang="ts">
//Libraries Imports
import { PhList } from "@phosphor-icons/vue";
import { tv } from 'tailwind-variants';


//Components Imports
import UserSectionComponent from "@/components/UserSectionComponent.vue";
import LikedGameSection from "@/components/LikedGameSection.vue";
import LibraryGameSection from "@/components/LibraryGameSection.vue";

//Hook imports
import {useSideBarStore} from "@/stores/sideBarSlice";

const sideBarStore = useSideBarStore();

const sideBarOpen = tv({
  base:"h-full min-h-screen bg-secondary-200 p-2 gap-4 flex flex-col absolute left-0 top-0 z-10",
  variants:{
    open:{
      true:"w-80",
      false:"w-0"
    }
  }
})
</script>

<template>
  <div
    :class="sideBarOpen({
      open:sideBarStore.$state.isOpen
    })"
  >

    <UserSectionComponent />

    <div class="absolute -right-8 rounded-r-lg pl-1 bg-secondary-200">
      <button class="p-2" @click="sideBarStore.toggle()">
        <PhList class="text-base text-black"/>
    </button>
    </div>
    
    <div class="flex flex-col gap-2">
      <LikedGameSection />
      <LibraryGameSection />
    </div>
  </div>
</template>
