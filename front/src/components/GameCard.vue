<script setup lang="ts">
//Libraries imports

//Components imports

//Types imports
import type { Platform } from "@/schemas/platform";
import { PhStar } from "@phosphor-icons/vue";

defineProps<{
  gameId:number;
  gameTitle: string;
  gameImage: string;
  gameScore: number;
  metacriticScore: number;
  gamePlatforms: {
    platform: Platform;
  }[];
}>();
</script>

<template>
  <div
    class="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5"
  >
    <div class="w-80 xl:w-72 shadow-2xl h-64 overflow-hidden rounded-lg relative">
      <div class="w-full h-full overflow-hidden relative">
        
        <!--Navigate to the game detail page passing the gameId -->
        <RouterLink :to="`/game/${gameId}`">
        <img
          class="object-cover w-full h-full"
          :src="gameImage"
          alt="Game Image"
        />
      </RouterLink>
      </div>
      

      <div
        class="px-1 py-0.5 absolute bottom-0 left-0 w-full z-[1] bg-secondary-900/70 backdrop-blur-md"
      >
        <div class="w-full flex flex-col items-start text-white">
          <h3 class="line-clamp-1  font-bold text-base">
            {{ gameTitle }}
          </h3>
          <p class="font-light text-sm line-clamp-1">

            <!--map to render the platforms-->
            {{
              gamePlatforms.map((platform) => platform.platform.name).join(", ")
            }}
          </p>
        </div>

        <div class="w-full flex">
          <div class="w-full gap-1.5 flex items-center justify-start">
            <PhStar class="font-medium text-xl text-yellow-400" weight="fill" />
            <div class="w-full flex items-center justify-between">
              <span class="font-extrabold text-white text-xl">
                {{ gameScore }}</span>
                <div class=" px-3 py-2 bg-emerald-700 rounded-lg">
                  <span class="text-white text-base font-bold">
                    {{ metacriticScore }}
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
