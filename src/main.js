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

    },

    //购物车里添加商品个数从新赋值 这边也做保存
    updateGoodsInfo(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          console.log('--->从新赋值' + item.id)
          return true
        }
      })

      //保存到localstorage中
      localStorage.setItem("car", JSON.stringify(state.car))
    },
    //根据id移除购物车里的内容
    removeGoodsById(state, id) {
      console.log("--->" + id)
      state.car.some((item, index) => {
        if (item.id == id) {
          state.car.splice(index, 1)
          console.log("--->--" + id)
        }
      })
      localStorage.setItem("car", JSON.stringify(state.car))

    },
    //把switch开关的状态跟 state.car关联起来
    onchangeSwitch(state, infos) {
      state.car.forEach(item => {
        if (item.id == infos.id) {
          item.selected = infos.selected
        }
      })

      localStorage.setItem("car", JSON.stringify(state.car))
    }


  },
  getters: {
    getTotalCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })

      return c;
    },

    //getgoodscount

    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })

      return o;

    },

    //获取那些switch 开关是被打开的

    getSwitchState(state) {
      var obj = {};
      state.car.forEach(item => {
        obj[item.id] = item.selected
      })
      return obj
    },

    //获取到商品个数 和 商品的总价格

    getShopGoodsCountAndPrice(state) {
      var goods = {
        count: 0,
        total: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          goods.count += item.count
          goods.total += item.price * item.count
        }


      })
      return goods
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
