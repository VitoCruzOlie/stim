<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";

import Button from "@/components/Button.vue";
import Forms from "@/components/Forms.vue";


</script>
<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <Button :variants="{ color: 'primary' }" label="Buy the Game" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent class="absolute left-0 top-0 w-full h-svh flex justify-center items-center z-10">
       <Forms/>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<!--
<DialogDescription />
<DialogClose />
</DialogContent>
-->
