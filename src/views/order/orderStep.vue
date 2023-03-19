<template>
  <div class="orderStep">
    <div v-for="(item,index) in orderStepList" :key="index" class="orderStep__item">
      <div class="orderStep__item-head">
        <img :src="item.url" alt="">
        <span>{{ item.title }}</span>
      </div>
      <dev class="orderStep__item-content" v-for="(itemDesc,indexDesc) in item.list" :key="indexDesc">{{ itemDesc }}<br /></dev>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import register from '../../assets/order/order-register.png'
import certified from '../../assets/order/order-certified.png'
import submit from '../../assets/order/order-submit.png'
import account from '../../assets/order/order-account.png'
const orderStepList = ref([
  {url: register, title: zhTransform('登录注册'),list: [zhTransform('1. 用手机号码或者邮箱账号注册账号'), zhTransform('2. 用手机号码或者邮箱账号获取验证码'),zhTransform('3. 直接完成注册并登录')]},
  {url: certified, title: zhTransform('实名认证'),list: [zhTransform('1. 输入真实姓名和身份证号码'), zhTransform('2. 为了账户安全，实名认证后才可提现')]},
  {url: submit, title: zhTransform('提交卡密'),list: [zhTransform('1. 选择正确的面值'), zhTransform('2.提交相对应正确的卡号和卡密'),zhTransform('3. 等待系统验证(恶意提交会被封号哟)')]},
  {url: account, title: zhTransform('账户提现'),list: [zhTransform('1. 添加本人名下的提现账号'), zhTransform('2.进入提现页面提交提现申请'),zhTransform('3. 资金秒到账，偶尔有延迟')]},
])
</script>
<style lang="scss" scoped>
.orderStep{
  padding-top: 3rem;
  background: #f8fbff;
  .orderStep__item{
    width: 69rem;
    margin: 0 auto 3rem;
    padding: 2.9rem 0 4.4rem 2.4rem;
    box-sizing: border-box;
    background: #fff;
    border-radius: 1.8rem;
    .orderStep__item-head{
      display: flex;
      align-items: center;
    }
    img{
      width: 6.4rem;
      height: 6.4rem;
      margin-right: 1.6rem;
    }
    .orderStep__item-content{
      display: block;
      margin-top: 2.6rem;
      margin-bottom: 2rem;
      color: #7D8899;
      font-size: 2rem;
      text-align: left;
      padding-left: 8rem;
    }
  }
}
</style>
