<script>
export default {
  props: ["currentUser"],
};
</script>

<template>
  <div class="bg-white px-5 py-4">
    <textarea class="w-full" placeholder="Add a comment..."></textarea>
    <img :src="currentUser.image.webp" :alt="currentUser.username" />
  </div>
</template>
