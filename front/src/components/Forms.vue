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
import { useRouter } from "vue-router";
import {
  useForm,
  createErrorHandler,
  createSubmitHandler,
} from "@vue-hooks-form/core";
import { z } from "zod";

import { useZodResolver } from "@vue-hooks-form/zod";

const props = defineProps<{
  gameId: number;
}>();

const schema = z.object({
  email: z.string().email({
    message: "O email informado não é válido",
  }),
  price: z.coerce.number().min(1, {
    message: "Defina o preço do jogo",
  }),
});

type Schema = z.infer<typeof schema>;

const tmpGameId = ref(props.gameId.toString());

const game = useSearchGameById(tmpGameId);

const form = useForm<Schema>({
  resolver: useZodResolver(schema),
});



const onSubmit = createSubmitHandler((data) => {
  if (game.data.value) useLibraryListStore().addGame(game.data.value);
  const router = useRouter();
  router.push("/");
});
const onError = createErrorHandler((errors) => {
  console.log(errors);
});
</script>
<template>
  <form
    @submit.prevent="form.handleSubmit(onSubmit, onError)()"
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
        <FormInput
          :="form.register('price')"
          input-type="number"
          label="R$50,00"
        />
        <p class="text-red-600 font-medium text-sm">
          {{ form.formState.errors.price?.message }}
        </p>
      </div>

      <div class="w-full flex flex-col gap-1 pb-4">
        <span>Email</span>
        <FormInput
          :="form.register('email')"
          input-type="email"
          label="username@gmail.com"
          
        />
        <p class="text-red-600 font-medium text-sm">
          {{ form.formState.errors.email?.message }}
        </p>
      </div>

      <Button
        label="Buy game"
        :variants="{ color: 'primary' }"
      />
    </div>
  </form>
</template>
