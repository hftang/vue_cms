import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopCarContainer from '../components/tabbar/ShopCarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      component: HomeContainer,

    },
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopCarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},//传参数/:id

  ],
  linkActiveClass: 'mui-active'//选中那个tabel 给设置样式
})
