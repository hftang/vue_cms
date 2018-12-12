import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopCarContainer from '../components/tabbar/ShopCarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewsList from '../components/news/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      component: HomeContainer,
      // childen: {
      //   path: '/newslist',
      //   component: NewsList
      // }
    },
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopCarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList}
  ],
  linkActiveClass: 'mui-active'
})
