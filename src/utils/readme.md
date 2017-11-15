关于请求数据

请求数据封装接口要保持一致的使用方式

## fetch

底层使用 fetch，通过 request 处理API

## xhr

底层使用 axios，基于 xhr 请求数据，通过 xhr 文件 处理 api

/**

https://github.com/mzabriskie/axios

axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#options(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]])

*/

import axios from 'axios'

var instance = axios.create({
  baseURL: `${env.apiBaseUrl}`,
  timeout: 1500,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'Accept': 'application/json',
    // 'dataType': 'json',
    // 'Content-Type': 'application/json; charset=utf-8',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'text/html; charset=UTF-8',
  },
})

// Override timeout
instance.defaults.timeout = 2500

instance.get('/longRequest', {
  timeout: 5000,
})

// 添加请求拦截器
ajax.interceptors.request.use((config) => {
  // 在发送请求之前做某事
  return config
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
ajax.interceptors.response.use((response) => {
  // 对响应数据做些事
  return checkStatus(response)
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})


// 后期可以 移除请求拦截器
var myInterceptor = axios.interceptors.request.use(function () {/*...*/})
axios.interceptors.request.eject(myInterceptor)
