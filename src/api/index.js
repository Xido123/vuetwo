//根据经纬度回去位置详情

import ajax from "@/api/ajax.ts";
let url = 'http://localhost:3000/'
export const reqAddress = (geohash) =>ajax(url+'testapi', {}, 'GET')
//获取食品分类列表
export const reqFoodTypes = () =>ajax(url)
//根据经纬度获取商铺列表
//根据经纬度和关键字搜索商铺列表
//获取一次性验证码
//用户名密码登录
//发送短信验证码
//手机号验证码登录
//根据会话获取用户信息
//用户登出

