import Vue from 'vue'
import router from './router'
import app from './App'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import './mock/mockServer' //加载mock模拟数据
//设置全局的时间过滤器
//导入时间插件
import moment from 'moment'
//导入vue-resource
import VueResource from 'vue-resource'
import MintUi from 'mint-ui'

import VuePreview from 'vue-preview'
import Vuex from 'vuex'
//导入mint-ui
// import {Header, Swipe, SwipeItem, Button} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {

  return moment(dateStr).format(pattern)

})

Vue.use(VueResource)
// Vue.http.options.root('http://localhost:8080/')

//导入mint-ui 的图片懒加载
// import {Lazyload} from 'mint-ui'
//
// Vue.use(Lazyload)

Vue.use(MintUi)

Vue.use(VuePreview)

// import store from './store/index'

Vue.use(Vuex)

//因为每次main函数必须启动 所以 在这里解析下 localstorage中的car

var car = JSON.parse(localStorage.getItem("car") || '[]')

const store = new Vuex.Store({
  state: {
    car: car,
  },
  mutations: {

    addToCar(state, goodinfos) {
      var flag = false
      state.car.some(item => {
        if (item.id == goodinfos.id) {
          //找到相同的产品 让数量加一
          item.count += parseInt(goodinfos.count)
          flag = true
          return true
        }
      })

      if (!flag) {
        state.car.push(goodinfos)
      }

      //持久化 car 到本地
      localStorage.setItem('car', JSON.stringify(state.car))

    }

  },
  getters: {
    getTotalCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })

      return c;
    }
  }

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(app),
  store

})
