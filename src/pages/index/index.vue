<template>
  <view class="box" :style="{ paddingTop: safeAreaInsets!.top + 'px' }">
    <!-- 导航栏 -->
    <view class="navbar">
      <u-nav></u-nav>
    </view>

    <scroll-view
      scroll-y
      class="scroll-view"
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
    >
      <!-- 轮播图 -->
      <u-swiper :list="bannerList"></u-swiper>
      <!-- 商品分类 -->
      <Category :list="categoryList"></Category>
      <!-- 热门推荐 -->
      <Hotmutle :list="hotList"></Hotmutle>
      <!-- 猜你喜欢 -->
      <guessLike :list="guessLikeobj"></guessLike>
      <view class="toast" v-show="show">正在加载...</view>
    </scroll-view>
  </view>
</template>
<script setup lang="ts">
import { getHomeBannerAPI, getCategoryAPI, getHotApi, getGuessLikeAPI } from '@/api/home'
import { onShow } from '@dcloudio/uni-app'
import type { Result, category, Hot, Item } from '@/api/types/home-type'
import { ref } from 'vue'
import Category from './components/category/index.vue'
import Hotmutle from './components/hot/index.vue'
import guessLike from './components/guessLike/index.vue'

// 安全区域适配
const { safeAreaInsets } = uni.getSystemInfoSync()

// 获取轮播图数据
const bannerList = ref<Result[]>([])
const getbanner = async () => {
  try {
    const res = await getHomeBannerAPI(1)
    bannerList.value = res.result
  } catch (error) {
    console.log(error)
  }
}

// 获取商品分类
const categoryList = ref<category[]>([])
const getcategory = async () => {
  try {
    const res = await getCategoryAPI()
    // console.log(res);
    categoryList.value = res.result
  } catch (error) {
    console.log(error)
  }
}

// 热门推荐
const hotList = ref<Hot[]>([])
const getHot = async () => {
  try {
    const res = await getHotApi()
    // console.log(res);
    hotList.value = res.result
  } catch (error) {
    console.log(error)
  }
}

// 猜你喜欢
const show = ref<boolean>(false)
const isTriggered = ref<boolean>(false)
const page = ref(1)
const pageSize = ref(10)
const guessLikeobj = ref<Item[]>([])
const getguessLike = async () => {
  try {
    const res = await getGuessLikeAPI({
      page: page.value,
      pageSize: pageSize.value,
    })
    // console.log(res);
    guessLikeobj.value = [...guessLikeobj.value, ...res.result.items]
  } catch (error) {
    console.log(error)
  }
}

// 下拉刷新
const onRefresherrefresh = async () => {
  isTriggered.value = true
  page.value = 1
  guessLikeobj.value = []
  await getguessLike()
  isTriggered.value = false
}

// 触底加载
const onScrolltolower = async () => {
  show.value = true
  page.value += 1
  await getguessLike()
  show.value = false
}

onShow(() => {
  guessLikeobj.value = []
  getbanner()
  getcategory()
  getHot()
  getguessLike()
})
</script>
<style lang="scss" scoped>
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navbar {
  height: 180rpx;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
  background-color: #f5f5f5;
}
</style>
