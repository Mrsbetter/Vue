import request from '@/utils/request'

export function getUserDetail(params) {
  return request({
    url: '/BI/commons/getUserDetail.do',
    method: 'get',
    params
  })
}
