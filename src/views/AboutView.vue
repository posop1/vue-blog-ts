<template>
  <div class="about">
    <div class="inner">
      <h2>About us</h2>
      <p>{{ aboutText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { aboutText } from '@/utils/constants'
</script>

<style lang="scss" scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  min-height: 90vh;
  align-items: center;
  padding: 20px;
}
.inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h2 {
    font-size: 28px;
  }
  p {
    font-size: 18px;
    line-height: 35px;
  }
}
</style>
