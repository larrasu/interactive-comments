<script>
export default {
  props: ["image", "username", "createdAt"],
};
</script>

<script setup>
import { useTimeAgo } from "@vueuse/core";
</script>

<template>
  <div class="flex items-center gap-x-3">
    <img :src="image" :alt="username" class="h-8" />
    <p>{{ username }}</p>
    <p>{{ useTimeAgo(new Date(createdAt)) }}</p>
  </div>
</template>
