<script setup>
defineProps({
  comment: Object,
});
</script>

<template>
  <div class="bg-white px-5 py-4">
    <CommentInfo
      :image="comment.user.image.webp"
      :username="comment.user.username"
      :createdAt="comment.createdAt"
    />
  </div>
</template>
