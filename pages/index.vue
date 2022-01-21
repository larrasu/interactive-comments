<script setup>
import { useStore } from "@/stores";
import "@/assets/css/main.css";
import AddComment from "~~/components/AddComment.vue";

useMeta({
  title: "Frontend Mentor | Interactive Comments Section",
});

const store = useStore();
</script>

<template>
  <div class="grid gap-6 px-5 py-10">
    <AddComment :currentUser="store.currentUser" />
  </div>
</template>
