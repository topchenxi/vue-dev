import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import Mixin from '@/common/mixin';
import axios from 'axios';
import VueAxios from 'vue-axios';

import './mock';

Vue.config.productionTip = false;

// 初始化整个 Element 到 vue
Vue.use(ElementUI);

Vue.use(VueAxios, axios);
// axios.defaults.baseURL = "/app";
axios.defaults.timeout = 20000;
Vue.mixin(Mixin)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
