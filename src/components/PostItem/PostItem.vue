<template>
  <div class="post">
    <div class="main__info">
      <h3>{{ post.title }}</h3>
      <p>{{ post.text }}</p>
    </div>
    <div class="sub__info">
      <div>
        <span>{{ post.createdAt.slice(0, 10).split('-').join(' ') }}</span>
        <span><EyeIcon />{{ post.views }}</span>
      </div>
      <RouterLink
        :to="post._id"
        class="link"
        >Learn More</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPost } from '@/types/post'
import EyeIcon from '@/components/icons/EyeIcon.vue'
defineProps<{
  post: IPost
}>()
</script>

<style lang="scss" scoped>
.post {
  background: rgb(19, 19, 19);
  color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.main__info {
  h3 {
    margin-bottom: 15px;
  }
}
.sub__info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    opacity: 0.6;
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  div {
    display: flex;
    gap: 30px;
    span {
      opacity: 0.6;

      &:last-child {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
}
</style>
