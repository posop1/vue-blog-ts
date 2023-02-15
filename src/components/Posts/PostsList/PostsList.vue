<template>
  <div v-if="posts.length === 0">
    <h3>Posts not found</h3>
  </div>
  <div
    class="list"
    v-else
  >
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post._id"
    />
  </div>
</template>

<script setup lang="ts">
import { IPost } from '@/types/post'
import PostItem from '../PostItem/PostItem.vue'

defineProps<{
  posts: IPost[]
}>()
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
