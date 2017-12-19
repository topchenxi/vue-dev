import axios from 'axios';
import { Message } from 'element-ui';
// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 5000
})
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
