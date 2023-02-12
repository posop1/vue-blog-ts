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
        <Comments
          :comments="comments"
          :post-id="post?._id"
          :message="message"
          @create-comment="createComment"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api/instance'
import PostInfo from '@/components/SinglePost/PostInfo.vue'
import Comments from '@/components/SinglePost/Comments.vue'
import { IComment, IPost } from '@/types/post'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import { key } from '@/store/store'
import { useStore } from 'vuex'

const router = useRoute()
const store = useStore(key)

const post = ref<IPost>()
const comments = ref<IComment[]>()
const status = ref('loading')
const message = ref()

const fetchPosts = async () => {
  try {
    const { data } = await api.get<IPost>(`/posts/${router.params.id}`)

    post.value = data
    status.value = 'completed'
  } catch (error) {
    status.value = 'error'
  }
}
const fetchComments = async () => {
  try {
    const { data } = await api.get<IComment[]>(`/posts/${router.params.id}/comments`)

    comments.value = data
    status.value = 'completed'
  } catch (error) {
    status.value = 'error'
  }
}
const createComment = async (myComment: string) => {
  try {
    const { data } = await api.post(`/comments/${router.params.id}`, {
      postId: router.params.id,
      comment: myComment
    })
    if (store.getters.checkAuth) {
      comments.value?.push(data)
    } else {
      message.value = 'Where ur rights'
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  fetchPosts()
  fetchComments()
})
</script>

<style lang="scss" scoped>
.main__info {
  padding-right: 15px;
  width: 100%;
}
.comments__list {
  width: 60%;
}
.single__post {
  margin-top: 50px;
}
.inner {
  display: flex;
}

@media (max-width: 1000px) {
  .inner {
    gap: 50px;
    flex-direction: column;
  }
}
</style>
