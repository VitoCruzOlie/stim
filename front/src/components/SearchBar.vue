<script setup lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { ref } from "vue";
import { useAutoAnimate } from "@formkit/auto-animate/vue";

import SearchGameCard from "@/components/SearchGameCard.vue";

import { useSearchGames } from "@/hooks/queries/useSearchGames";

//Search bar logic
const search = ref("");

//Search bar input
const searchInput = ref("");

//Show the search results
const showResults = ref(false);
const [parent] = useAutoAnimate();

//Get the games from the search
const games = useSearchGames(search);

//Handle the search input
const handleInput = () => {
  showResults.value = searchInput.value.trim() !== "";
  handleSearch();
};


//Debounced text in search input
function debouncedText() {
  let timer: NodeJS.Timeout;
  return function (callback: () => void, ms: number) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}

const debouncedSearch = debouncedText();


//Handle the search
function handleSearch() {
  debouncedSearch(() => {
    search.value = searchInput.value;
  }, 750);
}
</script>

<template>
  <div
    class="border-2 w-full max-w-[512px] flex flex-col pl-3 pr-3 rounded-lg bg-white overflow-hidden"
  >
    <div class="flex items-center gap-3">
      <PhMagnifyingGlass class="text-base text-black" />
      <input
        v-model="searchInput"
        @input="handleInput"
        class="w-full h-11 text-start text-black placeholder-black outline-none bg-transparent"
        type="text"
        placeholder="Type the game name..."
      />
    </div>
    <div class="text-start overflow-hidden">
      <div
        class="w-full p-0 text-black bg-white border-t-2 border-neutral-200"
        v-show="showResults"
        ref="parent"
      >
        <ul v-auto-animate>
          <SearchGameCard
            v-for="game in games.data.value?.results"
            :game-id="game.id"
            :game-title="game.name"
            :game-image="game.background_image"
            :game-score="game.rating"
            :game-platforms="game.platforms"
            
          />
        </ul>
      </div>
    </div>
  </div>
</template>
