<template>
  <form
    @submit.prevent
    class="create__form"
  >
    <div class="inp__container">
      <label>Post title:</label>
      <input
        type="text"
        placeholder="Title..."
        class="title"
        v-model="title"
      />
    </div>

    <div class="inp__container">
      <label>Post text:</label>
      <textarea
        placeholder="Post text..."
        class="text"
        v-model="text"
      />
    </div>

    <div class="btns">
      <button @click="submitHandler">Edit</button>
      <button @click="clearHandler">Clear</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import api from '@/api/instance'
import { key } from '@/store/store'
import { IPost } from '@/types/post'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore(key)
const router = useRouter()
const route = useRoute()

const title = ref('')
const text = ref('')

const fetchPost = async () => {
  const { data } = await api.get<IPost>(`/posts/${route.params.id}`)

  title.value = data.title
  text.value = data.text
}

const submitHandler = () => {
  try {
    const updatedPost = new FormData()

    updatedPost.append('title', title.value)
    updatedPost.append('text', text.value)
    updatedPost.append('id', route.params.id.toString())

    store.dispatch('updatePost', updatedPost)

    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
const clearHandler = () => {
  title.value = ''
  text.value = ''
}

onMounted(() => {
  fetchPost()
})
</script>

<style lang="scss" scoped>
.create__form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 25px;
}
.inp__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;

  label {
    font-size: 18px;
  }

  input {
    padding: 5px 15px;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 6px;
  }
  textarea {
    padding: 5px 15px;
    max-width: 600px;
    width: 100%;
    min-height: 200px;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 6px;
  }
}
.title {
  font-family: 'Roboto', sans-serif;
}
.text {
  font-family: 'Roboto', sans-serif;
}

.btns {
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    border: none;
    background: rgb(19, 19, 19);
    color: white;
    padding: 7px 15px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
      color: black;
      background: white;
    }
  }
}
</style>
