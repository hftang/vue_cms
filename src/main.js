import Vue from 'vue'
import router from './router'
import app from './App'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import './mock/mockServer'//加载mock模拟数据
//导入mint-ui
// import {Header, Swipe, SwipeItem, Button} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

//设置全局的时间过滤器
//导入时间插件
import moment from 'moment'

Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {

  return moment(dateStr).format(pattern)

})
//导入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)
// Vue.http.options.root('http://localhost:8080/')

//导入mint-ui 的图片懒加载
// import {Lazyload} from 'mint-ui'
//
// Vue.use(Lazyload)

import MintUi from 'mint-ui'

Vue.use(MintUi)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'

Vue.use(VuePreview)

// import store from './store/index'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    car: [],
  },
  mutations: {},
  getters: {}

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(app),
  store

})
