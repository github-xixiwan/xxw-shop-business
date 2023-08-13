import request from '@/utils/request'

export function list() {
  return request({
    url: '/xxw_shop_delivery/b/delivery_company/list',
    method: 'get'
  })
}

