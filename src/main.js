import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import Mixin from '@/common/mixin'
Vue.config.productionTip = false;

// 初始化整个 Element 到 vue
Vue.use(ElementUI)
Vue.mixin(Mixin)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
