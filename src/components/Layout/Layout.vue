<template>
  <div class="app">
    <Header />
    <div class="main">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer/Footer.vue'
import Header from './Header/Header.vue'
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.main {
  width: 100%;
  min-height: 91vh;
}
</style>
