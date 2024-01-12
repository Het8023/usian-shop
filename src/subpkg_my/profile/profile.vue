<template>
  <div class="box">
    <div class="tx">
      <view class="nav">
        <text @click="fh">&lt;</text>
        <text>个人信息</text>
        <text></text>
      </view>
      <view class="img">
        <image :src="store.info.avatar" mode="scaleToFill" />
        <view>点击修改头像</view>
      </view>
    </div>

    <view class="list">
      <view class="item">
        <view>账号</view>
        <view>
          <input class="uni-input" disabled v-model="store.info.account" style="color: #999" />
        </view>
      </view>
      <view class="item">
        <view>昵称</view>
        <view>
          <input class="uni-input" v-model="store.info.nickname" :value="form.nickname" />
        </view>
      </view>
      <view class="item">
        <view>性别</view>
        <view>
          <!-- <label class="radio">
            <radio value="男" name="gender" v-model="form.gender" :checked="store.info.gender == '男'" />男
          </label>
          <label class="radio">
            <radio value="女" name="gender" v-model="form.gender" :checked="store.info.gender == '女'" />女
          </label> -->
        </view>
      </view>
      <view class="item">
        <view>生日</view>
        <view>
          <input class="uni-input" v-model="store.info.birthday" :value="form.birthday" />
        </view>
      </view>
      <view class="item">
        <view>职业</view>
        <view>
          <input class="uni-input" v-model="store.info.profession" :value="form.profession" />
        </view>
      </view>
    </view>

    <button @click="xg">保存</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
const store = useUserStore()

type formType = {
  nickname: string
  gender: string
  birthday: string
  profession: string
}

// 定义个人信息
const form = ref<formType>({
  nickname: '',
  gender: '',
  birthday: '',
  profession: '',
})

// 修改个人信息
const xg = () => {
  console.log(form.value)
}

// 返回上一页
const fh = () => {
  uni.switchTab({
    url: '/pages/my/index',
  })
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;

  .tx {
    background-image: url('../../static//images/order_bg.png');
    background-size: 100% 100%;
    height: 340rpx;
    margin-bottom: 20rpx;

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20rpx;
      color: #fff;
      height: 80rpx;

      text {
        &:nth-child(1) {
          font-size: 40rpx;
        }
      }
    }

    .img {
      width: 100%;
      height: 260rpx;
      text-align: center;
      margin-top: 20rpx;
      color: #fff;
      font-size: 27rpx;

      image {
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
        margin-bottom: 10rpx;
      }
    }
  }

  .list {
    width: 95%;
    background-color: #fff;
    border-radius: 10rpx;
    margin: auto;
    padding: 10rpx;
    box-sizing: border-box;

    .item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #ccc;
      padding: 25rpx 20rpx;
      margin-top: 10rpx;

      &:last-child {
        border: 0;
      }

      view {
        &:nth-child(1) {
          margin-right: 100rpx;
        }
      }
    }
  }

  button {
    width: 90%;
    border: 0;
    background-color: #27ba9b;
    color: #fff;
    border-radius: 60rpx;
    margin-top: 30rpx;
  }
}
</style>
