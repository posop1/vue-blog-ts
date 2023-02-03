<template>
  <div class="registration__view">
    <RegistrationForm />
  </div>
</template>

<script setup lang="ts">
import RegistrationForm from '@/components/Forms/RegistrationForm.vue'
</script>

<style lang="scss" scoped>
.registration__view {
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
