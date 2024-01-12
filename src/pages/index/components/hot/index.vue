<template>
  <view class="list">
    <view class="item" v-for="item in list" :key="item.id">
      <navigator
        :url="`/pages/hot/hot?type=${item.type}`"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <view class="item_top">
          <text>{{ item.title }}</text>
          <text>{{ item.alt }}</text>
        </view>
        <view class="item_footer">
          <image :src="it" mode="scaleToFill" v-for="(it, index) in item.pictures" :key="index" />
        </view>
      </navigator>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Hot } from '@/api/types/home-type'
defineProps<{
  list: Hot[]
}>()
</script>

<style lang="scss" scoped>
.list {
  width: 95%;
  margin: auto;
  background-color: #fff;
  padding: 20rpx;
  box-sizing: border-box;
  border-radius: 20rpx;
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 50%;
    padding-top: 10rpx;

    .item_top {
      margin-bottom: 20rpx;

      text {
        &:nth-child(1) {
          margin-right: 20rpx;
        }

        &:nth-child(2) {
          font-size: 26rpx;
          color: #999;
        }
      }
    }

    .item_footer {
      width: 100%;

      image {
        width: 45%;
        height: 140rpx;
        margin-right: 10rpx;
      }
    }
  }
}
</style>
