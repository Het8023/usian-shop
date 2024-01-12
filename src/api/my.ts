import { http } from '@/utils/http'
import type { ApifoxModel, loginParamsType, loginType, modifyType } from './types/my-type'

// 登录
export const getLoginAPI = (loginParams: loginParamsType) => {
  return http<loginType>({
    url: '/login',
    method: 'POST',
    data: loginParams,
  })
}

// 修改个人信息
export const getmodifyApi = (modifyParams: ApifoxModel) => {
  return http<modifyType>({
    url: '/member/profile',
    method: 'PUT',
    data: modifyParams,
  })
}
