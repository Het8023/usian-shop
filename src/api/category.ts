import { http } from '@/utils/http'

// 返回参数类型
//#region
export type categoryType = {
  /**
   * 二级分类集合
   */
  children: Child[]
  /**
   * 一级分类id
   */
  id: string
  /**
   * 一级分类图片集
   */
  imageBanners: string[]
  /**
   * 一级分类名称
   */
  name: string
  /**
   * 一级分类图片
   */
  picture: string
}
/**
 * 二级分类项
 */
export type Child = {
  brands: null
  categories: null
  /**
   * 商品集合
   */
  goods: Good[]
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名称
   */
  name: string
  parentId: null
  parentName: null
  /**
   * 二级分类图片
   */
  picture: string
  saleProperties: null
  [property: string]: any
}

/**
 * 商品项
 */
export type Good = {
  /**
   * 商品描述
   */
  desc: string
  discount: null
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
  [property: string]: any
}
//#endregion

// 分类列表
export const getCategoryAPI = () => {
  return http<categoryType[]>({
    url: '/category/top',
    method: 'GET',
  })
}
