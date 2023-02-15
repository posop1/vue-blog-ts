<template>
  <Loader v-if="status === 'loading'" />
  <Error v-else-if="status === 'error'" />
  <div v-else>
    <div class="container">
      <PostsList :posts="posts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api/instance'
import Error from '@/components/Error.vue'
import Loader from '@/components/Loader.vue'
import PostsList from '@/components/Posts/PostsList/PostsList.vue'
import { TStatus } from '@/store/modules/posts/types'
import { IPost } from '@/types/post'
import { onMounted, ref } from 'vue'

const posts = ref<IPost[]>([])
const status = ref<TStatus>('loading')

const fetchPosts = async () => {
  try {
    const { data } = await api.get('/posts/user/me')

    posts.value = data
    status.value = 'complete'
  } catch (error) {
    console.log(error)
    status.value = 'error'
  }
}
onMounted(() => {
  fetchPosts()
})
</script>

<style lang="scss" scoped></style>
