<script setup lang="ts">
//Component imports
import GameCard from "@/components/GameCard.vue";

//Hook imports
import { useActionGames } from "@/hooks/queries/useActionGames";

const games = useActionGames();
</script>
<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 bg-secondary-950 gap-2 p-2 rounded-lg"
  >

    <GameCard
      v-for="game in games.data.value?.results"
      :key="game.id"
      :game-id="game.id"
      :game-title="game.name"
      :game-image="game.background_image"
      :gamePlatforms="game.platforms"
      :gameScore="game.rating"
      :metacriticScore="game.metacritic"
    />
  </div>
</template>
