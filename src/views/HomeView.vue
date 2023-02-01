<template>
  <div class="home">
    <div class="container">
      <PostsList :posts="mockPosts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostsList from '@/components/PostsList/PostsList.vue'
import { mockPosts } from '@/utils/constants'
</script>

<style lang="scss" scoped>
.home {
  margin-top: 50px;
}
</style>
