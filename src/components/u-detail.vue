<template>
  <view class="item" @click="todetail(item.id)">
    <image :src="item.picture" mode="scaleToFill" />
    <view class="name">{{ item.name }}</view>
    <view class="price">￥{{ item.price }}</view>
  </view>
</template>
<script setup lang="ts">
import type { Item } from '@/api/types/home-type'

const todetail = (id: string) => {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`,
  })
}

defineProps<{
  item: Item
}>()
</script>
<style lang="scss" scoped>
/* #ifdef MP-WEIXIN */
.item {
  width: 100%;
}

/* #endif */

/* #ifdef H5 */
.item {
  width: 45%;
  background-color: #fff;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  padding: 20rpx;
  box-sizing: border-box;
  text-align: center;
}

/* #endif */

image {
  width: 90%;
  height: 225rpx;
}

.name {
  font-size: 26rpx;
  height: 68rpx;
  margin-bottom: 10rpx;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.price {
  font-size: 26rpx;
  color: red;
}
</style>
