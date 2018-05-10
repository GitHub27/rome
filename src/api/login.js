import request from '@/utils/request'

export function login(loginReq) {
  return request({
    url: '/user/login',
    method: 'post',
    data: loginReq
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 获取图形验证码
export function captcha() {
  return request({
    url: '/captcha',
    method: 'get'
  })
}
