import http from '@/utils/http';

export const httpList = (query = {}) => {
  console.log(1);
  return http({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export const httpArticle = () => {
  return http({
    url: '/article/detail',
    method: 'get'
  })
}

export const httpPv = (pv) => {
  return http({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}
