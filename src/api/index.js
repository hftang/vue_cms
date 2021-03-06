/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

const BASE_URL = '/api'
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + "/login_sms", {phone, code}, "POST")
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + "/userinfo")
// 10、用户登出
export const reqLoginOut = () => ajax(BASE_URL + "/logout")

//11 获取商家信息
export const reqShopInfo = () => ajax('/info')
//12 获取商家评论
export const reqShopRatings = () => ajax('/ratings')
//13 获取商家商品列表
export const reqShopGoods = () => ajax('/goods')
//获取图片轮播图luobotu
export const reqluobotu = () => ajax('/luobotu')
//获取新闻列表
export const reqNewsList = () => ajax('/getnewslist')
//获取新闻详情
export const reqNewsInfos = () => ajax('/getnewsinfos')
//获取评论列表
export const reqMementLists = (id, pageIndex) => ajax('/getmements', {id, pageIndex}, "GET")
//获取图片详情
export const reqImageInfos = (imageId) => ajax('/getimageinfos', {imageId}, "GET")
//获取商品列表
export const reqGoodsList = (indexPage) => ajax('/getgoodslist', {indexPage}, "GET")
//获取图片轮播图luobotu02
export const reqluobotu02 = () => ajax('/luobotu02')
//获取商品的详情
export const reqGoodsInfos = (goodsId) => ajax('/getgoodsinfos', {goodsId}, "GET")
//获取goods desc
export const reqGoodsDesc = (goodsId) => ajax('/getgoodsdesc', {goodsId}, "GET")
//获取购物车里已有产品
export const reqShopCartGoods = (strId) => ajax('/getshopcart', {strId}, "GET")
