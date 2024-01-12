// 首页轮播图返回数据
export type Result = {
  /**
   * 跳转链接
   */
  hrefUrl: string
  /**
   * id
   */
  id: string
  /**
   * banner链接
   */
  imgUrl: string
  /**
   * 跳转类型1、页面2、H5 3、小程序（小程序使用）
   */
  type: number
  [property: string]: any
}

// 前台分类
export type category = {
  /**
   * 展示图标
   */
  icon: string
  /**
   * id
   */
  id: string
  /**
   * 分类名称
   */
  name: string
}

// 热门推荐
export type Hot = {
  /**
   * 推荐说明
   */
  alt: string
  /**
   * id
   */
  id: string
  /**
   * 图片集合
   */
  pictures: string[]
  /**
   * 跳转地址
   */
  target: string
  /**
   * 推荐标题
   */
  title: string
  /**
   * 推荐类型
   */
  type: string
}

// 猜你喜欢
export type guessLikeType = {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: Item[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}
export type Item = {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品已下单数量
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
