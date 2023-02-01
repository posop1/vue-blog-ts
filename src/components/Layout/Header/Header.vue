<template>
  <div class="header">
    <div class="container">
      <div class="inner">
        <RouterLink
          to="/"
          class="logo"
          >Blog</RouterLink
        >
        <div class="links">
          <RouterLink
            v-for="link in navLinks"
            :to="link.to"
            class="link"
            active-class="link__active"
            >{{ link.name }}</RouterLink
          >
        </div>
        <div class="sub__links">
          <RouterLink
            to="/login"
            class="link"
            active-class="link__active"
            >Login</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navLinks } from '@/utils/constants'
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  z-index: 100;
  position: sticky;
  left: 0;
  top: 0;
  padding: 10px 5px;
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
</style>
