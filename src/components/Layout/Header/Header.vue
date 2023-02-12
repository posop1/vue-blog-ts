<template>
  <div class="header">
    <div class="container">
      <div class="inner">
        <RouterLink
          to="/"
          class="logo"
          >Blog</RouterLink
        >
        <div
          class="links"
          v-if="store.getters.checkAuth"
        >
          <RouterLink
            v-for="link in navLinks"
            :to="link.to"
            class="link"
            active-class="link__active"
            >{{ link.name }}</RouterLink
          >
        </div>
        <div
          class="sub__links"
          v-if="store.getters.checkAuth"
        >
          <button
            class="link btn"
            @click="logout"
          >
            Logout
          </button>
        </div>
        <div
          class="sub__links"
          v-else
        >
          <RouterLink
            to="/registration"
            class="link"
            active-class="link__active"
            >Sing up</RouterLink
          >
          <RouterLink
            to="/login"
            class="link"
            active-class="link__active"
            >Sing in</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { key } from '@/store/store'
import { navLinks } from '@/utils/constants'
import { useStore } from 'vuex'

const store = useStore(key)

const logout = () => {
  store.dispatch('logout')
}
</script>

<style lang="scss" scoped>
.btn {
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}
.header {
  width: 100%;
  z-index: 100;
  position: sticky;
  left: 0;
  top: 0;
  padding: 5px 15px;
  background: rgb(19, 19, 19);
  color: white;
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 30px;
  font-weight: bold;
}
.links {
  display: flex;
  gap: 25px;
}
.link {
  font-size: 18px;
  opacity: 0.6;

  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
}
.link__active {
  opacity: 1;
}
.sub__links {
  display: flex;
  gap: 20px;
}
</style>
