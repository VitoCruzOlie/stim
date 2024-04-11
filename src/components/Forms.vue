<script setup lang="ts">
//Component imports
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";

//Hook imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";

//Store imports
import { useLibraryListStore } from "@/stores/libraryListSlice";

//Libaries imports
import { defineProps, ref } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps<{
  gameId: number;
}>();

const tmpGameId = ref(props.gameId.toString());

const game = useSearchGameById(tmpGameId);

function addToLibrary() {
  if (game.data.value) useLibraryListStore().addGame(game.data.value);
}

function handleSubmit(event: Event) {
  event.preventDefault();
  const router = useRouter();
  router.push('/');
}
</script>
<template>
  <form
    :onsubmit="handleSubmit"
    class="py-2 px-10 gap-2 flex flex-col rounded-lg bg-white"
  >
    <div class="flex items-start justify-start">
      <h2 class="text-lg text-black font-bold">Buy a game</h2>
      <p></p>
    </div>

    <div
      class="w-full justify-center items-center flex flex-col gap-2 text-neutral-600 text-sm"
    >
      <div class="w-full flex flex-col gap-1">
        <span>Game name</span>
        <FormInput :disable="true" :value="game.data?.value?.name" />
      </div>
      <div class="w-full flex flex-col gap-1">
        <span>Price</span>
        <FormInput label="R$50,00" />
      </div>

      <div class="w-full flex flex-col gap-1 pb-4">
        <span>Email</span>
        <FormInput label="username@gmail.com" />
      </div>

      <Button
        label="Buy game"
        @click="addToLibrary"
        :variants="{ color: 'primary' }"
      />
    </div>
  </form>
</template>
