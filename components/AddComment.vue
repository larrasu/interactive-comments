<script>
export default {
  props: ["currentUser"],
};
</script>

<template>
  <div class="bg-white px-5 py-4">
    <div class="flex items-center flex-wrap gap-y-4">
      <textarea class="basis-full" placeholder="Add a comment..."></textarea>
      <img
        :src="currentUser.image.webp"
        :alt="currentUser.username"
        class="h-8"
      />
      <button class="btn-primary ml-auto">SEND</button>
    </div>
  </div>
</template>
