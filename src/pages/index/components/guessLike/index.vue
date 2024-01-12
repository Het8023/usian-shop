<template>
  <view class="title">猜你喜欢</view>
  <view class="list">
    <u-detail class="item" v-for="item in list" :key="item.id" :item="item"></u-detail>
  </view>
</template>

<script lang="ts" setup>
import type { Item } from '@/api/types/home-type.ts'
defineProps<{
  list: Item[]
}>()
</script>

<style lang="scss" scoped>
.title {
  margin: 40rpx 0;
  text-align: center;
}

/* #ifdef MP-WEIXIN */
.list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;

  .item {
    width: 45%;
    margin-bottom: 20rpx;
  }
}

/* #endif */

/* #ifdef H5 */
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* #endif */
</style>
