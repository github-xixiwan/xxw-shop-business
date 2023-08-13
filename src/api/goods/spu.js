import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_goods/b/spu/page',
    method: 'get',
    params: pageParam
  })
}

export function get(spuId) {
  return request({
    url: '/xxw_shop_goods/b/spu',
    method: 'get',
    params: {
      spuId
    }
  })
}

export function save(data) {
  return request({
    url: '/xxw_shop_goods/b/spu',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/xxw_shop_goods/b/spu',
    method: 'put',
    data
  })
}

export function deleteById(spuId) {
  return request({
    url: '/xxw_shop_goods/b/spu',
    method: 'delete',
    params: {
      spuId
    }
  })
}
