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
      <button @click="submitHandler">Create</button>
      <button @click="clearHandler">Clear</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { key } from '@/store/store'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore(key)
const router = useRouter()

const title = ref('')
const text = ref('')

const submitHandler = () => {
  try {
    const data = new FormData()

    data.append('title', title.value)
    data.append('text', text.value)

    store.dispatch('createPost', data)

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
  if (!store.getters.checkAuth) {
    router.push('/')
  }
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
