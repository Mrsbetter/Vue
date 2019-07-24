import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/BI/commons/getUserDetail.do',
    method: 'get',
    params
  })
}
