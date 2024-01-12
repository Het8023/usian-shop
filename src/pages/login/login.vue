<template>
  <view class="box">
    <image src="../../static/images/logo_icon.png" class="logo" mode="scaleToFill" />
    <view class="form">
      <input type="text" v-model="form.account" placeholder="请输入账号或手机号" />
      <input type="text" v-model="form.password" placeholder="请输入密码" />
      <button @click="login">登录</button>
    </view>

    <div class="title">—————其他登录方式—————</div>

    <view class="kj" @click="ksdl">
      <image
        src="https://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png"
        mode="scaleToFill"
      />
      <view>模拟快捷登录</view>
    </view>

    <view class="xy"> 登录/注册即视为你同意《服务条款》和《小兔鲜隐私协议》 </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getLoginAPI } from '@/api/my'
import { useUserStore } from '@/stores/user'
const store = useUserStore()

// 定义账号密码
const form = ref({
  account: '13123456789',
  password: '',
})

// 账号密码登录
const login = async () => {
  try {
    const res = await getLoginAPI({
      ...form.value,
    })
    console.log(res)
    store.info = res.result
    store.token = res.result.token
    uni.switchTab({
      url: '/pages/my/index',
    })
  } catch (error) {
    console.log(error)
  }
}

// 模拟快速登录
const ksdl = async () => {
  try {
    const res = await getLoginAPI({
      account: '13123456789',
      password: '123456',
    })
    console.log(res)
    store.info = res.result
    store.token = res.result.token
    uni.switchTab({
      url: '/pages/my/index',
    })
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  text-align: center;

  .logo {
    width: 40%;
    height: 17%;
    margin-top: 150rpx;
    margin-bottom: 40rpx;
  }

  .form {
    input {
      margin: auto;
      text-align: left;
      padding-left: 20rpx;
      box-sizing: border-box;
      width: 90%;
      border: 1px solid #ccc;
      height: 80rpx;
      border-radius: 40rpx;
      margin-bottom: 20rpx;
    }

    button {
      width: 90%;
      border: 0;
      height: 80rpx;
      border-radius: 40rpx;
      background-color: #28bb9c;
      color: #fff;
      line-height: 80rpx;
      margin-bottom: 50rpx;
    }
  }

  .title {
    font-size: 26rpx;
    color: #999;
  }

  .kj {
    margin-top: 50rpx;
    font-size: 28rpx;

    image {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      border: 1px solid #000;
      margin-bottom: 10rpx;
    }
  }

  .xy {
    font-size: 24rpx;
    color: #999;
    margin-top: 140rpx;
  }
}
</style>
