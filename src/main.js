// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MiniUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/css/global.css'

// 引入自己的ul和li组件
import BoxUL from '@/components/Common/BoxUL'
import BoxLI from '@/components/Common/BoxLI'
// picViewer
import ViewPicture from '@/components/Common/ViewPicture'
// 页底
import PageBottom from '@/components/Common/PageBottom'
// 评论组件
import Review from '@/components/Common/Review'

Vue.component(BoxUL.name, BoxUL)
Vue.component(BoxLI.name, BoxLI)
Vue.component(ViewPicture.name, ViewPicture)
Vue.component(PageBottom.name, PageBottom)
Vue.component(Review.name, Review)

// 配置拦截器在加载时显示loading
Axios.interceptors.request.use(function (config) {
  MiniUI.Indicator.open({
    text: "玩命加载中~"
  });
  return config;
});
Axios.interceptors.response.use(function (response) {
  // response.config
  MiniUI.Indicator.close();
  return response;
});

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://127.0.0.1:8081/api/'
Vue.prototype.$axios = Axios
Vue.use(MiniUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
