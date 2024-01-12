import { http } from '@/utils/http'
import type { Result, category, Hot, guessLikeType } from './types/home-type'

// 首页轮播图
export const getHomeBannerAPI = (distributionSite: number) => {
  return http<Result[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

// 前台分类
export const getCategoryAPI = () => {
  return http<category[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

// 热门推荐
export const getHotApi = () => {
  return http<Hot[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

// 猜你喜欢
type guessLikeParamsType = {
  page: number
  pageSize: number
}
export const getGuessLikeAPI = (guessLikeParams: guessLikeParamsType) => {
  return http<guessLikeType>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data: guessLikeParams,
  })
}
