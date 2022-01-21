<script setup>
import { useStore } from "@/stores";
import "@/assets/css/main.css";

useMeta({
  title: "Frontend Mentor | Interactive Comments Section",
});

const store = useStore();
</script>

<template>
  <div class="grid gap-6 px-5 py-10">
    <div v-for="(comment, index) in store.comments" :key="index">
      <Comment :comment="comment" />
    </div>
    <AddComment :currentUser="store.currentUser" />
  </div>
</template>
