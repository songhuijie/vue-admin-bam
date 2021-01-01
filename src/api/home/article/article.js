import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'admin/article/index',
    method: 'get',
    params: query
  })
}

export function createArticle(data) {
  return request({
    url: 'admin/article/store',
    method: 'post',
    data
  })
}

export function updateArticle(data, id) {
  return request({
    url: 'admin/article/update/' + id,
    method: 'patch',
    data
  })
}

export function deleteArticle(id) {
  return request({
    url: 'admin/article/delete/' + id,
    method: 'delete'
  })
}

