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
        <div v-if="user?._id === post?.author">
          <button class="user__btn">Edit</button>
          <button
            class="user__btn"
            @click="removePostHandler"
          >
            Delete
          </button>
        </div>
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
//TODO сделать редактирование поста

import api from '@/api/instance'
import PostInfo from '@/components/SinglePost/PostInfo.vue'
import Comments from '@/components/SinglePost/Comments.vue'
import { IComment, IPost } from '@/types/post'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import { key } from '@/store/store'
import { useStore } from 'vuex'
import { IUser } from '@/types/user'

const route = useRoute()
const router = useRouter()
const store = useStore(key)

const post = ref<IPost>()
const comments = ref<IComment[]>()
const status = ref('loading')
const message = ref()
const user: IUser = store.getters.getUser

const fetchPosts = async () => {
  try {
    const { data } = await api.get<IPost>(`/posts/${route.params.id}`)

    post.value = data
    status.value = 'completed'
  } catch (error) {
    status.value = 'error'
  }
}
const fetchComments = async () => {
  try {
    const { data } = await api.get<IComment[]>(`/posts/${route.params.id}/comments`)

    comments.value = data
    status.value = 'completed'
  } catch (error) {
    status.value = 'error'
  }
}
const createComment = async (myComment: string) => {
  try {
    const { data } = await api.post(`/comments/${route.params.id}`, {
      postId: route.params.id,
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

const removePostHandler = () => {
  try {
    store.dispatch('removePost', route.params.id)
    router.push('/')
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

.user__btn {
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  background: rgb(19, 19, 19);
  padding: 5px 8px;
  color: white;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  margin-top: 15px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    opacity: 0.6;
  }
}

@media (max-width: 1000px) {
  .inner {
    gap: 50px;
    flex-direction: column;
  }
}
</style>
