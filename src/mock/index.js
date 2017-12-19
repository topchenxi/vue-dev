import Mock from 'mockjs';
import articleAPI from './data/article';

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/article\/list/, 'get', articleAPI.getList)

export default Mock
