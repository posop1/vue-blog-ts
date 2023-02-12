<template>
  <form
    @submit.prevent="handleRegistration"
    class="form"
  >
    <h3 class="form__logo">Registration</h3>
    <input
      type="text"
      class="login__inp"
      placeholder="Login"
      v-model="username"
    />
    <div class="pass__wrap">
      <input
        :type="isVisiblePassword ? 'text' : 'password'"
        class="pass__inp"
        placeholder="Password"
        v-model="password"
      />
      <button
        class="check__pass"
        @click="visiblePasswordHandler"
      >
        <EyeIcon class="icon" />
      </button>
    </div>
    <!-- <div class="pass__wrap repeat">
      <input
        type="password"
        class="pass__inp"
        placeholder="Repeat password"
      />
    </div> -->
    <div class="create__acc">
      <RouterLink
        to="/login"
        class="link"
        >You have account?</RouterLink
      >
    </div>
    <button class="btn">Done</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import EyeIcon from '../icons/EyeIcon.vue'
import { useStore } from 'vuex'
import { key } from '@/store/store'
import router from '@/router'

const store = useStore(key)

const isVisiblePassword = ref(false)

const username = ref('')
const password = ref('')

const handleRegistration = () => {
  store.dispatch('registerUser', { username: username.value, password: password.value })
  username.value = ''
  password.value = ''
}

const visiblePasswordHandler = () => {
  isVisiblePassword.value = !isVisiblePassword.value
}

watch(
  () => store.getters.checkAuth,
  (newVal) => {
    router.push('/')
  }
)
</script>

<style lang="scss" scoped>
.form {
  color: white;
  background: rgb(19, 19, 19);
  padding: 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .form__logo {
    font-size: 25px;
  }
  .login__inp {
    background: white;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    padding: 7px 15px;
  }

  .pass__wrap {
    background: white;
    min-width: 350px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 15px;
    input {
      background: none;
      border: none;
      outline: none;
      font-size: 14px;
      width: 100%;
    }
  }
  .repeat {
    padding: 7px 15px;
  }
  .btn {
    background: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    padding: 7px 0;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
  .create__acc {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .link {
      font-size: 14px;
      color: white;
      transition: 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }
  .check__pass {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .icon {
    padding-top: 3px;
  }
}
</style>
