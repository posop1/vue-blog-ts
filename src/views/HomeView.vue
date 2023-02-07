<template>
  <Loader v-if="store.getters.getStatus === 'loading'" />
  <Error v-else-if="store.getters.getStatus === 'error'" />
  <div
    class="home"
    v-else
  >
    <div class="container">
      <PostsList :posts="store.getters.getPosts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostsList from '@/components/Posts/PostsList/PostsList.vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import { key } from '@/store/store'
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'

const store = useStore(key)

onMounted(() => {
  store.dispatch('fetchPosts')
})
</script>
