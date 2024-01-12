<template>
  <view class="hot">
    <view class="header">
      <view class="img">
        <image :src="hotList?.bannerPicture" mode="scaleToFill" style="width: 100%" />
      </view>
      <view class="tab">
        <view
          class="tab-item"
          v-for="(item, index) in hotList?.subTypes"
          :key="item.id"
          @click="qh(item.id, index)"
        >
          <text>{{ item.title }}</text>
          <text :class="tabIndex == item.id ? 'blue' : ''"></text>
        </view>
      </view>
    </view>

    <scroll-view scroll-y class="scroll-view" refresher-enabled @scrolltolower="onScrolltolower">
      <view class="list">
        <u-detail class="item" v-for="item in List" :key="item.id" :item="item"></u-detail>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHotAPI } from '@/api/hot'
import type { Item, Result } from '@/api/hot'

// 当前页面信息
const dq = ref()

// tab切换
const tabIndex = ref<string>('')
const qh = (id: string, index: number) => {
  List.value = []
  tabIndex.value = id
  // goodsItems.value = (subTypes.value as SubType[])[index].goodsItems
  List.value = hotList.value?.subTypes[index].goodsItems?.items as Item[]
}

// 第几页
const page = ref(1)

// 热门推荐页 标题和url
const urlMap = ref([
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
])

// 定义根本数据
let hotList = ref<Result>()

// 定义列表数据
const List = ref<Item[]>([])
// const subTypes = ref<SubType[]>()
// const goodsItems = ref<GoodsItem>()

// 触底加载
const onScrolltolower = () => {
  page.value += 1
  getHotList(dq.value.url, tabIndex.value)
}

// 获取数据
const getHotList = async (url: string, a: string) => {
  try {
    const res = await getHotAPI(url, {
      page: page.value,
      pageSize: 10,
      subType: a,
    })

    hotList.value = res.result
    // subTypes.value = res.result.subTypes
    // goodsItems.value = subTypes.value[0].goodsItems
    List.value = [...List.value, ...res.result.subTypes[0].goodsItems.items]
    tabIndex.value = res.result.subTypes[0].id
  } catch (error) {
    console.log(error)
  }
}

type optionsType = {
  type: string
}

// 动态设置当前标题
const setNavbarTitle = (options: optionsType) => {
  // 当前页面标题、url
  const current = urlMap.value.find((item) => item.type == options?.type)
  dq.value = current
  uni.setNavigationBarTitle({ title: current?.title as string })
  getHotList(current?.url as string, '')
}

onLoad((options) => {
  setNavbarTitle(options as optionsType)
})
</script>

<style lang="scss" scoped>
.hot {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 300rpx;
    position: relative;
    // background-color: yellow;

    .img {
      width: 100%;
      height: 225rpx;

      image {
        height: 100%;
        border-radius: 0 0 50rpx 50rpx;
      }
    }

    .tab {
      width: 95%;
      background-color: #fff;
      height: 100rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      bottom: 30rpx;
      left: 20rpx;
      border-radius: 20rpx;
      box-shadow: 0 0 20rpx #ccc;

      .tab-item {
        text {
          &:nth-child(2) {
            width: 80rpx;
            height: 6rpx;
            background-color: rgba(135, 207, 235, 0);
            display: block;
            margin: 10rpx auto 0;
          }
        }

        .blue {
          background-color: skyblue !important;
        }
      }
    }
  }

  .scroll-view {
    flex: 1;
    overflow: hidden;

    .list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      /* #ifdef MP-WEIXIN */
      .item {
        width: 45%;
      }

      /* #endif */
    }
  }
}
</style>
