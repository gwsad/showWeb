import { http } from "@/utils/http";


export const getHomeMessage = () => {
  return http.request("get", "/topic/orderlist");
}

// 登录
export const getLogin = (data: any) => {
  return http.request("post", "/user/login", {data});
}
// 创建用户角色
export const create = (data: any) => {
  return http.request("post", "/user/create", {data});
}
// 获取用户信息
export const getUserInfo = () => {
  return http.request("get", "/user/currentUser");
}

// 获取热门卡券
export const getHotCoupon = () => {
  return http.request("get", "/card/hotList",);
}

// 获取卡券分类
export const getCouponCategory = () => {
  return http.request("get", "/card/categoryList",);
}

// 获取卡券信息
export const getCouponInfo = (id) => {
  return http.request("get", `/card/${id}/list`);
}

// 获取卡券详情
export const getCouponDetail = (id) => {
  return http.request("get", `/card/${id}/info`);
}

// 提交出售
export const submitSell = (cartoryId,cardId,data) => {
  return http.request("post", `/deal/${cartoryId}/${cardId}`,{data});
}

// 订单列表
export const getOrderList = (status) => {
  return http.request("get", `/order/list?status=${status}`);
}

// 设置用户昵称
export const setNickname = (data) => {
  return http.request("post", `/user/setNickname`,{data});
}

// 设置交易密码
export const resetPass = (data) => {
  return http.request("post", `/user/resetPass`,{data});
}

// 注销账户
export const logout = () => {
  return http.request("get", `/user/cancel`);
}

// 实名认证
export const realName = (data) => {
  return http.request("post", `/user/verifiedUser`,{data});
}

// 我的伙伴
export const getMyPartner = () => {
  return http.request("get", `/user/friendList`);
}

// 接受邀请人数
export const getInviteNum = () => {
  return http.request("get", `/topic/userCount`);
}

// 获取支持银行
export const getBankList = () => {
  return http.request("get", `/withdraw`);
}

// 添加提现账号
export const addBank = (data) => {
  return http.request("post", `/user/setCashAccount`,{data});
}

// 发起提现
export const withdraw = (data) => {
  return http.request("post", `/withdraw`,{data});
}

// 获取提现记录
export const getWithdrawList = (data) => {
  return http.request("get", `/withdraw/list`,{params:data});
}

// 订单评价
export const orderComment = () => {
  return http.request("get", `/order/comment/list`);
}