<script setup lang="ts"></script>
<template>
  <form class="p-20 gap-2 flex flex-col rounded-lg bg-white ">

    <div class="flex items-start justify-start bg-blue-700 pl-2">
      <h2 class="text-lg text-black font-bold">Buy a game</h2>
      <p></p>
    </div>

    <div class="w-full bg-red-700 justify-center items-center flex flex-col">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </div>
  </form>
</template>
