<template>
  <view class="box">
    <!-- 登录 -->
    <view class="login">
      <!-- 未登录 -->
      <navigator
        url="/pages/login/login"
        v-if="!store.info.avatar"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <view class="left">
          <view class="tx">
            <image
              src="https://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png"
              mode="scaleToFill"
            />
          </view>
          <view class="name">
            <text>未登录</text>
            <text>点击登录账号</text>
          </view>
        </view>
      </navigator>

      <!-- 已登录 -->
      <navigator
        url="/subpkg_my/profile/profile"
        v-else
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <view class="left">
          <view class="tx">
            <image :src="store.info.avatar" mode="scaleToFill" />
          </view>
          <view class="name">
            <text>{{ store.info.nickname }}</text>
            <text class="dl">更新头像昵称</text>
          </view>
        </view>
      </navigator>

      <view class="right">
        <text @click="tosetting">设置</text>
      </view>
    </view>

    <!-- 我的订单 -->
    <view class="shop">
      <view class="top">
        <text>我的订单</text>
        <text>查看全部订单</text>
      </view>
      <view class="footer">
        <view class="footer-item">
          <image src="" mode="scaleToFill" />
          <view>待付款</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { onShow } from '@dcloudio/uni-app'
const store = useUserStore()

const tosetting = () => {
  uni.navigateTo({
    url: '/subpkg_my/setting/setting',
  })
}

onShow(() => {})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f7f7f8;

  .login {
    width: 100%;
    height: 420rpx;
    background-image: url('../../static/images/center_bg.png');
    background-size: 100% 100%;
    display: flex;
    color: #fff;

    .left {
      display: flex;
      // background-color: red;
      height: 200rpx;
      align-items: center;
      padding-left: 40rpx;
      box-sizing: border-box;

      .tx {
        width: 130rpx;
        height: 130rpx;
        border-radius: 50%;
        margin-right: 20rpx;

        image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .name {
        text {
          display: block;

          &:nth-child(1) {
            margin-bottom: 20rpx;
          }

          &:nth-child(2) {
            font-size: 25rpx;
          }
        }

        .dl {
          border: 1px solid #fff;
          border-radius: 20rpx;
          padding: 5rpx;
          box-sizing: border-box;
          text-align: center;
        }
      }
    }

    .right {
      flex: 1;
      padding-right: 50rpx;
      box-sizing: border-box;

      text {
        margin-top: 130rpx;
        float: right;
      }
    }
  }

  .shop {
    width: 95%;
    background-color: #fff;
    padding: 40rpx;
    box-sizing: border-box;
    position: absolute;
    left: 20rpx;
    top: 200rpx;
    border-radius: 20rpx;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      text {
        &:nth-child(2) {
          font-size: 25rpx;
          color: #999;
        }
      }
    }
  }
}

image {
  width: 100rpx;
  height: 100rpx;
}
</style>
