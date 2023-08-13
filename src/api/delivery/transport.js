import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_delivery/b/transport/page',
    method: 'get',
    params: pageParam
  })
}

export function get(transportId) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'get',
    params: {
      transportId
    }
  })
}

export function save(data) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'put',
    data
  })
}

export function deleteById(transportId) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'delete',
    params: {
      transportId
    }
  })
}

export function listArea() {
  return request({
    url: '/xxw_shop_delivery/b/area/list',
    method: 'get',
    params: {}
  })
}

export function listAreaInfo() {
  return request({
    url: '/xxw_shop_delivery/b/area/areaListInfo',
    method: 'get',
    params: {}
  })
}
