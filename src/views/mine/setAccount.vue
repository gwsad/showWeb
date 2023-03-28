<template>
  <div class="setAccount">
    <div class="setAccount__head">
      <div class="setAccount__head__top">
        <div>
          <div>{{ zhTransform(`昵称：${userInfo.nickname === undefined ? '' : userInfo.nickname}`) }}</div>
          <div>{{ zhTransform('您已登录港回收系统平台，可在平台进行寄卖卡券，进行账户提现等功能') }}</div>
        </div>
        <img :src="logo" alt="">
      </div>
      <div class="setAccount__head__btn" @click="OnRealName()">{{ zhTransform('去进行认证') }}</div>
    </div>
    <div class="setAccount__count">
      <div v-for="(item,index) in countList" :key="index" class="setAccount__count__item" @click="onPage(item.title)">
        <span class="setAccount__count__item__title">{{ zhTransform(item.title) }}</span>
        <div>
          <span class="setAccount__count__item__content">{{ zhTransform(item.count) }}</span>
          <img v-if="item.isShowMore" :src="more" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,computed} from "vue";
import { showConfirmDialog,showToast } from 'vant'
import {zhTransform}  from '@/utils'
import { useRouter } from "vue-router"
import { useUserStoreHook } from '@/store/modules/user'
import logo from '../../assets/project-logo.png'
import more from '../../assets/project-more.png'
import { removeToken } from "@/utils/auth";
import { logout } from '@/api/home'
const router = useRouter()
const userInfo = computed(() => {
  return useUserStoreHook().userInfo || {};
});
const countList = ref([
  {title: '昵称修改', count: '',isShowMore: true},
  // {title: '实名认证', count: '',isShowMore: true},
  {title: '提现账号', count: '',isShowMore: true},
  {title: '交易密码', count: '修改交易密码',isShowMore: true},
  {title: '手机号码', count: userInfo.value.phone,isShowMore: false},
  {title: '注册时间', count: userInfo.value.updatedAt,isShowMore: false},
  {title: '退出登录', count: '',isShowMore: true},
  {title: '注销账号', count: '',isShowMore: true},
])
const OnRealName = () => {
  router.push('/realName')
}
const onPage = (title: string) => {
  switch (title) {
    case '昵称修改':
      router.push('/modifyName')
      break;
    case '实名认证':
      router.push('/realName')
      break;
    case '交易密码':
      router.push('/setPassword')
      break;
    case '退出登录':
      showConfirmDialog({
        title: '退出登录',
        message:'确认退出程序！',})
      .then(() => {
        removeToken()
        router.push('/login')
      })
      break;
    case '注销账号':
      showConfirmDialog({
        title: '注销账号',
        message:'确认注销程序！',})
      .then(async() => {
        const res = await logout()
        if(res.code === 200){
          showToast('注销成功')
          removeToken()
          router.push('/login')
        }
      })
      break;
    default:
      break;
  }
}
</script>
<style lang="scss" scoped>
.setAccount{
  background: #f8fbff;
  min-height: 100vh;
  .setAccount__head{
    width: 75rem;
    height: 28rem;
    background: #fff;
    padding: 3rem;
    box-sizing: border-box;
    .setAccount__head__top{
      display: flex;
      justify-content: space-between;
      &>div{
        text-align: left;
        div:nth-of-type(1){
          font-size: 3rem;
          margin-bottom: 3rem;
        }
        div:nth-of-type(2){
          width: 46.2rem;
          font-size: 2rem;
        }
      }
      img{
        width: 12.8rem;
        height: 12.8rem;
      }
    }
    .setAccount__head__btn{
      width: 20.8rem;
      height: 6.4rem;
      border-radius: 3.2rem;
      background: linear-gradient(180deg, #42CFFF 0%, #1E9AFF 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #fff;
      margin-top: 3.2rem;
    }
  }
  .setAccount__count{
    width: 75rem;
    background: #fff;
    margin-top: 6rem;
    padding: 3rem;
    padding-bottom: 0;
    box-sizing: border-box;
    background: #fff;
    .setAccount__count__item{
      height: 8.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      &>div{
        display: flex;
        align-items: center;
      }
      .setAccount__count__item__title{
        font-size: 2.4rem;
        color: #233762;
      }
      .setAccount__count__item__content{
        font-size: 2rem;
        color: #7D8899;
        margin-right: 0.4rem;
      }
      img{
        width: 3.2rem;
        height: 3.2rem;
      }
    }
    .setAccount__count__item:last-child{
      border-bottom: none;
    }
  }
}
</style>
