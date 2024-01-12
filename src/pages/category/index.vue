<template>
  <view class="category">
    <!-- 搜索框 -->
    <view class="search">
      <view class="ss">女靴</view>
    </view>

    <!-- 主体 -->
    <view class="content">
      <view class="left">
        <view
          class="left-item"
          :class="tabIndex == index ? 'active' : ''"
          v-for="(item, index) in categoryList"
          :key="item.id"
          @click="qh(index)"
          >{{ item.name }}
        </view>
      </view>
      <view class="right">
        <u-swiper :list="banner" style="height: 200rpx"></u-swiper>

        <scroll-view scroll-y class="sroll-view">
          <view class="right-list">
            <view class="right-item" v-for="it in rightList" :key="it.id">
              <view class="title">
                <text>{{ it.name }}</text>
                <text>全部</text>
              </view>
              <view class="list">
                <u-detail
                  class="item"
                  v-for="item in it.goods"
                  :key="item.id"
                  :item="item"
                ></u-detail>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getCategoryAPI } from '@/api/category'
import { getHomeBannerAPI } from '@/api/home'
import type { Result } from '@/api/types/home-type'
import type { Child, categoryType } from '@/api/category'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取轮播图
const banner = ref<Result[]>([])
const getbanner = async () => {
  try {
    const res = await getHomeBannerAPI(2)
    banner.value = res.result
  } catch (error) {
    console.log(error)
  }
}

// 定义左侧列表
const categoryList = ref<categoryType[]>([])

// 定义右侧外层列表
const rightList = ref<Child[]>([])

// 获取列表数据
const getlist = async () => {
  try {
    const res = await getCategoryAPI()
    console.log(res)
    categoryList.value = res.result
    rightList.value = res.result[0].children
  } catch (error) {
    console.log(error)
  }
}

// tab切换
const tabIndex = ref(0)
const qh = (index: number) => {
  tabIndex.value = index
  rightList.value = categoryList.value[index].children
}

onLoad(() => {
  getbanner()
  getlist()
})
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;

  .search {
    width: 100%;
    height: 104rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .ss {
      width: 90%;
      height: 70rpx;
      border-radius: 40rpx;
      background-color: #f3f3f3;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 20rpx;
      box-sizing: border-box;
    }
  }

  .content {
    width: 100%;
    height: calc(100% - 104rpx);
    display: flex;
    justify-content: space-between;

    .left {
      width: 25%;
      background-color: #f6f6f6;

      .left-item {
        width: 100%;
        box-sizing: border-box;
        border-left: 4px solid #00000000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 96rpx;
      }

      .active {
        background-color: #fff;
        border-left: 4px solid green;
      }
    }

    .right {
      width: 75%;
      padding: 0 20rpx 0 20rpx;
      box-sizing: border-box;

      .sroll-view {
        height: calc(100% - 100rpx);
        overflow: hidden;
        padding-bottom: 100rpx;
        box-sizing: border-box;
      }

      .right-list {
        width: 100%;
        margin-top: 20rpx;

        .right-item {
          width: 100%;
          margin-bottom: 40rpx;

          .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 28rpx;

            text {
              &:nth-child(2) {
                color: #999;
              }
            }
          }

          .list {
            width: 100%;
            display: flex;
            align-content: center;
            flex-wrap: wrap;
            justify-content: flex-start;

            .item {
              width: 33%;

              image {
                height: 100rpx !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
