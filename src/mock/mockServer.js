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
//获取图片分类
Mock.mock('/getimagecategorys', {code: 0, data: data.getimagecategory})
//获取图片列表
Mock.mock(RegExp('/getimagelist' + ".*"), "get", {code: 0, data: data.getimagelist})
//获取图片详情
Mock.mock(RegExp('/getimageinfos' + ".*"), "get", {code: 0, data: data.getimageinfos})
//获取商品列表
Mock.mock(RegExp('/getgoodslist' + '.*'), 'get', {code: 0, data: data.goodslist})
//轮播图02
Mock.mock('/luobotu02', {code: 0, data: data.luobotu02})
//获取商品的详情
Mock.mock(RegExp('/getgoodsinfos' + '.*'), 'get', {code: 0, data: data.goodsinfos})
//获取商品desc描述
Mock.mock(RegExp('/getgoodsdesc' + '.*'), 'get', {code: 0, data: data.goodsdesc})
