import { http } from '@/utils/http'
import type { AddParamsType, resaddresstype, xgParamsType } from './types/address-type'

// 获取地址列表
export const getAddressAPI = () => {
  return http<resaddresstype[]>({
    url: '/member/address',
    method: 'GET',
  })
}

// 新建地址
export const getAddAddressAPI = (AddParams: AddParamsType) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data: AddParams,
  })
}

// 获取地址详情
export const getAddAddressDetailAPI = (id: string) => {
  return http<resaddresstype>({
    url: `/member/address/${id}`,
    method: 'GET',
  })
}

// 修改地址
export const getxgAPI = (id: string, xgParams: xgParamsType) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data: xgParams,
  })
}

// 删除地址
export const delAPI = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
