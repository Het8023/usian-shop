<template>
  <swiper indicator-dots autoplay circular>
    <swiper-item v-for="item in list" :key="item.id">
      <image :src="item.imgUrl" mode="scaleToFill" />
    </swiper-item>
  </swiper>
</template>
<script setup lang="ts">
import type { Result } from '@/api/types/home-type'

defineProps<{
  list: Result[]
}>()
</script>
<style lang="scss" scoped>
image {
  width: 100%;
  height: 100%;
}
</style>
