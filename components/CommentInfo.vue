<script>
export default {
  props: ["image", "username"],
};
</script>

<template>
  <div class="flex items-center gap-x-3">
    <img :src="image" :alt="username" class="h-8" />
  </div>
</template>
