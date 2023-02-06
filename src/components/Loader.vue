<template>
  <div class="loader">
    <HollowDotsSpinner
      :animation-duration="1000"
      :dot-size="size ? size : 15"
      :dots-num="3"
      color="#000"
    />
  </div>
</template>

<script setup lang="ts">
import { HollowDotsSpinner } from 'epic-spinners'

defineProps<{ size?: number }>()
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
