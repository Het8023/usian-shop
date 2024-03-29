// 登录参数
export type loginParamsType = {
  /**
   * 用户名或手机号
   */
  account: string
  /**
   * 密码
   */
  password: string
}

// 登录返回参数
export type loginType = {
  avatar: string
  /**
   * 生日
   */
  birthday: string
  /**
   * 城市编码
   */
  cityCode: string
  /**
   * 性别，男、女、未知
   */
  gender: string
  /**
   * 用户ID
   */
  id: number
  /**
   * 手机号
   */
  mobile: string
  nickname: string
  /**
   * 职业
   */
  profession: string
  /**
   * 省份编码
   */
  provinceCode: string
  token: string
}

// 修改个人信息参数
//#region
/**
 * 个人信息-修改：请求体参数
 */
export type ApifoxModel = {
  /**
   * 生日 YYYY-MM-DD
   */
  birthday?: null | string
  /**
   * 城市编码
   */
  cityCode?: null | string
  /**
   * 区/县编码
   */
  countyCode?: null | string
  /**
   * 性别，男、女、未知
   */
  gender?: Gender
  /**
   * 昵称
   */
  nickname?: null | string
  /**
   * 职业
   */
  profession?: null | string
  /**
   * 省份编码
   */
  provinceCode?: null | string
}

/**
 * 性别，男、女、未知
 */
export enum Gender {
  女 = '女',
  男 = '男',
}
//#endregion

// 修改信息返回参数类型
export type modifyType = {
  /**
   * 账号名称
   */
  account: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 生日
   */
  birthday: string
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string
  /**
   * 性别，男、女、未知
   */
  gender: Gender
  /**
   * 用户Id
   */
  id: string
  /**
   * 昵称
   */
  nickname: string
  /**
   * 职业
   */
  profession: string
  /**
   * token
   */
  token: string
}
