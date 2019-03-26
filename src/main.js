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

// 页底
import PageBottom from '@/components/Common/PageBottom'

Vue.component(BoxUL.name, BoxUL)
Vue.component(BoxLI.name, BoxLI)

Vue.component(PageBottom.name, PageBottom)

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
