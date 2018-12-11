import Vue from 'vue'
import router from './router'
import app from './App'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入mint-ui
import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:c=>c(app)
})
