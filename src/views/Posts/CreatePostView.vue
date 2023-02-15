<template>
  <div class="container inner">
    <h2>Create Post</h2>
    <CreatePostForm />
  </div>
</template>

<script setup lang="ts">
import CreatePostForm from '@/components/Forms/CreatePostForm.vue'
</script>

<style lang="scss" scoped>
.inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}
</style>
