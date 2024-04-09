<script setup lang="ts">
//Libraries Imports
import { PhList } from "@phosphor-icons/vue";
import { tv } from "tailwind-variants";
import { useAutoAnimate } from "@formkit/auto-animate/vue";

//Components Imports
import UserSectionComponent from "@/components/UserSectionComponent.vue";
import LikedGameSection from "@/components/LikedGameSection.vue";
import LibraryGameSection from "@/components/LibraryGameSection.vue";

//Hook imports
import { useSideBarStore } from "@/stores/sideBarSlice";

const sideBarStore = useSideBarStore();

const sideBarOpen = tv({
  slots: {
    base: "h-full min-h-screen bg-secondary-200 p-2 gap-4 flex flex-col absolute left-0 top-0 z-10 transition-all duration-300 ease-in-out",
    section: "flex flex-col gap-2",
  },
  variants: {
    open: {
      true: { base: "w-80", section: "flex flex-col gap-2" },
      false: { base: "w-0", section: "hidden" },
    },
  },
});
</script>

<template>
  <div
    :class="
      sideBarOpen({
        open: sideBarStore.$state.isOpen,
      }).base()
    "
  >
    <UserSectionComponent />

    <div
      class="absolute -right-8 rounded-r-lg pl-1 bg-secondary-200 v-auto-animate"
    >
      <button class="p-2" @click="sideBarStore.toggle()">
        <PhList class="text-base text-black" />
      </button>
    </div>

    <div
      :class="
        sideBarOpen({
          open: sideBarStore.$state.isOpen,
        }).section()
      "
    >
      <LikedGameSection />
      <LibraryGameSection />
    </div>
  </div>
</template>
