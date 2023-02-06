<template>
  <h2 class="post__title">{{ post?.title }}</h2>
  <div class="post__info">
    <span>{{ post?.username }}</span>
    <span>{{ formatDate(post?.createdAt) }}</span>
    <span><EyeIcon />{{ post?.views }}</span>
  </div>
  <p class="post__text">{{ post?.text }}</p>
</template>

<script setup lang="ts">
import { IPost } from '@/types/post'
import { formatDate } from '@/utils/formatDate'
import EyeIcon from '@/components/icons/EyeIcon.vue'

defineProps<{ post?: IPost }>()
</script>

<style lang="scss" scoped>
.post__info {
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 30px;

  span {
    font-size: 16px;
    opacity: 0.6;
    display: flex;
    align-items: center;
    gap: 5px;
  }
}

.post__text {
  font-size: 18px;
  max-width: 800px;
}
</style>
