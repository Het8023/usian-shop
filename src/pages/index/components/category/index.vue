<template>
  <view class="list">
    <view class="item" v-for="item in list" :key="item.id">
      <image :src="item.icon" mode="scaleToFill" class="img" /><br />
      <text>{{ item.name }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { category } from '@/api/types/home-type'
defineProps<{
  list: category[]
}>()
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  background-color: #f7f7f7;
  padding: 20rpx;
  box-sizing: border-box;
  font-size: 28rpx;

  .item {
    width: 20%;
    text-align: center;
    margin-bottom: 10rpx;

    .img {
      width: 70%;
      height: 100rpx;
    }
  }
}
</style>
