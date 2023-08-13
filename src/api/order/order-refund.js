import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_order/b/order/refund/page',
    method: 'get',
    params: pageParam
  })
}
