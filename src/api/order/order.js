import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_order/b/order/page',
    method: 'get',
    params: pageParam
  })
}

export function changeAmount(data) {
  return request({
    url: '/xxw_shop_order/b/order/change_amount',
    method: 'put',
    data
  })
}

export function orderInfo(orderId) {
  return request({
    url: '/xxw_shop_order/b/order/order_info/' + orderId,
    method: 'get'
  })
}

// 原/order/delivery/getOrderItemUnDelivery
export function getOrderItemAndAddress(orderId) {
  return request({
    url: '/xxw_shop_order/b/order/order_item_and_address/' + orderId,
    method: 'get'
  })
}

//
export function delivery(data) {
  return request({
    url: '/xxw_shop_order/b/order/delivery',
    method: 'post',
    data
  })
}
