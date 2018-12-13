import Vue from 'vue'
import router from './router'
import app from './App'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入mint-ui
import {Header, Swipe, SwipeItem, Button} from 'mint-ui';
import './mock/mockServer'//加载mock模拟数据

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//设置全局的时间过滤器
//导入时间插件
import moment from 'moment'

Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {

  return moment(dateStr).format(pattern)

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
