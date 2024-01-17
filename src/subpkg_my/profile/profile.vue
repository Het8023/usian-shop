<template>
  <div class="box">
    <div class="tx">
      <view class="nav">
        <text @click="fh">&lt;</text>
        <text>个人信息</text>
        <text></text>
      </view>
      <view class="img">
        <image :src="form.avatar" mode="scaleToFill" @click="changeAvatar" />
        <view @click="changeAvatar">点击修改头像</view>
      </view>
    </div>

    <view class="list">
      <view class="item">
        <view>账号</view>
        <view>
          <input class="uni-input" disabled v-model="form.account" style="color: #999" />
        </view>
      </view>
      <view class="item">
        <view>昵称</view>
        <view>
          <input class="uni-input" v-model="form.nickname" />
        </view>
      </view>
      <view class="item">
        <view>性别</view>
        <view>
          <radio-group @change="handleChange">
            <radio value="男" :checked="form.gender == '男'" />
            男
            <radio value="女" :checked="form.gender == '女'" />
            女
          </radio-group>
        </view>
      </view>
      <view class="item">
        <view>生日</view>
        <view>
          <input class="uni-input" v-model="form.birthday" />
        </view>
      </view>
      <view class="item">
        <view>职业</view>
        <view>
          <input class="uni-input" v-model="form.profession" />
        </view>
      </view>
    </view>

    <button @click="xg">保存</button>
  </div>
</template>

<script lang="ts" setup>
import { getmodifyApi } from '@/api/my'
import { useUserStore } from '@/stores/user'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
const store = useUserStore()

// 定义个人信息
const form = ref()

// 修改性别
const handleChange = (e: any) => {
  form.value.gender = e.detail.value
}

// 修改个人信息
const xg = async () => {
  try {
    const res = await getmodifyApi({
      nickname: form.value.nickname,
      gender: form.value.gender,
      birthday: form.value.birthday,
      profession: form.value.profession,
    })
    console.log(res)
    uni.switchTab({
      url: '/pages/my/index',
    })
  } catch (error) {
    console.log(error)
  }
}

// 修改头像
const changeAvatar = async () => {
  try {
    uni.chooseImage({
      count: 1,
      success: (success) => {
        uni.uploadFile({
          url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/member/profile/avatar',
          name: 'file',
          header: {
            Authorization: store.token,
          },
          filePath: success.tempFilePaths[0],
          success: (res) => {
            if (res.statusCode == 200) {
              store.info.avatar = JSON.parse(res.data).result.avatar
              uni.showToast({ icon: 'success', title: '更新成功' })
            } else {
              uni.showToast({ icon: 'error', title: '出现错误' })
            }
          },
        })
      },
    })
  } catch (error) {
    console.log(error)
  }
}

// 返回上一页
const fh = () => {
  uni.switchTab({
    url: '/pages/my/index',
  })
}

onShow(() => {
  form.value = store.info
})
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
