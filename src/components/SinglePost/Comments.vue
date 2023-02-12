<template>
  <div class="comments">
    <h3>Comments</h3>
    <form
      @submit.prevent="createComment"
      class="form"
    >
      <input
        type="text"
        class="comment__inp"
        placeholder="Your comment..."
        v-model="myComment"
      />
      <button>Add</button>
    </form>
    <span
      class="message"
      v-if="message"
      >{{ message }}</span
    >
    <div
      class="list"
      v-else
    >
      <div
        class="item"
        v-for="comment in comments"
      >
        <div class="avatar">{{ comment.comment.slice(0, 2).toLocaleUpperCase() }}</div>
        <p class="comment">{{ comment.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IComment } from '@/types/post'
import { ref } from 'vue'

const emit = defineEmits(['createComment'])

const myComment = ref('')

const createComment = () => {
  emit('createComment', myComment.value)
}

defineProps<{ comments?: IComment[]; message?: string }>()
</script>

<style lang="scss" scoped>
.message {
  margin-top: 20px;
  align-self: center;
}
.form {
  display: flex;
  flex-direction: column;
  .comment__inp {
    margin-top: 20px;
    width: 100%;
    border: 1px solid gray;
    outline: none;
    background: none;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px 8px;
    margin-bottom: 10px;
  }
  button {
    border: none;
    background: none;
    outline: none;
    font-size: 14px;
    background: rgb(19, 19, 19);
    padding: 5px 8px;
    color: white;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
}
.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.list {
  margin-top: 20px;
}
.item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}
.avatar {
  opacity: 0.6;
  font-size: 14px;
  background: #000;
  color: white;
  padding: 5px 8px;
  border-radius: 10px;
}
</style>
