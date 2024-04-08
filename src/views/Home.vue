<script setup lang="ts">
//Library imports

//Component imports
import ActionGameSection from "@/components/ActionGameSection.vue";
import IndieGameSection from "@/components/IndieGameSection.vue";
import RpgGameSection from "@/components/RpgGameSection.vue";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
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
    </div>
    <SideBar />
    
    <div class="flex flex-row relative justify-center">
      <div
        class="flex w-full justify-center  pt-16 max-h-screen items-center"
      >
        <div class="flex flex-col items-center justify-center w-full gap-4">
          <ActionGameSection />
          <IndieGameSection />
          <RpgGameSection/>
        </div>
      </div>
    </div>
  </main>
</template>
