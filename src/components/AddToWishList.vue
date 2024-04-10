<script setup lang="ts">
import Button from "@/components/Button.vue";
import { defineProps, ref } from "vue";

//Hook imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";

//Store imports
import { useWishListGameStore } from "@/stores/wishListSlice";

const props = defineProps<{
  gameId: number;
}>();

const tmpGameId = ref(props.gameId.toString());

const game = useSearchGameById(tmpGameId);

function addToWishList() {
  if (game.data.value) useWishListGameStore().addGame(game.data.value);
}
</script>
<template>
  <Button :variants="{ color: 'outline' }" @click="addToWishList" label="Add to wishlist" />
</template>
