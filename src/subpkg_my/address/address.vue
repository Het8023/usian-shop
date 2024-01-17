<template>
  <view class="box">
    <view class="list" v-if="addressList.length">
      <view class="item" v-for="item in addressList" :key="item.id">
        <view class="top">
          <view>
            <text>{{ item.receiver }}</text>
            <text>{{ item.contact }}</text>
            <text class="isDefault" v-if="item.isDefault">默认</text>
          </view>
          <view @click="xg(item.id)">修改</view>
        </view>
        <view class="footer">
          <text>{{ item.fullLocation }}</text>
          <text>{{ item.address }}</text>
          <text style="color: red" @click="del(item.id)">删除</text>
        </view>
      </view>
    </view>

    <button @click="toAdd">新建地址</button>
  </view>
</template>

<script lang="ts" setup>
import { onLoad, onShow } from '@dcloudio/uni-app'
import { delAPI, getAddressAPI } from '@/api/address'
import { ref } from 'vue'
import type { resaddresstype } from '@/api/types/address-type'

// 定义列表
const addressList = ref<resaddresstype[]>([])

// 获取数据列表
const getlist = async () => {
  try {
    const res = await getAddressAPI()
    addressList.value = res.result
    console.log(res.result)
  } catch (error) {
    console.log(error)
  }
}

// 前往新建页面
const toAdd = () => {
  uni.navigateTo({
    url: '/subpkg_my/address-form/address-form',
  })
}

// 修改
const xg = (id: string) => {
  uni.navigateTo({
    url: `/subpkg_my/address-form/address-form?id=${id}`,
  })
}

// 删除
const del = async (id: string) => {
  try {
    const res = await delAPI(id)
    getlist()
  } catch (error) {
    console.log(error)
  }
}

onShow(() => {
  getlist()
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  padding: 20rpx;
  box-sizing: border-box;

  button {
    background-color: #27ba9b;
    color: #fff;
    border: 0;
    border-radius: 50rpx;
    position: fixed;
    left: 10rpx;
    bottom: 20rpx;
    width: 97%;
  }

  .list {
    padding: 20rpx;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 28rpx;
    border-radius: 10rpx;

    .item {
      padding: 20rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #999;
      margin-top: 10rpx;

      &:last-child {
        border: 0;
      }

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10rpx;

        view {
          &:nth-child(1) {
            text {
              margin-right: 20rpx;
            }

            .isDefault {
              color: #27ba9b;
              border: 2rpx solid #27ba9b;
              border-radius: 10rpx;
              text-align: center;
              font-size: 24rpx;
              padding: 5rpx;
            }
          }

          &:nth-child(2) {
            border-left: 1px solid #000;
            padding-left: 20rpx;
            font-size: 26rpx;
          }
        }
      }

      .footer {
        margin-bottom: 10rpx;
        font-size: 26rpx;

        text {
          &:nth-child(3) {
            float: right;
          }
        }
      }
    }
  }
}
</style>
