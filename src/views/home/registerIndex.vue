<template>
  <div class="register">
    <div class="register__head">
      <img :src="logo" alt="">
      <span>{{ zhTransform('欢迎来到港回收') }}</span>
    </div>
    <div class="register__address" @click="onChoseNation()">
      <div>
        <span>选择地区：</span>
        <span>{{ zhTransform(choseAddress) }}</span>
      </div>
      <img :src="more" alt="">
    </div>
    <div class="register__info">
      <div class="register__info__item">
        <div>{{ zhTransform('手机号码：') }}</div>
        <input v-model="loginInfo.phone" type="phone" maxlength="11" minlength="5" :placeholder="zhTransform('请输入手机号码')">
      </div>
      <div class="register__info__item">
        <div>{{ zhTransform('邀请码：') }}</div>
        <input v-model="loginInfo.invitationCode"  type="text" :placeholder="zhTransform('请输入邀请码')">
      </div>
      <div class="register__info__item">
        <div>{{ zhTransform('密码：') }}</div>
        <input v-model="loginInfo.password"  type="text" :placeholder="zhTransform('请输入密码')">
      </div>
    </div>
    <action-sheet v-model:show="show" :actions="actions" @select="onSelect" :title="zhTransform('选择地区')" @close="onClose"></action-sheet>
    <div class="common-btn" v-show="showBtn">
      <div @click="onLogin">{{ zhTransform('确定') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onBeforeMount,unref} from "vue";
import {zhTransform}  from '@/utils'
import { setToken } from "@/utils/auth";
import logo from '@/assets/project-logo.png'
import more from '@/assets/project-more.png'
import { useRouter } from "vue-router"
import { ActionSheet,showToast,showConfirmDialog } from 'vant';
import { create } from '@/api/home'
import { useUserStoreHook } from "@/store/modules/user";
import { useCouponCatHook } from "@/store/modules/card";
const show = ref(false)
const showBtn = ref(true)
const { currentRoute } = useRouter();
const { query } = unref(currentRoute);
const loginInfo = ref({
  phone: '',
  invitationCode: '',
  password: ''
}) // 登录信息
const router = useRouter()
const choseAddress  = ref('中国大陆') // 选择的地区
const actions = ref([{name:'中国大陆'},{name:'中国台湾'},{name:'中国香港'},{name:'中国澳门'}])
const onChoseNation = () => {
  show.value = true
  showBtn.value = false
}
const onClose = () => {
  show.value = false
  showBtn.value = true
}
const onSelect = (action: any) => {
  choseAddress.value = action.name
  onClose()
}
onBeforeMount(() => {
  console.log(query)
  if( query.shareCode ){
    loginInfo.value.invitationCode = query.shareCode
  }
})
const onLogin = async() => {
  if(!loginInfo.value.phone){
    return showToast({
      message: zhTransform('请输入手机号码'),
      duration: 2000
    })
  }
  if(!loginInfo.value.password){
    return showToast({
      message: zhTransform('请输入密码'),
      duration: 2000
    })
  }
  switch (choseAddress.value) {
    case zhTransform('中国大陆'):
      if( loginInfo.value.phone.length !== 11 ){
        return showToast({
          message: zhTransform('请输入正确的手机号码'),
          duration: 2000
        })
      }
      break;
    case zhTransform('中国台湾'):
      if( loginInfo.value.phone.length !== 10 ){
        return showToast({
          message: zhTransform('请输入正确的手机号码'),
          duration: 2000
        })
      }
      break;
    case zhTransform('香港特别行政区') || zhTransform('澳门特别行政区'):
      if( loginInfo.value.phone.length !== 8 ){
        return showToast({
          message: zhTransform('请输入正确的手机号码'),
          duration: 2000
        })
      }
      break;
    default:
      break;
  }
  console.log(loginInfo.value)
  try {
    let _res = await useUserStoreHook().loginByUsername({phone: loginInfo.value.phone, password: loginInfo.value.password})
    setToken(_res.data.token)
    await useUserStoreHook().handleGetUserInfo()
    router.push({path: '/enter/home'})
  } catch (error) {
    if( error.code === 20006 ){
      showConfirmDialog({ message: '未检测到账户，平台将会使用该号码注册账号，是否确认？', })
      .then(async () => {
        loginInfo.value.invitationCode = String(loginInfo.value.invitationCode)
        let res = await create(Object.assign(loginInfo.value,{region: choseAddress.value}))
        if( res.code === 200 ){
          setToken(res.data.token)
          await useUserStoreHook().handleGetUserInfo()
          router.push({path: '/enter/home'})
        }else{
          showToast({ message: zhTransform(res.message),  duration: 2000 })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.register{
  background: #f8fbff;
  min-height: 100vh;
  padding: 6rem 3rem;
  box-sizing: border-box;
  .register__head{
    display: flex;
    align-items: center;
    img{
      width: 8.8rem;
      height: 8.8rem;
      margin-right: 2.4rem;
    }
    span{
      font-size: 3.6rem;
    }
  }
  .register__address{
    width: 69rem;
    height: 8.8rem;
    padding: 3rem 2.4rem;
    box-sizing: border-box;
    margin: 6rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 1.8rem;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
    div{
      span:nth-of-type(1){
        font-size: 2rem;
        color: #7D8899;
      }
    }
    img{
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  .register__info{
    width: 69rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 1.8rem;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
    padding: 0 2.4rem;
    box-sizing: border-box;
    .register__info__item{
      height: 12.4rem;
      border-bottom: 0.1rem solid rgba(0,0,0,.1);
      padding-top: 3.1rem;
      div{
        font-size: 2rem;
        color: #7D8899;
        margin-bottom: 2rem;
      }
      input{
        width: 64.2rem;
        height: 6.4rem;
        border: none;
        outline: none;
        font-size: 2.4rem;
        color: #233762;
        &::placeholder{
          color: #7D8899;
        }
      }
    }
    .register__info__item:last-child{
      border-bottom: none;
    }
  }
}
</style>
