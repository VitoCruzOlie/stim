<script setup lang="ts">
//Library Imports
import { defineProps } from "vue";
import { PhHeart, } from "@phosphor-icons/vue";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  slots:{
    button:'rounded-lg gap-2 px-5 py-1.5',
    text:' font-bold text-base'
  },
  variants:{
    color:{
      primary:{
        button:'bg-secondary-400',
        text:'text-white'
      },
      outline:{
        button:'border border-secondary-700 bg-white',
        text:'text-secondary-700'
      }
    }
  },
})

defineProps<{
  label: string;
  variants?: VariantProps<typeof buttonStyles>;
}>();

</script>
<template>
  <button
    :class="buttonStyles({
      color: variants?.color || 'primary'
    }).button()"
  >
    <label :class="buttonStyles({
      color: variants?.color || 'primary'
    }).text()">{{label}}</label>
  </button>
</template>