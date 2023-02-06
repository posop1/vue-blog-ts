<template>
  <Loader v-if="status === 'loading'" />
  <Error v-else-if="status === 'error'" />
  <div
    class="single__post"
    v-else
  >
    <div class="container inner">
      <div class="main__info">
        <PostInfo :post="post" />
      </div>
      <div class="comments__list">
        <Comments />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api/instance'
import PostInfo from '@/components/SinglePost/PostInfo.vue'
import Comments from '@/components/SinglePost/Comments.vue'
import { IPost } from '@/types/post'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'

const router = useRoute()

const post = ref<IPost>()
const status = ref('loading')

onMounted(async () => {
  try {
    const { data } = await api.get<IPost>(`/posts/${router.params.id}`)

    post.value = data
    status.value = 'completed'
  } catch (error) {
    status.value = 'error'
  }
})
</script>

<style lang="scss" scoped>
.single__post {
  margin-top: 50px;
}
.inner {
  display: flex;
  flex: 1;
}
</style>
