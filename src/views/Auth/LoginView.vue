<template>
  <div class="login__view">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/Forms/LoginForm.vue'
</script>

<style lang="scss" scoped>
.login__view {
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
