<template>
  <view class="box">
    <view class="header">
      <view class="header_top">
        <image src="../static/images/logo.png" style="width: 166rpx; height: 39rpx" />
        <text>新鲜 · 亲民 · 快捷</text>
      </view>
      <view class="header_search">
        <text class="icon-search">搜索商品</text>
        <text class="icon-scan">扫码</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: 100% 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 180rpx;
  padding: 30rpx 30rpx 0;
  box-sizing: border-box;
  color: #fff;

  .header_top {
    width: 100%;
    display: flex;
    align-items: center;

    image {
      margin-right: 20rpx;
    }

    text {
      border-left: 1px solid #fff;
      padding-left: 30rpx;
      font-size: 26rpx;
    }
  }

  .header_search {
    width: 100%;
    border-radius: 40rpx;
    margin: auto;
    background-color: #80e1d0;
    height: 60rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40rpx;
    box-sizing: border-box;
  }
}
</style>
