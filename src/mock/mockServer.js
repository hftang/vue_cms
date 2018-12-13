/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info})
//轮播图
Mock.mock('/luobotu', {code: 0, data: data.luobotu})
//新闻列表
Mock.mock('/getnewslist', {code: 0, data: data.newslist})
//获取新闻详情
Mock.mock('/getnewsinfos', {code: 0, data: data.newsinfo})
//获取评论
Mock.mock(RegExp('/getmements' + ".*"), "get", {code: 0, data: data.mementlist})
//提交评论
Mock.mock('/submitcomments', {code: 0, data: data.submitcomments})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
