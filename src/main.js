import Vue from 'vue'
import router from './router'
import app from './App'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'

//导入mint-ui
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:c=>c(app)
})
