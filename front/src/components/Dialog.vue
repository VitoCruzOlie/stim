<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from "radix-vue";

const props = defineProps<{
  gameId: number;
}>();

import Button from "@/components/Button.vue";
import Forms from "@/components/Forms.vue";
</script>
<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <Button :variants="{ color: 'primary' }" label="Buy the Game" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        className="absolute top-0 left-0 w-full h-full bg-neutral-900/50 z-10 backdrop-blur-lg"
      />
      <DialogContent
        class="absolute left-0 top-0 w-full h-svh flex justify-center items-center z-10"
      >
        <Forms :gameId="props.gameId" />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
