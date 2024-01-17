<template>
  <view class="box">
    <uni-list>
      <uni-list-item showArrow title="我的收货地址" clickable @click="toaddress" />
    </uni-list>
    <uni-list>
      <uni-list-item showArrow title="关于小兔鲜儿" />
    </uni-list>
    <button class="button popup-success" @click="onLogout">退出登录</button>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
const store = useUserStore()

// 退出登录
const onLogout = () => {
  // 模态弹窗
  uni.showModal({
    content: '是否退出登录？',
    confirmColor: '#27BA9B',
    success: (res) => {
      if (res.confirm) {
        // 清理用户信息
        store.info = {}
        store.token = ''
        // 返回上一页
        uni.switchTab({ url: '/pages/index/index' })
      }
    },
  })
}

const toaddress = () => {
  uni.navigateTo({
    url: '/subpkg_my/address/address',
  })
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  padding: 20rpx;
  box-sizing: border-box;

  .uni-list {
    margin-bottom: 20rpx;
    border-radius: 20rpx;
  }

  button {
    border: 0;
    background-color: #fff;
    margin-top: 40rpx;
    border-radius: 20rpx;
  }
}
</style>
