import request from '@/utils/request'

export function page() {
  return request({
    url: '/xxw_shop_delivery/b/area/list',
    method: 'get'
  })
}

export function get(areaId) {
  return request({
    url: '/xxw_shop_delivery/b/area',
    method: 'get',
    params: {
      areaId
    }
  })
}

export function save(data) {
  return request({
    url: '/xxw_shop_delivery/b/area',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/xxw_shop_delivery/b/area',
    method: 'put',
    data
  })
}

export function deleteById(areaId) {
  return request({
    url: '/xxw_shop_delivery/b/area',
    method: 'delete',
    params: {
      areaId
    }
  })
}
