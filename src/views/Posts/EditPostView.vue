<template>
  <div class="container inner">
    <h2>Edit Post</h2>
    <EditPostForm />
  </div>
</template>

<script setup lang="ts">
import EditPostForm from '@/components/Forms/EditPostForm.vue'
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
