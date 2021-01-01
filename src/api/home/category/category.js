import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'admin/category/index',
    method: 'get',
    params: query
  })
}

export function createCategory(data) {
  return request({
    url: 'admin/category/store',
    method: 'post',
    data
  })
}

export function updateCategory(data, id) {
  return request({
    url: 'admin/category/update/' + id,
    method: 'patch',
    data
  })
}

export function deleteCategory(id) {
  return request({
    url: 'admin/category/delete/' + id,
    method: 'delete'
  })
}

